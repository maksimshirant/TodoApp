import { FC } from 'react';

import st from '../styles/toDoList.module.css'
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import Task from './Task';

const DoneTasks: FC = () => {
   const toDos = useSelector((state: RootState) => state.toDos.toDos)

   return (
      <div>
         <ul className={st.toDoItems}>
            {toDos
               .filter((todo) => todo.completed)
               .map((todo) => (
                  <Task todo={todo} />
               ))}
         </ul>
      </div>
   );
};

export default DoneTasks;