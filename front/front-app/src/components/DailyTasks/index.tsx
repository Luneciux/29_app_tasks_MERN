import { DailyTasksContainerStyle, TasksBoardStyle } from "./styles";
import { TaskForm } from "../TaskForm";
import { SearchBar } from "../SearchBar";
import { Task } from "../Task";
import { TaskType } from "../../types/Task";
import { SetStateAction, createContext, useEffect, useState } from "react";


interface SearchStringContextType {
  setSearchString: React.Dispatch<SetStateAction<string>>
}

interface DailyTasksTypes {
  tasks: TaskType[];
}

export const SearchStringContext = createContext< SearchStringContextType >({ setSearchString: () => {} });

const showTasks = (tasks: TaskType[]) => (
  <TasksBoardStyle>
    {tasks.map((task, i) => (
      <Task {...task} key={i} />
    ))}
  </TasksBoardStyle>
);

export function DailyTasks({ tasks } :  DailyTasksTypes) {

  //const { tasks } = useContext(TasksContext);

  const [ filteredTasks, setFilteredTasks ] = useState<TaskType[]>([]);
  const [ searchString, setSearchString ] = useState("");

  useEffect(() => {
    setFilteredTasks(tasks.filter((task) => task.title.includes(searchString)))
  }, [searchString]);


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
