import {
    ChangeEventHandler,
    CSSProperties,
    FC,
    memo,
    useCallback,
    useState,
} from 'react';
import { Button, Flex, Input, Modal, Typography } from 'antd';
import { Filters } from './Filters.tsx';
import { defaultFilters, useFilters } from '../../contexts';

const { Title } = Typography;

const inputStyle: CSSProperties = {
    maxWidth: '300px',
};

interface Props {
    searchValue: string;
    setSearchValue: (value: string) => void;
}

export const SearchForm: FC<Props> = memo(({ searchValue, setSearchValue }) => {
    const { setFilters } = useFilters();
    const [showModal, setShowModal] = useState<boolean>(false);

    const onSearchValueChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setSearchValue(e.target.value);
    };

    const clearFilters = useCallback(() => {
        setFilters?.(defaultFilters);
    }, [setFilters]);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = useCallback(() => {
        setShowModal(false);
    }, []);

    return (
        <Flex gap="middle">
            <Input
                value={searchValue}
                onChange={onSearchValueChange}
                placeholder="Поиск по завкам"
                allowClear
                style={inputStyle}
            />
            <Button onClick={openModal}>Фильтры</Button>
            <Button onClick={clearFilters}>Сбросить фильтры</Button>

            <Modal
                title={
                    <Title
                        level={2}
                        style={{ marginTop: 0 }}>
                        Фильтры
                    </Title>
                }
                footer={[]}
                onCancel={closeModal}
                open={showModal}>
                <Filters closeModal={closeModal} />
            </Modal>
        </Flex>
    );
});
