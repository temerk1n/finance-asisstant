import { Application, Filters, SkipType, Status } from '../../types.ts';

export const filterData = (
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
