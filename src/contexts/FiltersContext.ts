import { createContext, useContext } from 'react';
import { Filters } from '../types.ts';

type FiltersContextType = {
    filters: Filters;
    setFilters?: (filters: FiltersContextType['filters']) => void;
};

export const defaultFilters: Filters = {
    status: undefined,
    skipType: undefined,
    date: undefined,
};

export const FiltersContext = createContext<FiltersContextType>({
    filters: defaultFilters,
});

export const useFilters = () => useContext(FiltersContext);
