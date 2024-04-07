import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DeleteFunc from './components/DeleteFunc';
import Layout from './components/Layout';
import PageNotFound from './components/PageNotFound';
import PrivateOutlet from './components/PrivateOutlet';
import PublicOutlet from './components/PublicOutlet';
import Auth from './pages/auth';
import Dashboard from './pages/dashboard';
import Home from './pages/home';
import RedirectPage from './pages/redirectPage';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<PrivateOutlet />}>
                        <Route index element={<Dashboard />} />
                    </Route>
                    <Route path="/auth" element={<PublicOutlet />}>
                        <Route index element={<Auth />} />
                    </Route>
                    <Route path="/:shortID" element={<RedirectPage />} />
                    <Route path="/d/:shortID" element={<DeleteFunc />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
