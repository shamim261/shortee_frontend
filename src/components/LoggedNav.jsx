import axios from 'axios';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../assets/contexts/AuthContext';
import exit from '../assets/img/exit.svg';
import logoBlue from '../assets/img/logo_transparent.png';
import user from '../assets/img/user.svg';
export default function LoggedNav() {
    const username = localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo')).username
        : '';

    const [mobileMenu, setMobileMenu] = useState(false);
    const { state, dispatch } = useAuth();
    const navigate = useNavigate();

    const activeClass =
        'block py-2 pl-3 pr-4 text-white bg-primary rounded md:bg-transparent md:text-primary md:p-0 dark:text-white md:dark:text-primary';
    const inactiveClass =
        'block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';

    function toggleMobileMenu() {
        setMobileMenu((prevState) => !prevState);
    }
    async function handleLogout() {
        try {
            const { data } = await axios.delete(`/api/users`);
            console.log(data);

            if (data.success) {
                dispatch({ type: 'USER_LOGOUT' });
                localStorage.removeItem('userInfo');
                navigate('/auth');
            } else {
                alert('failed');
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center">
                    <img src={logoBlue} className="h-8 mr-3" alt="Shortee Logo" />
                </a>
                <img src={user} className="md:hidden relative left-36 w-6 mr-4" alt="" />
                <span className="md:hidden relative left-16 text-gray-500 ml-1">{username}</span>
                <button
                    onClick={toggleMobileMenu}
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>

                <div
                    className={` ${mobileMenu ? '' : 'hidden'} w-full md:block md:w-auto`}
                    id="navbar-default"
                >
                    <ul className="font-medium text-md md:text-md tracking-wider flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? activeClass : inactiveClass
                                }
                                aria-current="page"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) =>
                                    isActive ? activeClass : inactiveClass
                                }
                            >
                                Dashboard
                            </NavLink>
                        </li>

                        <li className=" hidden md:block md:flex md:items-center">
                            <img src={user} className="w-6 mr-1" alt="" />
                            <span className="disabled text-gray-500">{username}</span>
                            <img
                                onClick={handleLogout}
                                src={exit}
                                className="cursor-pointer ml-4 w-5 hover:w-6 transition-all"
                                alt=""
                            />
                        </li>
                        <li className="md:hidden">
                            <NavLink
                                onClick={handleLogout}
                                className={({ isActive }) =>
                                    isActive ? activeClass : inactiveClass
                                }
                            >
                                Logout
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
