import { FC } from 'react';
import { completeToDo, deleteToDo } from '../store/toDoSlice';
import st from '../styles/toDoList.module.css'
import { useDispatch } from 'react-redux';
import { TaskProps } from '../interfaces/interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEraser, faHourglassHalf } from '@fortawesome/free-solid-svg-icons';
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
               <div>{todo.completed ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faHourglassHalf} />}</div>
            </button>
            <button
               className={st.addButton}
               onClick={() => dispatch(deleteToDo(todo.id))}><FontAwesomeIcon icon={faEraser} /></button>
         </div>
      </li>
   );
};

export default Task;