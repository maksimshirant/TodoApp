
import { FC } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './components/Auth';
import ToDoList from './components/ToDoList';



const App: FC = () => {
  const isAuthTrue = useSelector((state: RootState) => state.auth.isAuthTrue)
  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthTrue ? <ToDoList /> : <Auth />} />
      </Routes>
    </Router>
  );
};

export default App;