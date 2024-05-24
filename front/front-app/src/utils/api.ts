import axios from "axios";

import { TaskType } from "../types/Task";
import { SetStateAction } from "react";

export const Api = axios.create({
  baseURL:  'http://localhost:3001'
});

// export function Api () {

  // const api = axios.create({
  //   baseURL:  'http://localhost:3001'
  // });


//   async function getUser (setUser: React.Dispatch<SetStateAction<string>>){
//     await api.get(`/users`)
//         .then(({data}) => {
//           const { _id } = data[0];
//           setUser(_id);
//         }).catch((e) => console.log(e));
//   }

  // export async function GetUser (setUser: React.Dispatch<SetStateAction<string>>){
  //   await api.get(`/users`)
  //       .then(({data}) => {
  //         const { _id } = data[0];
  //         setUser(_id);
  //       }).catch((e) => console.log(e));
  // }

//   async function deleteTask (_id?: string){
//     if(!_id)
//       return null;

//     await api.delete(`/tasks/${_id}`).catch((e) => console.log(e));

//   }

//   async function createTask (task: TaskType){
//     await api.post("/tasks", task).catch(e => console.log(e));
//   }

// }

export async function GetTasks (user: string, setList: React.Dispatch<SetStateAction<TaskType[]>>){

  if(!user)
    return null;

  await Api.get(`/users/${user}/tasks`)
      .then(({data}) => {
        setList(data);
      }).catch((e) => console.log(e));

}


export async function GetUser (setUser: React.Dispatch<SetStateAction<string>>){
  await Api.get(`/users`)
      .then(({data}) => {
        const { _id } = data[0];
        setUser(_id);
      }).catch((e) => console.log(e));
}

export async function DeleteTask (_id?: string){
  if(!_id)
    return null;

  await Api.delete(`/tasks/${_id}`).catch((e) => console.log(e));

}

export async function CreateTask (task: TaskType){
  if(!task)
    return null;

  await Api.post("/tasks", task).catch(e => console.log(e));
}


