import React, { useState } from 'react';
import { useTitle } from '../../hooks/useTitle';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { FadeLoader } from 'react-spinners';
import GoogleLogin from '../../components/Social/GoogleLogin';
import bgImg from '../../assets/home/bg.jpg';

const Login = () => {
    useTitle('Login | Pure Lifestyle Yoga - Your Path to Pure Bliss');
    const location = useLocation();
    const [showPassword, setShowPassword] = useState(false);
    const { login, error, setError, loader, setLoader } = useAuth();
    const navigate = useNavigate();

    const handelSubmit = (e) => {
        setError('');
        e.preventDefault();
        const data = new FormData(e.target);
        const formData = Object.fromEntries(data);
        login(formData.email, formData.password)
            .then(() => {
                navigate(location.state?.from || '/dashboard');
            })
            .catch((err) => {
                setError(err.code);
                setLoader(false);
            });
    };

    return (
        <div className="h-screen flex">
            {/* Left Side with Background Image */}
            <div
                className="hidden lg:flex flex-1 bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImg})` }}
            >
                {/* Optional: Add overlay or content here */}
            </div>

            {/* Right Side Login Form */}
            <div className="flex flex-1 items-center justify-center">
                <div className="w-full max-w-md rounded-lg p-6 shadow-lg">
                    <form onSubmit={handelSubmit} className="space-y-4">
                        <h1 className="text-center text-2xl font-bold text-secondary sm:text-3xl">
                            Member Login
                        </h1>
                        <hr></hr>
                        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                            
                        </p>
                        <p className="text-center text-red-400 text-lg font-medium">
                            Sign in to your account
                        </p>
                        {error && (
                            <p className="text-center text-red-400 text-sm font-medium">
                                {error}
                            </p>
                        )}
                        {loader && (
                            <div className="flex justify-center">
                                <FadeLoader color="#FF1949" />
                            </div>
                        )}

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="sr-only">
                                Email
                            </label>
                            <div className="relative">
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full border outline-none rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter email"
                                />
                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        {/* Password Field */}
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    className="w-full rounded-lg outline-none border border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter password"
                                />
                                <span
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute cursor-pointer inset-y-0 end-0 grid place-content-center px-4"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="block w-full rounded-lg bg-secondary px-5 py-3 text-sm font-medium text-white"
                        >
                            Sign in
                        </button>

                        <p className="text-center text-sm text-gray-500">
                            No account?{' '}
                            <Link className="underline" to="/register">
                                Sign up
                            </Link>
                        </p>
                    </form>
                    <GoogleLogin />
                </div>
            </div>
        </div>
    );
};

export default Login;
