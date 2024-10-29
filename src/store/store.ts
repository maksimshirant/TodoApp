import { configureStore } from "@reduxjs/toolkit";
import toDoSlice from "./toDoSlice";
import authSlice from "./authSlice";


const store = configureStore({
   reducer: {
      toDos: toDoSlice,
      auth: authSlice,
   }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;