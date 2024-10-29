import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../interfaces/interfaces";


const initialState: AuthState = {
   isAuthTrue: false
}

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      login: (state) => {
         state.isAuthTrue = true;
      },
      logOut: (state) => {
         state.isAuthTrue = false;
      },
   },
})

export const { login, logOut } = authSlice.actions;
export default authSlice.reducer;