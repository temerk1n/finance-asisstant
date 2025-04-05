import { CSSProperties, FC, useState } from 'react';
import { Flex, Typography } from 'antd';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { ChartForm } from '../../components';
import { pieDataMock } from '../../__mocks__/pieDataMock.ts';

ChartJS.register(ArcElement, Tooltip, Legend);

const { Title } = Typography;

const contentStyle: CSSProperties = {
    width: '100%',
    height: '100%',
    border: '2px solid lightgray',
};

export const AnalyticsPage: FC = () => {
    const [pieData, setPieData] = useState(pieDataMock);

    return (
        <Flex
            vertical
            gap="large"
            style={{ height: '100%' }}>
            <Title level={1}>Статистика</Title>
            <ChartForm setData={setPieData} />
            <Flex style={contentStyle}>
                {pieData && <Pie data={pieData} />}
            </Flex>
        </Flex>
    );
};
