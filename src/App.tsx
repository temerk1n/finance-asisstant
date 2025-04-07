import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { AnalyticsPage, ApplicationsPage, HomePage } from './pages';
import { NotFound } from './components/NotFound/NotFound.tsx';
import { Layout } from './components/Layout/Layout.tsx';

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
