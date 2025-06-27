import { data } from "react-router-dom";
import axios from "../../Api/axiosconfig";
import { loaduser, removeuser } from "../Reducers/UserSlice";

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

export const asynclogoutuser = () => async (dispatch,getState) => {
   try {
      localStorage.removeItem("users");
      dispatch(removeuser());
      console.log("user is logout");
      
   } catch (error) {
      console.log(error);
      
   }
}

export const asyncupdateuser = (id,user) => async (dispatch,getState) => {
   try {
      const {data} = await axios.patch("/users/" + id,user);
      console.log(data);
      localStorage.setItem("users",JSON.stringify(data));
      dispatch(loaduser(data)); 
   } catch (error) {
      console.log(error);
      
   }
}

export const asyncdeleteuser = (id) => async (dispatch,getState) =>{
   try {
      await axios.delete('/users/'+id);
      dispatch(asynclogoutuser());
   } catch (error) {
      console.log(error);
      
   }
}
