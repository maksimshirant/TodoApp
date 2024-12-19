import { FC } from 'react';
import PostToDo from './PostToDo';
import ToDoList from './ToDoList';
import st from '../styles/todoapp.module.css'

const ToDoApp: FC = () => {
   return (
      <div className={st.container}>
         <PostToDo />
         <ToDoList />
      </div>
   );
};

export default ToDoApp;