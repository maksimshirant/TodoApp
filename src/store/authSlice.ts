import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../interfaces/interfaces";


const initialState: AuthState = {
   isAuthTrue: JSON.parse(localStorage.getItem('isAuthTrue') || 'false')
}

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      login: (state) => {
         state.isAuthTrue = true;
         localStorage.setItem('isAuthTrue', JSON.stringify(state.isAuthTrue));
      },
      logOut: (state) => {
         state.isAuthTrue = false;
         localStorage.setItem('isAuthTrue', JSON.stringify(state.isAuthTrue));
      },
   },
})

export const { login, logOut } = authSlice.actions;
export default authSlice.reducer;