import { FC } from 'react';
import st from '../styles/toDoList.module.css'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import AllTasks from './AllTasks';
import DoneTasks from './DoneTasks';
import ActiveTasks from './ActiveTasks';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Info from './Info';



const ToDoList: FC = () => {
   return (
      <Router>
         <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '20px' }}>
            <NavLink
               to="/alltasks"
               className={({ isActive }) => isActive ? `${st.linkButton} ${st.activeLink}` : st.linkButton}
            >
               Все задачи
            </NavLink>
            <NavLink
               to="/activetasks"
               className={({ isActive }) => isActive ? `${st.linkButton} ${st.activeLink}` : st.linkButton}
            >
               Активные
            </NavLink>
            <NavLink
               to="/donetasks"
               className={({ isActive }) => isActive ? `${st.linkButton} ${st.activeLink}` : st.linkButton}
            >
               Завершенные
            </NavLink>
            <NavLink
               to="/info"
               className={({ isActive }) => isActive ? `${st.linkButton} ${st.activeLink}` : st.linkButton}
            >
               <FontAwesomeIcon icon={faCircleInfo} />
            </NavLink>


         </div>
         <Routes>
            <Route path="/alltasks" element={<AllTasks />} />
            <Route path="/donetasks" element={<DoneTasks />} />
            <Route path="/activetasks" element={<ActiveTasks />} />
            <Route path="/info" element={<Info />} />
         </Routes>
      </Router>
   );
};

export default ToDoList;