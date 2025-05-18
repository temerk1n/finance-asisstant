import { FC } from 'react';
import { Button, DatePicker, Form, notification, Select } from 'antd';
import { ABSENCE_WARNING_PERCENTAGE, DEPARTMENTS } from '../../constants.ts';
import { filterDataForCharts, filterLineChartData } from '../../utils.ts';
import { LineChartData } from '../../types.ts';
import { applicationsMock } from '../../__mocks__/applicationsMock.ts';

const { RangePicker } = DatePicker;

const departmentsOptions = DEPARTMENTS.map((department) => {
    return { value: department, label: department };
});

type FormItems = {
    date?: [Date, Date];
    department?: string;
};

interface Props {
    setChartData: (data?: number[]) => void;
    setLineChartData: (data?: LineChartData) => void;
}

export const ChartForm: FC<Props> = ({ setChartData, setLineChartData }) => {
    const [form] = Form.useForm<FormItems>();
    const [notificationApi, NotificationContext] =
        notification.useNotification();

    const onFinish = (values: FormItems) => {
        const filteredChartData = filterDataForCharts(values);
        setChartData(filteredChartData);
        setLineChartData(filterLineChartData(values));

        // Общее количество сотрудников в отделе
        const employeesCount = applicationsMock.filter(
            (application) => application.department === values.department,
        ).length;

        // Количество заявок в отделе
        const absenceCount =
            filteredChartData?.reduce((acc, curr) => acc + curr, 0) || 0;

        if (
            filteredChartData &&
            values.department &&
            absenceCount >= employeesCount * ABSENCE_WARNING_PERCENTAGE
        ) {
            notificationApi.warning({
                message: 'Уведомление',
                description: `Отсутствует более ${ABSENCE_WARNING_PERCENTAGE * 100}% сотрудников`,
                placement: 'bottomRight',
                duration: 5,
            });
        }
    };

    return (
        <>
            <Form
                layout="inline"
                form={form}
                onFinish={onFinish}>
                <Form.Item name="department">
                    <Select
                        showSearch
                        allowClear
                        placeholder="Подразделение"
                        options={departmentsOptions}
                    />
                </Form.Item>
                <Form.Item name="date">
                    <RangePicker
                        placeholder={[
                            'Дата начала периода',
                            'Дата конца периода',
                        ]}
                    />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit">Показать</Button>
                </Form.Item>
            </Form>
            {NotificationContext}
        </>
    );
};
