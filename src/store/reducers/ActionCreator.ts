import { AppDispatch } from "../store";
import { IUser } from "../../models/IUser";
import axios from "axios";
import { userSlice } from "./UserSlice";

export const fetchUsers =   (dispatch:AppDispatch) => {
    try {
        dispatch(userSlice.actions.userFetching())
        const response =  await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        dispatch(userSlice.actions.userFetchingSuccess(response.data))
    }catch(e) {
        dispatch(userSlice.actions.userFetchingError(e.message))
    }
}