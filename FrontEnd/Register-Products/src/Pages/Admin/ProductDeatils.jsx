import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { asyncupdateproduct } from '../../Store/Actions/ProductAction';

export const ProductDeatils = () => {
  const { id } = useParams();
  const {
    productReducer: { products },
    userReducer: { users },
  } = useSelector((state) => state);
  const product = products?.find((product) => product.id == id);
  console.log(product, users);
  const { register, reset, handleSubmit } = useForm({
    defaultValues: {
      image: product?.image,
      name: product?.name,
      description: product?.description,
      price: product?.price,
    }
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const updateproductHandler = (products) => {
    // products.id = nanoid();
    console.log(products);
    dispatch(asyncupdateproduct(id, products));
    // navigate("/Login");
  }
  return product ? (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        {/* Product Display Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-80 object-cover  rounded-t-2xl"
          />
          <div className="p-6 space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-semibold text-violet-600">₹{product.price}</span>
              <button className="bg-violet-600 text-white px-6 py-2 rounded-xl hover:bg-violet-700 transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Update Form */}
        {users && users?.isAdmin &&
          <div className="bg-white p-8 rounded-2xl shadow-2xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Update Product</h2>
            <form onSubmit={handleSubmit(updateproductHandler)} className="space-y-5">

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                <input
                  type="url"
                  {...register("image")}
                  placeholder="Enter product image URL"
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                <input
                  type="text"
                  {...register("name")}
                  placeholder="Enter product name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                <input
                  type="number"
                  {...register("price")}
                  placeholder="Enter price"
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  rows="4"
                  {...register("description")}
                  placeholder="Enter product description"
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-400 to-pink-500 text-white font-bold py-2 rounded-xl hover:from-pink-500 hover:to-orange-400 transition duration-300"
              >
                Update
              </button>
            </form>
          </div>
        }
      </div>
    </div>
  ) : (
    <div className="text-center mt-20 text-gray-500 text-xl">Loading product details...</div>
  );

}
