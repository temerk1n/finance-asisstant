import { FC } from 'react';
import { Button, DatePicker, Form, notification, Select } from 'antd';
import { ABSENCE_WARNING, DEPARTMENTS } from '../../constants.ts';
import { filterDataForCharts, filterLineChartData } from '../../utils.ts';
import { LineChartData } from '../../types.ts';

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

        if (
            filteredChartData &&
            values.department &&
            filteredChartData.reduce((acc, curr) => acc + curr, 0) >
                ABSENCE_WARNING
        ) {
            notificationApi.warning({
                message: 'Уведомление',
                description: `Количество отсутствий больше ${ABSENCE_WARNING}`,
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
