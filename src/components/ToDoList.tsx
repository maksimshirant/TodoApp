import { FC } from 'react';
import st from '../styles/toDoList.module.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AllTasks from './AllTasks';
import DoneTasks from './DoneTasks';
import ActiveTasks from './ActiveTasks';
import Trash from './Trash';


const ToDoList: FC = () => {
   return (
      <Router>
         <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '20px' }}>
            <Link to="/alltasks">
               <button className={st.linkButton}>Все задачи</button>
            </Link>
            <Link to="/donetasks">
               <button className={st.linkButton}>Завершенные</button>
            </Link>
            <Link to="/activetasks">
               <button className={st.linkButton}>Активные</button>
            </Link>
            <Link to="/trash">
               <button className={st.linkButton}>Удаленные</button>
            </Link>
         </div>
         <Routes>
            <Route path="/alltasks" element={<AllTasks />} />
            <Route path="/donetasks" element={<DoneTasks />} />
            <Route path="/activetasks" element={<ActiveTasks />} />
            <Route path="/trash" element={<Trash />} />
         </Routes>
      </Router>
   );
};

export default ToDoList;