import { FC } from 'react';
import { SKIP_TYPES } from '../../constants.ts';
import { Bar } from 'react-chartjs-2';
import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Title as ChartTitle,
    Tooltip,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ChartTitle,
    Tooltip,
    Legend,
);

interface Props {
    chartData?: number[];
}

export const BarChart: FC<Props> = ({ chartData }) => {
    return (
        <Bar
            data={{
                labels: SKIP_TYPES,
                datasets: [
                    {
                        label: 'Отсутствия',
                        data: chartData,
                        backgroundColor: 'rgb(255, 99, 132)',
                    },
                ],
            }}
            options={{
                plugins: {
                    title: {
                        display: true,
                        text: 'Количество отсутствий каждого типа',
                    },
                },
                responsive: true,
                scales: {
                    x: {
                        stacked: true,
                    },
                    y: {
                        stacked: true,
                    },
                },
            }}
        />
    );
};
