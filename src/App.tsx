
import { FC } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import Auth from './components/Auth';

import ToDoApp from './components/ToDoApp';



const App: FC = () => {
  const isAuthTrue = useSelector((state: RootState) => state.auth.isAuthTrue)
  return (
    <div>
      {isAuthTrue ? <ToDoApp /> : <Auth />}
    </div>
  );
};

export default App;