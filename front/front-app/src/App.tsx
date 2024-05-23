import { GlobalStyles } from "./styles/GlobalStyles";

import { Header } from "./components/Header";
import { DailyTasks } from "./components/DailyTasks";
import { MontlyTasks } from "./components/MontlyTasks";
import { Footer } from "./components/Footer";
import { TaskType } from "./types/Task";
import { api } from "./utils/api";
import { useState, useEffect } from "react";

export function App() {
  const test = true;

  const [tasks, setTasks] = useState<TaskType[]>([]);
  const user = "664e61997980052448116ec7";

  //context -> hook -> acessar dados -> (task, setTask, fazerReq)

  useEffect(() => {
    api.get('/tasks')
      .then(({data}) => {
        setTasks(data);
      });
  }, []);

  return (
    <>
      <GlobalStyles />
      <Header />
      { test ? <DailyTasks tasks={tasks} user={user}/> : < MontlyTasks/> }
      <Footer />
    </>
  );
}
