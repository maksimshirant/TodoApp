import { FC, useState } from 'react';
import { completeToDo, deleteToDo, editToDo } from '../store/toDoSlice';
import st from '../styles/toDoList.module.css'
import { useDispatch } from 'react-redux';
import { TaskProps } from '../interfaces/interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPen, faToggleOff, faToggleOn, faXmark } from '@fortawesome/free-solid-svg-icons';

const Task: FC<TaskProps> = ({ todo }) => {
   const dispatch = useDispatch()
   const [editText, setEditText] = useState('');
   const [editToDoId, setEditToDoId] = useState<number | null>(null);
   const handleSaveEdit = () => {
      if (editToDoId !== null) {
         dispatch(editToDo({ id: editToDoId, newText: editText }));
         setEditToDoId(null);
         setEditText('');
      }
   };
   const handleEditClick = (id: number, text: string) => {
      setEditToDoId(id);
      setEditText(text);
   };
   const handleKeyPress = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
         handleSaveEdit();
      }
   };
   return (
      <li className={st.toDoItem} key={todo.id}>
         {editToDoId === todo.id ? (
            <div>
               <input
                  className={st.toDoInputEdit}
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyDown={handleKeyPress}
               />
               <button
                  className={st.addButton}
                  onClick={handleSaveEdit}><FontAwesomeIcon
                     icon={faArrowRight} /></button>
            </div>
         ) : (
            <div >
               <span>{todo.text}</span>

            </div>
         )}

         <div>
            <button
               className={st.addButton}
               onClick={() => handleEditClick(todo.id, todo.text)}>
               <FontAwesomeIcon icon={faPen} />
            </button>
            <button
               className={st.addButton}
               onClick={() => dispatch(completeToDo(todo.id))}>
               <div>{todo.completed ? <FontAwesomeIcon icon={faToggleOn} /> : <FontAwesomeIcon icon={faToggleOff} />}</div>
            </button>
            <button
               className={st.addButton}
               onClick={() => dispatch(deleteToDo(todo.id))}><FontAwesomeIcon icon={faXmark} /></button>
         </div>
      </li>
   );
};

export default Task;