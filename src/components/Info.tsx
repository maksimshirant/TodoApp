import { faArrowRight, faPen, faRightFromBracket, faToggleOff, faToggleOn, faTrashCan, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Info = () => {
   return (
      <div style={{ marginBottom: '20px' }}>
         <h2>- Задачи обозначенные <FontAwesomeIcon icon={faToggleOff} /> считаются активными</h2>
         <h2>- Задачи  обозначенные <FontAwesomeIcon icon={faToggleOn} /> считаются завершенными</h2>
         <h2>- Нажмите <FontAwesomeIcon icon={faTrashCan} /> чтобы удалить все задачи</h2>
         <h2>- Нажмите <FontAwesomeIcon icon={faXmark} /> чтобы удалить конкретную задачу</h2>
         <h2>- Нажмите <FontAwesomeIcon icon={faPen} /> чтобы редактировать содержимое задачи</h2>
         <h2>- После завершения редактирования задачи  нажмите <FontAwesomeIcon icon={faArrowRight} /> или ENTER для ее сохранения</h2>
         <h2>- Для выхода из аккаунта используйте <FontAwesomeIcon icon={faRightFromBracket} /></h2>
      </div>
   );
};

export default Info;