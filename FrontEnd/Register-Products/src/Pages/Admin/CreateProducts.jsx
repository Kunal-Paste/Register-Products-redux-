import { nanoid } from 'nanoid';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asynccreateproduct } from '../../Store/Actions/ProductAction';

const CreateProducts = () => {
    const { register, reset, handleSubmit } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const productHandler = (products) => {
        products.id = nanoid();
        console.log(products);
        dispatch(asynccreateproduct(products));
        // navigate("/Login");
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">CREATE PRODUCTS</h2>
                <form onSubmit={handleSubmit(productHandler)} className="space-y-6">

                     <div>
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">URl</label>
                        <input
                            type="url"
                            id="image"
                            name="image"
                            {...register("image")}
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Set your image"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            {...register("name")}
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Set your Product Name"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            {...register("price")}
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your price"
                            required
                        />
                    </div>

                    <textarea

                        {...register("description")}
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
                        placeholder="Set your description">

                    </textarea>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold py-2 rounded-xl hover:from-pink-500 hover:to-orange-400 transition duration-300"
                    >
                        Save
                    </button>

                </form>
            </div>
        </div>
    )
}

export default CreateProducts