import axios from "axios";

import { TaskType } from "../types/Task";
import { SetStateAction } from "react";
import { TagType } from "../types/Tag";

const Api = axios.create({
  baseURL:  'http://localhost:3001'
});

export async function GetTasks (user: string, setTasks: React.Dispatch<SetStateAction<TaskType[]>>){
  if(!user)
    return null;

  await Api.get(`/users/${user}/tasks`)
           .then(({ data }) => {
              setTasks(data);
           }).catch((e) => console.log(e));

}

export async function GetTasksById (taskId: string){
  if(!taskId)
    return null;

  await Api.get(`/tasks/${taskId}`)
           .then(({ data }) => {
             return data;
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

export async function CreateTask (task: TaskType, setTasks: React.Dispatch<SetStateAction<TaskType[]>>){
  if(!task)
    return null;

  await Api.post("/tasks", task).then(({ data }) => {
    setTasks(prevTasks => [ ...prevTasks, data ]);
  }).catch(e => console.log(e));

}

export async function EditTask (task: TaskType){
  if(!task)
    return null;

  await Api.patch(`/tasks/${task._id}`, task).catch(e => console.log(e));

}

export async function CreateTag (tag: TagType, task: TaskType, setTags: React.Dispatch<SetStateAction<TagType[]>>){
  if(!tag || tag === undefined || !task)
    return null;

  await Api.post(`/tags`, tag).then(({ data }) => {

    task.tags.push(data);
    setTags((prevTags) => [ ...prevTags, data]);
    EditTask(task).catch(e => console.log(e));

  }).catch(e => console.log(e));

}

export async function DeleteTag (_id?: string){
  if(!_id)
    return null;

  await Api.delete(`/tags/${_id}`).catch(e => console.log(e));

}





