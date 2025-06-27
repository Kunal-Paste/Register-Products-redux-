import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncdeleteuser, asynclogoutuser, asyncupdateuser } from '../../Store/Actions/UserAction';

const UserProfile = () => {
  const {
    userReducer: { users },
  } = useSelector((state) => state);
  const { register, reset, handleSubmit } = useForm({
    defaultValues: {
      username: users?.username,
      email: users?.email,
      password: users?.password,
    }
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const updateproductHandler = (user) => {
    // products.id = nanoid()
    dispatch(asyncupdateuser(users.id, user));
    // navigate("/Login");
  }
  const deleteUser = () => {
    dispatch(asyncdeleteuser(users.id));
    navigate('/Login');
  }
  const logoutHandler = () => {
    dispatch(asynclogoutuser());
    navigate('/Login');
  }
  return (
    users ? <div className="bg-white p-8 rounded-2xl shadow-2xl">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Edit user</h2>
      <form onSubmit={handleSubmit(updateproductHandler)} className="space-y-5">

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">User Name</label>
          <input
            type="text"
            {...register("username")}
            placeholder="Enter username"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            {...register("email")}
            placeholder="Enter email"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            {...register("password")}
            placeholder="Enter password"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-orange-400 to-pink-500 text-white font-bold py-2 rounded-xl hover:from-pink-500 hover:to-orange-400 transition duration-300"
        >
          Update
        </button>

        <button
          type="button"
          onClick={logoutHandler}
          className="w-full bg-gradient-to-r from-red-400 to-pink-500 text-white font-bold py-2 rounded-xl hover:from-pink-500 hover:to-orange-400 transition duration-300"
        >
          Logout
        </button>

        <button
          type="button"
          onClick={deleteUser}
          className="w-full text-black bg-gradient-to-r from-orange-900 to-pink-300 font-bold py-2 rounded-xl hover:from-pink-900 hover:to-orange-700 transition duration-300"
        >
          Delete
        </button>
      </form>
    </div> : "Loading..."
  )
}

export default UserProfile