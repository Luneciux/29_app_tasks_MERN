import { DailyTasksContainerStyle, TasksBoardStyle } from "./styles";
import { TaskForm } from "../TaskForm";
import { SearchBar } from "../SearchBar";
import { Task } from "../Task";
import { TaskType } from "../../types/Task";
import { useEffect, useState } from "react";

interface DailyTasksTypes {
  tasks: TaskType[];
}

export function DailyTasks({ tasks } :  DailyTasksTypes) {

  //const { tasks } = useContext(TasksContext);

  const [ filteredTasks, setFilteredTasks ] = useState<TaskType[]>([]);
  const [ searchString, setSearchString ] = useState("");
  const [ editedTask, setEditedTask ] = useState<TaskType>();

  const showTasks = (tasks: TaskType[]) => (
    <TasksBoardStyle>
      {tasks.map((task, i) => (
        <Task task={task} key={i} setEditedTask={setEditedTask} editedTask={editedTask} />
      ))}
    </TasksBoardStyle>
  );

  useEffect(() => {
    setFilteredTasks(tasks.filter((task) => task.title.includes(searchString)))
  }, [searchString]);



  return (
    <>
      <DailyTasksContainerStyle>
        <TaskForm editedTask={editedTask} setEditedTask={setEditedTask}/>

        <SearchBar setSearchString={setSearchString} />

        {
          tasks.length !== 0 ? showTasks(filteredTasks.length !== 0 ? filteredTasks : tasks) : <h1>Parece não haver tarefas no momento.</h1>
        }
      </DailyTasksContainerStyle>
    </>
  );
}
