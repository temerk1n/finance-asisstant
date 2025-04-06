import { FC } from 'react';
import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { LineChartData } from '../../types.ts';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Количество отсутствующих сотрудников по дням',
        },
    },
};

interface Props {
    lineChartData: LineChartData;
}

export const LineChart: FC<Props> = ({ lineChartData }) => {
    return (
        <Line
            data={{
                labels: lineChartData.labels,
                datasets: [
                    {
                        label: 'Количество отсутствующих сотрудников',
                        data: lineChartData.data,
                        borderColor: 'rgb(255, 99, 132)',
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    },
                ],
            }}
            options={options}
        />
    );
};
