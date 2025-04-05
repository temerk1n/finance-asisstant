import { FC } from 'react';
import { Button, DatePicker, Form, Select } from 'antd';
import { pieDataMock } from '../../__mocks__/pieDataMock.ts';
import { DEPARTMENTS } from '../../constants.ts';

const { RangePicker } = DatePicker;

const departmentsOptions = DEPARTMENTS.map((department) => {
    return { value: department, label: department };
});

type FormItems = {
    date?: [string, string];
    department?: string;
};

interface Props {
    setData: (data: typeof pieDataMock) => void;
}

export const ChartForm: FC<Props> = ({ setData }) => {
    const [form] = Form.useForm<FormItems>();

    const onFinish = (values: FormItems) => {
        console.log(values);
        // api request and then setData
        setData(pieDataMock);
    };

    return (
        <Form
            layout="inline"
            form={form}
            onFinish={onFinish}>
            <Form.Item name="department">
                <Select
                    showSearch
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
