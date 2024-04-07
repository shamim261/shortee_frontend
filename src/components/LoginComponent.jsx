import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../assets/contexts/AuthContext';
import Form from './Form';
import TextInput from './TextInput';

export default function LoginComponent() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();
    const { state, dispatch } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const { data } = await axios.post(`/api/users`, {
                username: username,
                password: password,
            });
            if (data.id) {
                dispatch({ type: 'USER_SIGN_IN', payload: data });

                navigate('/');
                localStorage.setItem('userInfo', JSON.stringify(data));
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError('Something went wrong!');
        }
    }

    return (
        <section className="items-center justify-center pt-24 ">
            <h1 className="uppercase text-center m-2 text-4xl font-bold">Login</h1>
            <div className="drop-shadow-md max-w-xl m-auto py-5 my-5  ">
                <Form
                    onSubmit={handleSubmit}
                    className="flex flex-col justify-center items-center "
                >
                    <TextInput
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        placeholder="Username or Email"
                    />
                    <TextInput
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                    />
                    <span className="text-red-600 ">{error ? error : ''}</span>
                    <button className="m-2 border p-3 w-96 text-slate-200 rounded-lg bg-[#5A4AE3] hover:bg-[#5041d1] transition-colors">
                        Login
                    </button>
                </Form>
                <p className="text-center mt-2">
                    Dont have an account?
                    <Link to="/auth" state={true}>
                        <span className="text-[#5A4AE3] hover:text-[#5041d1]"> Register now</span>
                    </Link>
                </p>
            </div>
        </section>
    );
}
