import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import st from '../styles/toDoList.module.css'


const Trash: FC = () => {
   const deletedToDos = useSelector((state: RootState) => state.toDos.deletedToDos);

   return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
         <ul>
            {
               deletedToDos.map((todo) => (
                  <li className={st.toDoItem} key={todo.id}>
                     <span>{todo.text}</span>
                     <span>Удалено</span>
                  </li>
               ))
            }
         </ul>
      </div>
   );
};

export default Trash;


