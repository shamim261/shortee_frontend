import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logoBlue from '../assets/img/logo_transparent.png';
import user from '../assets/img/user.svg';
export default function DefaultNav() {
    const [mobileMenu, setMobileMenu] = useState(false);

    const activeClass =
        'block py-2 pl-3 pr-4 text-white bg-primary rounded md:bg-transparent md:text-primary md:p-0 dark:text-white md:dark:text-primary';
    const inactiveClass =
        'block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';

    function toggleMobileMenu() {
        setMobileMenu((prevState) => !prevState);
    }

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center">
                    <img src={logoBlue} className="h-8 mr-3" alt="Shortee Logo" />
                </a>
                <img src={user} className="md:hidden relative left-36 w-6 mr-1" alt="" />
                <span className="md:hidden relative left-16 text-gray-500 ml-1">shamim</span>
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
                                to="/auth"
                                className={({ isActive }) =>
                                    isActive ? activeClass : inactiveClass
                                }
                            >
                                Login/Signup
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
