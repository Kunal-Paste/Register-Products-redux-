import { nanoid } from 'nanoid';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { asyncloginuser } from '../Store/Actions/UserAction';

const Login = () => {
    const {register,reset,handleSubmit} = useForm();
    const dispatch = useDispatch();
    const SubmitLogin = (user) => {
       user.id = nanoid();
       console.log(user);
       dispatch(asyncloginuser(user));
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Login</h2>
                <form onSubmit={handleSubmit(SubmitLogin)} className="space-y-6">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            {...register("username")}
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your username"
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
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 rounded-xl hover:from-purple-500 hover:to-blue-500 transition duration-300"
                    >
                        Login
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-500">
                    Don’t have an account? <Link to="/Register" className="text-blue-600 hover:underline">Register</Link>
                </p>
            </div>
        </div>

    )
}

export default Login