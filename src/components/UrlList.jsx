import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Hashloader from 'react-spinners/HashLoader';
import { ToastContainer } from 'react-toastify';
import { useAuth } from '../assets/contexts/AuthContext';
import { copyClip, truncate } from '../utilities/util';
export default function UrlList() {
    const { state } = useAuth();
    const { userInfo } = state;

    const [urls, setUrls] = useState([]);
    const [spinner, setSpinner] = useState(true);
    useEffect(() => {
        async function getData() {
            setSpinner(true);
            const { data } = await axios.get(`/api/urls`, {
                headers: {
                    authorization: `Bearer ${userInfo.token}`,
                },
            });
            setUrls(data);
            setSpinner(false);
        }
        getData();
    }, []);

    return spinner ? (
        <div className="flex justify-center items-center  ">
            <Hashloader size="50" color="#5A4AE3" loading={spinner} />
        </div>
    ) : (
        <div className="relative overflow-x-auto">
            {urls.length > 0 ? (
                <table className="w-full text-md text-left text-gray-500 dark:text-gray-400">
                    {<ToastContainer />}
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Main Links
                            </th>
                            <th scope="col" className="px-6 py-3 text-center md:text-left">
                                Generated Links
                            </th>
                            <th scope="col" className="px-6 py-3 text-center md:text-left">
                                Total Clicks
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {urls.map((url) => (
                            <tr
                                key={url._id}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                            >
                                <th
                                    scope="row"
                                    className="px-6 font-normal py-4 text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    <Link to={url.mainURL}>{truncate(url.mainURL, 20)}</Link>
                                </th>
                                <td className="px-6 py-3 break-words flex">
                                    <Link
                                        target="_blank"
                                        to={import.meta.env.VITE_APP_URL + '/' + url.shortURL}
                                    >
                                        <div className="w-32 md:w-full">
                                            {import.meta.env.VITE_APP_URL + '/' + url.shortURL}
                                        </div>
                                    </Link>
                                    <button
                                        onClick={() =>
                                            copyClip(
                                                import.meta.env.VITE_APP_URL + '/' + url.shortURL
                                            )
                                        }
                                        type="button"
                                        className="relative bottom-1 ml-1 md:border-2 text-hover py-0 rounded-md md:bg-primary md:text-slate-100 md:p-1 md:mb-2"
                                    >
                                        copy
                                    </button>
                                </td>
                                <td className="px-6 py-4 text-center md:text-left">
                                    {url.visitedHistory.length}
                                </td>
                                <td className="px-6 py-4  ">
                                    <Link to={`/d/${url.shortURL}`} className="ml-1 text-red-500">
                                        Delete
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div>
                    <h1 className="text-lg text-center p-2">No URL Found!</h1>

                    <Link
                        to="/"
                        className="w-1/4 md:w-1/5  md:py-3 flex justify-center px-4 py-2 bg-primary text-white hover:bg-hover transition-colors rounded-xl m-auto "
                    >
                        Create One
                    </Link>
                </div>
            )}
        </div>
    );
}
