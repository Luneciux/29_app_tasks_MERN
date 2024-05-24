import { DailyTasksContainerStyle, TasksBoardStyle } from "./styles";
import { TaskForm } from "../TaskForm";
import { SearchBar } from "../SearchBar";
import { Task } from "../Task";
import { TaskType } from "../../types/Task";
import { SetStateAction, createContext, useContext, useEffect, useState } from "react";
import { TasksContext } from "../../App";

const showTasks = (tasks: TaskType[]) => (
  <TasksBoardStyle>
    {tasks.map((task) => (
      <Task {...task} key={task._id} />
    ))}
  </TasksBoardStyle>
);

interface SearchStringContextType {
  searchString: string,
  setSearchString: React.Dispatch<SetStateAction<string>>
}

export const SearchStringContext = createContext< SearchStringContextType >({ searchString: "", setSearchString: () => {} });


export function DailyTasks() {

  const { tasks } = useContext(TasksContext);
  const [ filteredTasks, setFilteredTasks ] = useState<TaskType[]>([]);
  const [ searchString, setSearchString ] = useState("");

  useEffect(() => {
    setFilteredTasks(tasks.filter((task) => task.title.includes(searchString)))
  }, [searchString, tasks, filteredTasks.length]);


  return (
    <>
      <DailyTasksContainerStyle>
        <TaskForm />

        <SearchBar setSearchString={setSearchString} />

        {
          tasks.length !== 0 ? showTasks(filteredTasks.length !== 0 ? filteredTasks : tasks) : <h1>Parece não haver tarefas no momento.</h1>
        }
      </DailyTasksContainerStyle>
    </>
  );
}
