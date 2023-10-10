import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hook/redux';
import { userSlice } from './store/reducers/UserSlice';
import { fetchUsers } from './store/reducers/ActionCreator';

function App() {
  const {count} = useAppSelector(state=>state.userReducer)
  const {increment}=userSlice.actions;
  const dispatch =useAppDispatch()
  const {users} =  useAppSelector(state=>state.userReducer)

  useEffect(()=>{
    dispatch(fetchUsers())
  },[])
  return (
    <div className="App">
      
      <h1>{count}</h1>
      <button onClick={()=>dispatch(increment(10))}>increment</button>
    {JSON.stringify(users,null,2)}
    </div>
  );
}

export default App;
