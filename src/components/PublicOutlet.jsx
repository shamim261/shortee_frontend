import { Navigate, Outlet } from 'react-router-dom';

export default function PublicOutlet() {
    const userInfo = localStorage.getItem('userInfo');
    return !userInfo ? <Outlet /> : <Navigate to="/" />;
}
