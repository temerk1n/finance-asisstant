import { SKIP_TYPES } from '../../constants.ts';
import { Pie } from 'react-chartjs-2';
import { FC } from 'react';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
    chartData?: number[];
}

export const PieChart: FC<Props> = ({ chartData }) => {
    return (
        <Pie
            data={{
                labels: SKIP_TYPES,
                datasets: [
                    {
                        label: 'Количество отсутствий этого типа',
                        data: chartData,
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 205, 86)',
                            'rgb(67,57,32)',
                            'rgb(50,218,196)',
                            'rgb(255, 205, 86)',
                            'rgb(255, 205, 86)',
                        ],
                        hoverOffset: 4,
                    },
                ],
            }}
            options={{
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom' as const,
                    },
                    title: {
                        display: true,
                        text: 'Процент отсутствия каждого типа',
                    },
                },
            }}
        />
    );
};
