import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateOutlet() {
    const userInfo = localStorage.getItem('userInfo');
    return userInfo ? <Outlet /> : <Navigate to="/auth" />;
}
