import axios from "../../Api/axiosconfig";
import { loadproducts } from "../Reducers/ProductSlice";

export const asyncloadproduct = () => async (dispatch, getState) => {
    try {
        const { data } = await axios.get('/products')
        dispatch(loadproducts(data));
    } catch (error) {
        console.log(error);
    }
}

export const asynccreateproduct = (product) => async (dispatch, getState) => {
    try {
        await axios.post('/products',product)
        dispatch(asyncloadproduct());
    } catch (error) {
        console.log(error);
    }
}