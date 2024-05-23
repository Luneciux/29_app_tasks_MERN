import axios from "axios";

import { TaskType } from "../types/Task";
import { SetStateAction } from "react";

export const api = axios.create({
  baseURL:  'http://localhost:3001'
});

export async function getTasks (user: string, setList: React.Dispatch<SetStateAction<TaskType[]>>){
  await api.get(`/user/${user}/tasks`)
      .then(({data}) => {
        setList(data);
      }).catch(() => []);
}

export async function getUser (setUser: React.Dispatch<SetStateAction<string>>){
  await api.get(`/users`)
      .then(({data}) => {
        setUser(data[0]);
      }).catch(() => []);
}
