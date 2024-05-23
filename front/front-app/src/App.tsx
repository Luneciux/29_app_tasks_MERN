import { useState, createContext, SetStateAction } from "react";
import { GlobalStyles } from "./styles/GlobalStyles";

import { Header } from "./components/Header";
import { DailyTasks } from "./components/DailyTasks";
import { MontlyTasks } from "./components/MontlyTasks";
import { Footer } from "./components/Footer";
import { TaskType } from "./types/Task";

import { getTasks, getUser } from "./utils/api";

interface TasksContextType {
  tasks?: TaskType[],
  setTasks: React.Dispatch<SetStateAction<TaskType[]>>
}

interface TasksModeContextType {
  tasksMode?: string,
  setTasksMode: React.Dispatch<SetStateAction<string>>
}

interface UserContextType {
  user?: string,
  setUser: React.Dispatch<SetStateAction<string>>
}

export const TasksContext = createContext< TasksContextType >({ setTasks: () => {} });
export const TasksModeContext = createContext< TasksModeContextType >({ setTasksMode: () => {} });
export const UserContext = createContext< UserContextType >({ setUser: () => {} });

export function App() {

  const [user, setUser] = useState("");
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [tasksMode, setTasksMode] = useState("daily");

  if (!user) {
    getUser(setUser);
  }


  getTasks(user, setTasks);


  return (
    <>
      <GlobalStyles />
      <Header />
      <TasksContext.Provider value={
        { tasks, setTasks }
      }>
        <UserContext.Provider value={
          { user, setUser }
        }>
          <TasksModeContext.Provider value={
            { tasksMode, setTasksMode }
          }>
            { tasksMode === "daily" ? <DailyTasks tasks={tasks}/> : < MontlyTasks/> }

          </TasksModeContext.Provider>



        </UserContext.Provider>

      </TasksContext.Provider>

      <Footer />
    </>
  );
}
