import { useDispatch } from 'react-redux';
import { addNewToDo } from '../store/toDoSlice';

export const useAddToDo = () => {
   const dispatch = useDispatch();

   const handleAddNewToDo = (text: string) => {
      if (text.trim()) {
         dispatch(addNewToDo(text));
      }
   };

   return { handleAddNewToDo };
};