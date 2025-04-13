import {
    Application,
    Filters,
    LineChartData,
    SkipType,
    Status,
} from './types.ts';
import { applicationsMock } from './__mocks__/applicationsMock.ts';

type Conditions = {
    date?: [Date | number, Date | number];
    department?: string;
};

export const filterApplications = (
    data: Application[],
    filters: Filters,
    searchValue?: string,
) => {
    let filteredData = data;
    if (searchValue) {
        filteredData = filteredData.filter((item) => {
            return item.number
                .toLowerCase()
                .includes(searchValue.toLowerCase());
        });
    }

    for (const [key, value] of Object.entries(filters)) {
        if (!value) {
            continue;
        }

        if (key !== 'date') {
            filteredData = filteredData.filter((item) => {
                return item[key]
                    .toLowerCase()
                    .includes((value as Status | SkipType).toLowerCase());
            });
        } else {
            filteredData = filteredData.filter((item) => {
                const value = filters.date;

                if (!value || !value.from || !value.to) {
                    return true;
                }

                return item.date >= value.from && item.date <= value.to;
            });
        }
    }

    return filteredData;
};

export const filterDataForCharts = (
    conditions: Conditions,
): number[] | undefined => {
    const { department, date } = conditions;

    let filteredData = applicationsMock;

    if (department) {
        filteredData = filteredData.filter(
            (application) => application.department === department,
        );
    }

    if (date) {
        filteredData = filteredData.filter((application) => {
            return (
                application.datesOfAbsence.from >= date[0] &&
                application.datesOfAbsence.from <= date[1]
            );
        });
    }

    const result = new Array(7).fill(0);

    filteredData.forEach((application) => {
        switch (application.skipType) {
            case 'Отпуск':
                result[0] += 1;
                break;
            case 'Болезнь':
                result[1] += 1;
                break;
            case 'Командировка':
                result[2] += 1;
                break;
            case 'Обучение':
                result[3] += 1;
                break;
            case 'Удалённая работа':
                result[4] += 1;
                break;
            case 'Отгул':
                result[5] += 1;
                break;
            case 'Отпуск за свой счёт':
                result[6] += 1;
                break;
            default:
                break;
        }
    });

    return result;
};

function datediff(first, second) {
    return Math.round((second - first) / (1000 * 60 * 60 * 24)) + 1;
}

export const filterLineChartData = (
    conditions: Conditions,
): LineChartData | undefined => {
    const labels: string[] = [];

    if (!conditions.date) {
        return undefined;
    }
    const [startDate, endDate] = conditions.date;

    for (let i = 0; i < datediff(startDate, endDate); i++) {
        labels.push(
            new Date(
                Number(startDate) + i * 24 * 3600 * 1000,
            ).toLocaleDateString(),
        );
    }

    const data: number[] = new Array(labels.length).fill(0);

    applicationsMock.forEach((application) => {
        labels.forEach((label, i) => {
            const date = new Date(label);
            if (
                date >= application.datesOfAbsence.from &&
                date <= application.datesOfAbsence.to &&
                application.department === conditions.department
            ) {
                data[i] += 1;
            }
        });
    });

    return {
        labels: labels,
        data: data,
    };
};
