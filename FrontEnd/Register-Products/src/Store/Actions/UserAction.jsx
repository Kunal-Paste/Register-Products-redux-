import axios from "../../Api/axiosconfig";
import { loaduser } from "../Reducers/UserSlice";

export const asynccurrentuser = () => async (dispatch, getState) => {
   try {
      const user = JSON.parse(localStorage.getItem("users"));
      if (user) dispatch(loaduser(user));
      else console.log('user not logged in');
      
   } catch (error) {
      console.log(error);
   }
}

export const asyncloginuser = (user) => async (dispatch, getState) => {
   try {
      const { data } = await axios.get(`/users?password=${user.password}`);
      localStorage.setItem("users", JSON.stringify(data[0]));
   } catch (error) {
      console.log(error);
   }
}

export const asyncregisteruser = (user) => async (dispatch, getState) => {
   try {
      const res = await axios.post("/users", user);
      console.log(res);

   } catch (error) {
      console.log(error);
      // updates had been made ...

   }
}
