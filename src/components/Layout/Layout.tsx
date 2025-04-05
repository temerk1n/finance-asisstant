import { CSSProperties, FC } from 'react';
import { Layout as AntLayout } from 'antd';
import { Header } from './Header.tsx';
import { SideBar } from './SideBar.tsx';
import { Outlet } from 'react-router';

const { Header: AntHeader, Content, Sider } = AntLayout;

const layoutStyle: CSSProperties = {
    width: '100%',
    minHeight: '100vh',
    backgroundColor: 'white',
};

const headerStyle: CSSProperties = {
    backgroundColor: 'white',
};

const siderStyle: CSSProperties = {
    overflow: 'auto',
    height: '100vh',
    position: 'sticky',
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: 'none',
};

const contentStyle: CSSProperties = {
    minWidth: '100%',
    padding: '0 48px 24px',
};

export const Layout: FC = () => {
    return (
        <AntLayout style={layoutStyle}>
            <Sider
                style={siderStyle}
                width="72px"
                theme="light">
                <SideBar />
            </Sider>
            <AntLayout style={{ backgroundColor: 'white' }}>
                <AntHeader style={headerStyle}>
                    <Header />
                </AntHeader>
                <Content style={contentStyle}>
                    <Outlet />
                </Content>
            </AntLayout>
        </AntLayout>
    );
};
