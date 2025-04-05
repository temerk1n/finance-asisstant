import { FC } from 'react';
import { Button, Flex, Menu, MenuProps } from 'antd';
import { useNavigate } from 'react-router';
import {
    CloseOutlined,
    MailOutlined,
    PlusOutlined,
    SettingOutlined,
} from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

const menuItems: MenuItem[] = [
    {
        label: 'Главная',
        key: '',
    },
    {
        label: 'Заявки сотрудников',
        key: 'applications',
    },
    {
        label: 'Статистика',
        key: 'analytics',
    },
];

export const Header: FC = () => {
    const navigate = useNavigate();
    const onMenuItemClick: MenuProps['onClick'] = (e) => {
        navigate(`/${e.key}`);
    };

    return (
        <Flex
            justify="space-between"
            align="center">
            <Menu
                defaultActiveFirst
                items={menuItems}
                mode="horizontal"
                onClick={onMenuItemClick}
            />
            <Flex gap="small">
                <Button
                    size="large"
                    type="text"
                    icon={<PlusOutlined />}>
                    Создать заявку
                </Button>
                <Button
                    size="large"
                    type="text"
                    icon={<MailOutlined />}
                />
                <Button
                    size="large"
                    type="text"
                    icon={<SettingOutlined />}
                />
                <Button
                    size="large"
                    type="text"
                    icon={<CloseOutlined />}
                />
            </Flex>
        </Flex>
    );
};
