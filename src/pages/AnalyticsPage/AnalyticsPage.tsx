import { CSSProperties, FC, useState } from 'react';
import { Flex, Typography } from 'antd';
import { ChartForm } from '../../components';
import { PieChart } from '../../components/PieChart/PieChart.tsx';
import { BarChart } from '../../components/BarChart/BarChart.tsx';
import { LineChart } from '../../components/LineChart/LineChart.tsx';
import { LineChartData } from '../../types.ts';

const { Title } = Typography;

const contentStyle: CSSProperties = {
    width: '100%',
    border: '2px solid lightgray',
    padding: '2rem',
};

export const AnalyticsPage: FC = () => {
    const [chartData, setChartData] = useState<number[]>();
    const [lineChartData, setLineChartData] = useState<LineChartData>();

    return (
        <Flex
            vertical
            gap="large">
            <Title level={1}>Статистика</Title>
            <ChartForm
                setChartData={setChartData}
                setLineChartData={setLineChartData}
            />
            <Flex style={contentStyle}>
                <>
                    {lineChartData && (
                        <Flex flex={4}>
                            <div style={{ marginBlock: 'auto', width: '100%' }}>
                                <LineChart lineChartData={lineChartData} />
                            </div>
                        </Flex>
                    )}
                    {chartData && (
                        <>
                            <Flex flex={2}>
                                <PieChart chartData={chartData} />
                            </Flex>
                            <Flex flex={3}>
                                <div
                                    style={{
                                        marginBlock: 'auto',
                                        width: '100%',
                                    }}>
                                    <BarChart chartData={chartData} />
                                </div>
                            </Flex>
                        </>
                    )}
                </>
            </Flex>
        </Flex>
    );
};
