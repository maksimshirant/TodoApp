import React, { FC, useState } from 'react';
import st from '../styles/toDoList.module.css'
import { useDispatch } from 'react-redux';
import { deleteAllTodos } from '../store/toDoSlice';
import { logOut } from '../store/authSlice';
import { useAddToDo } from '../utils/toDoUtils';

const PostToDo: FC = () => {
   const [newToDo, setNewToDo] = useState('')
   const dispatch = useDispatch()

   const { handleAddNewToDo } = useAddToDo();

   const enterPost = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
         handleAddNewToDo(newToDo);
         setNewToDo('');
      }
   };

   const handleClickAdd = () => {
      handleAddNewToDo(newToDo);
      setNewToDo('');
   };

   return (
      <div>
         <h1 className={st.title}>To<span style={{ color: 'red', borderBottom: '5px solid #333' }}>Do</span> APP</h1>
         <div className={st.addBar}>
            <input className={st.toDoInput}
               type="text"
               placeholder='Введите текст'
               value={newToDo}
               onChange={(e) => setNewToDo(e.target.value)}
               onKeyDown={enterPost}
            />
            <div>
               <button className={st.addButton} onClick={handleClickAdd}>Добавить задачу </button>
               <button className={st.addButton} onClick={() => dispatch(deleteAllTodos())}>Очистить список</button>
               <button className={st.addButton} onClick={() => dispatch(logOut())}>Выход</button>
            </div>
         </div>
      </div>
   );
};

export default PostToDo;