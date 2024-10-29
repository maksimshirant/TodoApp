import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ToDo, ToDoState } from '../interfaces/interfaces';



const initialState: ToDoState = {
   toDos: JSON.parse(localStorage.getItem('todos') || '[]'),
}

const toDoSlice = createSlice({
   name: 'toDos',
   initialState,
   reducers: {
      addNewToDo: (state, action: PayloadAction<string>) => {
         const newToDo: ToDo = {
            id: Date.now(),
            text: action.payload,
            completed: false,
            deleted: false,
         }
         state.toDos.push(newToDo)
         localStorage.setItem('todos', JSON.stringify(state.toDos));
      },
      deleteToDo: (state, action: PayloadAction<number>) => {
         state.toDos = state.toDos.map(
            todo => todo.id === action.payload ? { ...todo, deleted: true } : todo
         )
         localStorage.setItem('todos', JSON.stringify(state.toDos));
      },
      completeToDo: (state, action: PayloadAction<number>) => {
         state.toDos = state.toDos.map(
            todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
         )
         localStorage.setItem('todos', JSON.stringify(state.toDos));
      },
      deleteAllTodos: (state) => {
         state.toDos = []
         localStorage.setItem('todos', JSON.stringify(state.toDos));
      }
   }
})

export const { addNewToDo, deleteToDo, completeToDo, deleteAllTodos } = toDoSlice.actions;
export default toDoSlice.reducer;