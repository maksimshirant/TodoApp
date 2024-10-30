export interface ToDo {
   id: number,
   text: string,
   completed: boolean,
   deleted: boolean,
}
export interface ToDoState {
   toDos: ToDo[],
   deletedToDos: ToDo[];

}
export interface AuthState {
   isAuthTrue: boolean
}
export interface TaskProps {
   todo: ToDo;
}