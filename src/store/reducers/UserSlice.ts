import { IUser } from "../../models/IUser";
import { createSlice } from '@reduxjs/toolkit'
import type {PayloadAction} from "@reduxjs/toolkit"

interface UserState  {
    users:  IUser[];
    isLoading:boolean;
    error:string;
    count:number
}
 const initialState: UserState = {
    users:[],
    isLoading:false,
    error:'',
    count:0
 }
  export const  userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
      increment(state, action:PayloadAction<number>) {
        state.count += action.payload;
      },
      userFetching(state){
        state.isLoading=true;
      },
      userFetchingSuccess(state,action:PayloadAction<IUser[]>){
        state.isLoading=false;
        state.error=''
        state.users=action.payload;
      },
      userFetchingError(state,action:PayloadAction<string>){
        state.isLoading=false;
        state.error=action.payload
      }

    }
  });

  export default userSlice.reducer;
  