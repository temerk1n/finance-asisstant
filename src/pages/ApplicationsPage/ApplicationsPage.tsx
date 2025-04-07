import { Flex, Typography } from 'antd';
import { useState } from 'react';
import { defaultFilters, FiltersContext } from '../../contexts';
import { SearchForm } from '../../components/SearchForm/SearchForm.tsx';
import { ApplicationsTable } from '../../components/ApplicationsTable/ApplicationsTable.tsx';
import { Filters } from '../../types.ts';

const { Title } = Typography;

export const ApplicationsPage = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [filters, setFilters] = useState<Filters>(defaultFilters);

    return (
        <FiltersContext.Provider
            value={{ filters: filters, setFilters: setFilters }}>
            <Flex
                vertical
                gap="large"
                style={{ height: '100%' }}>
                <Title level={1}>Заявки сотрудников</Title>
                <SearchForm
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
                <ApplicationsTable searchValue={searchValue} />
            </Flex>
        </FiltersContext.Provider>
    );
};
