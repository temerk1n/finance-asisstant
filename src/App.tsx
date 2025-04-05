import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Layout, NotFound } from './components';
import { AnalyticsPage, ApplicationsPage, HomePage } from './pages';

const App: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route
                        path="/"
                        element={<HomePage />}
                    />
                    <Route
                        path="/analytics"
                        element={<AnalyticsPage />}
                    />
                    <Route
                        path="/applications"
                        element={<ApplicationsPage />}
                    />
                    <Route
                        path="*"
                        element={<NotFound />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
