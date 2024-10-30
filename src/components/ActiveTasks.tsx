
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import Task from './Task';
import st from '../styles/toDoList.module.css'
const ActiveTasks: FC = () => {
   const toDos = useSelector((state: RootState) => state.toDos.toDos)

   return (
      <div>
         <ul className={st.toDoItems}>
            {toDos
               .filter((todo) => !todo.completed)
               .map((todo) => (
                  <Task todo={todo} />
               ))}
         </ul>
      </div>
   );
};

export default ActiveTasks;