import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ToDo, ToDoState } from '../interfaces/interfaces';



const initialState: ToDoState = {
   toDos: JSON.parse(localStorage.getItem('todos') || '[]'),
   deletedToDos: [],
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
         const todoToDelete = state.toDos.find(todo => todo.id === action.payload);
         if (todoToDelete) {
            state.deletedToDos.push(todoToDelete);
         }
         state.toDos = state.toDos.filter(todo => todo.id !== action.payload);
         localStorage.setItem('todos', JSON.stringify(state.toDos));
         localStorage.setItem('deletedTodos', JSON.stringify(state.deletedToDos));
      },
      completeToDo: (state, action: PayloadAction<number>) => {
         state.toDos = state.toDos.map(
            todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
         )
         localStorage.setItem('todos', JSON.stringify(state.toDos));
      },
      deleteAllTodos: (state) => {
         state.deletedToDos = [];
         state.toDos = []
         localStorage.setItem('todos', JSON.stringify(state.toDos));
         localStorage.setItem('deletedTodos', JSON.stringify(state.deletedToDos));
      },
      editToDo: (state, action: PayloadAction<{ id: number, newText: string }>) => {
         const todo = state.toDos.find(todo => todo.id === action.payload.id);
         if (todo) {
            todo.text = action.payload.newText;
            localStorage.setItem('todos', JSON.stringify(state.toDos));
         }
      },
   }
})

export const { addNewToDo, deleteToDo, completeToDo, deleteAllTodos, editToDo } = toDoSlice.actions;
export default toDoSlice.reducer;