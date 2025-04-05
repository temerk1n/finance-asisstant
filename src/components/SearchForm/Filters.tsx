import { FC, memo, useCallback } from 'react';
import { Button, DatePicker, Flex, Form, Select } from 'antd';
import { defaultFilters, useFilters } from '../../contexts';
import { SKIP_TYPES, STATUSES } from '../../constants.ts';
import { SkipType, Status } from '../../types.ts';

const { RangePicker } = DatePicker;

const skipTypeOptions = SKIP_TYPES.map((skipType) => {
    return { value: skipType, label: skipType };
});

const statusOptions = STATUSES.map((status) => {
    return { value: status, label: status };
});

interface Props {
    closeModal: () => void;
}

type FiltersForm = {
    skipType?: SkipType;
    status?: Status;
    date?: [Date | undefined, Date | undefined];
};

export const Filters: FC<Props> = memo(({ closeModal }) => {
    const [form] = Form.useForm<FiltersForm>();
    const { setFilters } = useFilters();

    const clearFilters = useCallback(() => {
        setFilters?.(defaultFilters);
    }, [setFilters]);

    const onFinish = useCallback(
        (values: FiltersForm) => {
            setFilters?.({
                skipType: values.skipType,
                status: values.status,
                date: {
                    from: values.date?.[0],
                    to: values.date?.[1],
                },
            });
        },
        [setFilters],
    );

    return (
        <Form
            form={form}
            onFinish={onFinish}
            layout="vertical">
            <Form.Item
                name="skipType"
                label="Тип отсутствия">
                <Select
                    allowClear
                    placeholder="Тип отсутствия"
                    options={skipTypeOptions}
                />
            </Form.Item>
            <Form.Item
                name="status"
                label="Статус заявки">
                <Select
                    allowClear
                    placeholder="Статус заявки"
                    options={statusOptions}
                />
            </Form.Item>
            <Form.Item
                name="date"
                label="Дата заявки">
                <RangePicker
                    allowClear
                    placeholder={['От', 'До']}
                />
            </Form.Item>
            <Form.Item>
                <Flex gap="small">
                    <Button
                        onClick={closeModal}
                        htmlType="submit">
                        Показать заявки
                    </Button>
                    <Button onClick={clearFilters}>Сбросить фильтры</Button>
                </Flex>
            </Form.Item>
        </Form>
    );
});
