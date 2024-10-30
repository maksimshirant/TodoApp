export interface ToDo {
   id: number,
   text: string,
   completed: boolean,
   deleted: boolean,
}
export interface ToDoState {
   toDos: ToDo[]
}
export interface AuthState {
   isAuthTrue: boolean
}
export interface TaskProps {
   todo: ToDo;
}