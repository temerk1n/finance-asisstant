import { FC } from 'react';
import { Button, DatePicker, Form, Select } from 'antd';
import { DEPARTMENTS } from '../../constants.ts';
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

    const onFinish = (values: FormItems) => {
        setChartData(filterDataForCharts(values));
        setLineChartData(filterLineChartData(values));
    };

    return (
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
                    placeholder={['Дата начала периода', 'Дата конца периода']}
                />
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit">Показать</Button>
            </Form.Item>
        </Form>
    );
};
