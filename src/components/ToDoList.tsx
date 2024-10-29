import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { addNewToDo, completeToDo, deleteAllTodos, deleteToDo } from '../store/toDoSlice';
import st from '../styles/toDoList.module.css'

const ToDoList: FC = () => {
   const toDos = useSelector((state: RootState) => state.toDos.toDos)
   const dispatch = useDispatch()
   const [newToDo, setNewToDo] = useState('')
   const handleAddNewToDo = () => {
      if (newToDo.trim()) {
         dispatch(addNewToDo(newToDo))
         setNewToDo('')
      }
   }


   return (

      <div>
         <h1 className={st.title}>To<span style={{ color: 'red', borderBottom: '5px solid #333' }}>Do</span> APP</h1>
         <div className={st.addBar}>
            <input className={st.toDoInput}
               type="text"
               placeholder='Введите текст'
               value={newToDo}
               onChange={(e) => setNewToDo(e.target.value)}

            />
            <div>
               <button className={st.addButton} onClick={handleAddNewToDo}>Добавить задачу </button>
               <button className={st.addButton} onClick={() => dispatch(deleteAllTodos())}>Очистить список</button>
            </div>
         </div>
         <div>
            <h2 className={st.title}>Список задач:</h2>
            <ul className={st.toDoItems}>
               {toDos.map((todo) => (
                  <li className={st.toDoItem} key={todo.id}>
                     <span>
                        {todo.text}
                     </span>
                     <div>
                        <button
                           className={st.addButton}
                           onClick={() => dispatch(completeToDo(todo.id))}>
                           {todo.completed ? '✘' : '✔'}
                        </button>
                        <button
                           className={st.addButton}
                           onClick={() => dispatch(deleteToDo(todo.id))}>🗑</button>
                     </div>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
};

export default ToDoList;