import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
import st from '../styles/auth.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn } from '@fortawesome/free-solid-svg-icons';

const Auth: FC = () => {
   const dispatch = useDispatch()
   const [userName, setUserName] = useState('')
   const [pass, setPass] = useState('')
   const [smthWrong, setsmthWrong] = useState('')

   const handleLogin = () => {
      if (userName === 'Admin' && pass === 'Admin') {
         dispatch(login());
         setsmthWrong('');
      } else {
         setsmthWrong('Логин/Пароль введен(ы) неверно');
      }
   };

   const enterAuth = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
         handleLogin();
      }
   };
   return (
      <div className={st.container}>
         <h1 className={st.title}>To<span style={{ color: '#2563eb', borderBottom: '5px solid #333' }}>Do</span> APP<FontAwesomeIcon icon={faToggleOn} /></h1>

         <div className={st.loginBar}>
            <input className={st.loginInput}
               type="text"
               placeholder='Введите имя пользователя'
               value={userName}
               onChange={(e) => setUserName(e.target.value)}
            />
            <input className={st.loginInput}
               type="password"
               placeholder='Введите пароль'
               value={pass}
               onChange={(e) => setPass(e.target.value)}
               onKeyDown={enterAuth}
            />
            <button className={st.loginButton} onClick={handleLogin}>Войти</button>
         </div>
         {smthWrong && <p className={st.smthWrong}>{smthWrong}</p>}

         <div style={{ marginLeft: '40px' }}>
            <h6 style={{ marginTop: '20px', fontWeight: '300', fontSize: '10px' }}>* Логин и пароль вы можете уточнить у администратора @maksimshirant</h6>
            <h6 style={{ fontWeight: '300', fontSize: '10px' }}>* Все записи хранятся только на вашем устройстве</h6>
         </div>

      </div>
   );
};

export default Auth;