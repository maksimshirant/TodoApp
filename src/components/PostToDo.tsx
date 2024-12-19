import React, { FC, useState } from 'react';
import st from '../styles/toDoList.module.css'
import { useDispatch } from 'react-redux';
import { deleteAllTodos } from '../store/toDoSlice';
import { logOut } from '../store/authSlice';
import { useAddToDo } from '../utils/toDoUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faRightFromBracket, faToggleOn, faTrashCan } from '@fortawesome/free-solid-svg-icons';


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
      <div className={st.container}>
         <div className={st.logoLine}>
            <h1 className={st.title}>To<span style={{ color: '#2563eb', borderBottom: '5px solid #333' }}>Do</span> APP<FontAwesomeIcon icon={faToggleOn} /> </h1>
            <button className={st.exitButton} onClick={() => dispatch(logOut())}>
               <FontAwesomeIcon icon={faRightFromBracket} />
            </button>
         </div>
         <div className={st.addBar}>
            <input className={st.toDoInput}
               type="text"
               placeholder='Введите текст'
               value={newToDo}
               onChange={(e) => setNewToDo(e.target.value)}
               onKeyDown={enterPost}
            />

            <button className={st.addButton} onClick={handleClickAdd}>
               <FontAwesomeIcon icon={faPlus} />
            </button>
            <button className={st.addButton} onClick={() => dispatch(deleteAllTodos())}>
               <FontAwesomeIcon icon={faTrashCan} />
            </button>
         </div>


      </div>
   );
};

export default PostToDo;