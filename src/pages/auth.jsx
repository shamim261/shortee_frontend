import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LoginComponent from '../components/LoginComponent';
import SignupComponent from '../components/SignupComponent';

export default function Auth() {
    const { state } = useLocation();
    const [register, setRegister] = useState(state || false);

    useEffect(() => {
        setRegister(state);
    }, [state]);

    return register ? <SignupComponent /> : <LoginComponent />;
}
