import { FC } from 'react';
import PostToDo from './PostToDo';
import ToDoList from './ToDoList';

const ToDoApp: FC = () => {
   return (
      <div>
         <PostToDo />
         <ToDoList />
      </div>
   );
};

export default ToDoApp;