import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../assets/contexts/AuthContext';
import Form from './Form';
import TextInput from './TextInput';

export default function SignupComponent() {
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);
    const { state, dispatch } = useAuth();

    const navigate = useNavigate();

    async function submitHandler(e) {
        setError('');
        e.preventDefault();

        try {
            const { data } = await axios.post(`/api/users/signup`, {
                name: fullName,
                username: username,
                email: email,
                password: password,
            });
            if (data.id) {
                dispatch({ type: 'USER_SIGN_IN', payload: data });
                localStorage.setItem('userInfo', JSON.stringify(data));
                toast.success('Account created Successfully! Redirecting to Dashboard...', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });
                navigate('/dashboard');
            } else {
                setError();

                Object.keys(data.errors).map((fname) => setError(fname));
                console.log(error);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <section className="items-center justify-center pt-24 ">
            <h1 className="uppercase text-center m-2 text-4xl font-bold">SIGNUP</h1>
            <div className="drop-shadow-md max-w-xl m-auto py-5 my-5  ">
                <Form
                    onSubmit={submitHandler}
                    className="flex flex-col justify-center items-center "
                >
                    <TextInput
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        type="text"
                        placeholder="Full Name"
                    />
                    <TextInput
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        placeholder="Username"
                    />
                    <TextInput
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        placeholder="Email"
                    />
                    <TextInput
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                    />
                    <span className="text-red-600 ">
                        {error ? `${error} already registered` : ''}
                    </span>
                    <button
                        type="submit"
                        className="m-2 border p-3 w-96 text-slate-200 rounded-lg bg-[#5A4AE3] hover:bg-[#5041d1] transition-colors"
                    >
                        SUMBIT
                    </button>
                </Form>
                <p className="text-center mt-2">
                    Already have an account?
                    <Link to="/auth" state={false}>
                        <span className="text-[#5A4AE3] hover:text-[#5041d1]"> Login Now</span>
                    </Link>
                </p>
            </div>
        </section>
    );
}
