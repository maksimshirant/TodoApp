import { FC } from 'react';
import { completeToDo, deleteToDo } from '../store/toDoSlice';
import st from '../styles/toDoList.module.css'
import { useDispatch } from 'react-redux';
import { TaskProps } from '../interfaces/interfaces';
const Task: FC<TaskProps> = ({ todo }) => {
   const dispatch = useDispatch()
   return (
      <li className={st.toDoItem} key={todo.id}>
         <span>
            {todo.text}
         </span>
         <div>
            <button
               className={st.addButton}
               onClick={() => dispatch(completeToDo(todo.id))}>
               <div style={todo.completed ? { color: 'green' } : { color: 'red' }}>{todo.completed ? 'Готово' : 'В процессе'}</div>
            </button>
            <button
               className={st.addButton}
               onClick={() => dispatch(deleteToDo(todo.id))}>🗑</button>
         </div>
      </li>
   );
};

export default Task;