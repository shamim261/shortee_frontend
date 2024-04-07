import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function RedirectPage() {
    const { shortID } = useParams();
    const [error, setError] = useState('');

    useEffect(() => {
        async function redirect() {
            try {
                console.log('Triggered');

                const { data } = await axios.get(`/api/urls/r/${shortID}`);

                if (data && data.mainURL) {
                    setError('');
                    window.location.replace(data.mainURL);
                } else {
                    setError(data.error);
                }
            } catch (err) {
                console.log(err);
                console.log('error');
            }
        }
        redirect();
    }, [shortID]);
    return <div className="text-2xl text-center"> {error ? error : 'Redirecting...'} </div>;
}
