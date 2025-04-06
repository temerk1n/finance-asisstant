import { CSSProperties, FC } from 'react';
import { Avatar, Flex, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const rootStyle: CSSProperties = {
    height: '100%',
    borderRight: '1px solid lightgray',
    padding: '4px',
};

export const SideBar: FC = () => {
    return (
        <Flex
            vertical
            justify="space-between"
            style={rootStyle}>
            <Flex
                vertical
                align="center"
                gap="small">
                <img
                    width={64}
                    height={393}
                    src="/сервисы.png"
                    alt="сервис1"
                />
            </Flex>
            <Space
                direction="vertical"
                align="center">
                <Avatar
                    size={64}
                    icon={<UserOutlined />}
                />
                Профиль
            </Space>
        </Flex>
    );
};
