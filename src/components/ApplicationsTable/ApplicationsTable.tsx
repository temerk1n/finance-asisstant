import { FC, useEffect, useState } from 'react';
import { Table, TableColumnsType } from 'antd';
import { applicationsMock } from '../../__mocks__/applicationsMock.ts';
import { useFilters } from '../../contexts';
import { Application } from '../../types.ts';
import { filterApplications } from '../../utils.ts';
import './style.css';

const columns: TableColumnsType<Application> = [
    {
        title: 'Дата',
        dataIndex: 'date',
        key: 'date',
        render: (value: Date) => value.toLocaleDateString(),
    },
    {
        title: '№',
        dataIndex: 'number',
        key: 'number',
    },
    {
        title: 'Сотрудник',
        dataIndex: 'employee',
        key: 'employee',
    },
    {
        title: 'Тип отсутствия',
        dataIndex: 'skipType',
        key: 'skipType',
    },
    {
        title: 'Даты отсутствия',
        dataIndex: 'datesOfAbsence',
        key: 'datesOfAbsence',
        render: (value: { from: Date; to: Date }) =>
            `${value.from.toLocaleDateString()} - ${value.to.toLocaleDateString()}`,
    },
    {
        title: 'Статус',
        dataIndex: 'status',
        key: 'status',
    },
] as const;

interface Props {
    searchValue?: string;
}

export const ApplicationsTable: FC<Props> = ({ searchValue }) => {
    const { filters } = useFilters();
    const [data, setData] = useState<Application[]>();

    useEffect(() => {
        setData(filterApplications(applicationsMock, filters, searchValue));
    }, [filters, searchValue]);

    return (
        <Table
            rowClassName={(record) => {
                if (!record.recommended) {
                    return 'not-recommended';
                } else {
                    return '';
                }
            }}
            rowHoverable={false}
            columns={columns}
            dataSource={data}
            bordered
        />
    );
};
