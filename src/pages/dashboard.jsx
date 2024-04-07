import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import EditUrl from '../components/EditUrl';
import UrlList from '../components/UrlList';

export default function Dashboard() {
    const { state } = useLocation();
    const [editForm, setEditForm] = useState(state || false);

    useEffect(() => {
        setEditForm(state);
    }, [state]);

    return (
        <div>
            <h1 className="text-3xl font-bold text-center m-4">
                {editForm ? 'Edit URL' : 'All URLS'}
            </h1>
            {editForm ? <EditUrl /> : <UrlList />}
        </div>
    );
}
