import { CSSProperties, FC } from 'react';
import { Avatar, Flex, Space } from 'antd';
import { CheckCircleOutlined, UserOutlined } from '@ant-design/icons';

const rootStyle: CSSProperties = {
    height: '100%',
    borderRight: '1px solid lightgray',
    padding: '4px',
};

const iconStyle: CSSProperties = {
    width: '64px',
    height: '64px',
};

export const SideBar: FC = () => {
    return (
        <Flex
            vertical
            justify="space-between"
            style={rootStyle}>
            <Flex
                vertical
                align="center">
                <Space style={iconStyle}>
                    <CheckCircleOutlined
                        width={64}
                        height={64}
                    />
                </Space>
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
