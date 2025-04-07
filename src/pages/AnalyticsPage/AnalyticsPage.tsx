import { CSSProperties, FC, useState } from 'react';
import { Flex, Typography } from 'antd';
import { ChartForm } from '../../components/ChartForm/ChartForm.tsx';
import { PieChart } from '../../components/PieChart/PieChart.tsx';
import { BarChart } from '../../components/BarChart/BarChart.tsx';
import { LineChart } from '../../components/LineChart/LineChart.tsx';
import { LineChartData } from '../../types.ts';

const { Title } = Typography;

const contentStyle: CSSProperties = {
    border: '2px solid lightgray',
    padding: '2rem',
};

export const AnalyticsPage: FC = () => {
    const [chartData, setChartData] = useState<number[]>();
    const [lineChartData, setLineChartData] = useState<LineChartData>();

    return (
        <>
            <Flex
                vertical
                gap="large">
                <Title level={1}>Статистика</Title>
                <ChartForm
                    setChartData={setChartData}
                    setLineChartData={setLineChartData}
                />
                <Flex
                    justify="center"
                    align="center"
                    style={contentStyle}>
                    {lineChartData && (
                        <Flex
                            flex={4}
                            style={{
                                position: 'relative',
                                width: chartData ? '33%' : '100%',
                            }}>
                            <LineChart lineChartData={lineChartData} />
                        </Flex>
                    )}
                    {chartData && (
                        <>
                            <Flex
                                flex={2}
                                style={{
                                    position: 'relative',
                                    width: lineChartData ? '33%' : '50%',
                                }}>
                                <PieChart chartData={chartData} />
                            </Flex>
                            <Flex
                                flex={3}
                                style={{
                                    position: 'relative',
                                    width: lineChartData ? '33%' : '50%',
                                }}>
                                <BarChart chartData={chartData} />
                            </Flex>
                        </>
                    )}
                </Flex>
            </Flex>
        </>
    );
};
