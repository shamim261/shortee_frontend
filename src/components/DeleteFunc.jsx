import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../assets/contexts/AuthContext';
export default function DeleteFunc() {
    const { state } = useAuth();
    const { userInfo } = state;
    const { shortID } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function HandleDelete() {
            const { data } = await axios.delete(`/api/urls/${shortID}`, {
                headers: {
                    authorization: `Bearer ${userInfo.token}`,
                },
            });
            navigate('/dashboard');
            console.log(data);
        }
        HandleDelete();
    }, [shortID, navigate, userInfo]);
    return <div>Deleting...</div>;
}
