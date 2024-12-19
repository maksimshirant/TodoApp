import { FC } from 'react';
import st from '../styles/toDoList.module.css'
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import AllTasks from './AllTasks';
import DoneTasks from './DoneTasks';
import ActiveTasks from './ActiveTasks';



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


         </div>
         <Routes>
            <Route path="/alltasks" element={<AllTasks />} />
            <Route path="/donetasks" element={<DoneTasks />} />
            <Route path="/activetasks" element={<ActiveTasks />} />

         </Routes>
      </Router>
   );
};

export default ToDoList;