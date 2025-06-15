import axios from "../../Api/axiosconfig";

export const asyncloginuser = (user) => async (dispatch,getState)=>{
   try {
    const {data} = await axios.get(`/users?password=${user.password}`);
    localStorage.setItem("users",JSON.stringify(data[0]));
   } catch (error) {
    console.log(error);
   }
}

export const asyncregisteruser = (user) => async (dispatch,getState)=>{
   try {
    const res = await axios.post("/users",user);
    console.log(res);
    
   } catch (error) {
    console.log(error); 
    // updates had been made ...
    
   }
}
