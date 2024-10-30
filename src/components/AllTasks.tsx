import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

import st from '../styles/toDoList.module.css'
import Task from './Task';

const AllTasks: FC = () => {
   const toDos = useSelector((state: RootState) => state.toDos.toDos)

   return (
      <div>
         <ul className={st.toDoItems}>
            {toDos.map((todo) => (
               <Task todo={todo} />
            ))}
         </ul>
      </div>
   );
};

export default AllTasks;