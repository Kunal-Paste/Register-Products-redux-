import { nanoid } from 'nanoid';
import React from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { asyncregisteruser } from '../Store/Actions/UserAction';
import { useDispatch } from 'react-redux';

const Register = () => {
    const { register, reset, handleSubmit } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const SubmitRegister = (user) => {
        user.id = nanoid();
        user.isAdmin = false;
        console.log(user);
        dispatch(asyncregisteruser(user));
        navigate("/Login");
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Register User</h2>
                <form onSubmit={handleSubmit(SubmitRegister)} className="space-y-6">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            {...register("username")}
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Set your username"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            {...register("email")}
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            {...register("password")}
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
                            placeholder="Set your password"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold py-2 rounded-xl hover:from-pink-500 hover:to-orange-400 transition duration-300"
                    >
                        Register
                    </button>

                </form>

                <p className="mt-6 text-center text-sm text-gray-500">
                    Already Registered? <Link to="/Login" className="text-blue-600 hover:underline">Login</Link>
                </p>
            </div>
        </div>
    )
}

export default Register