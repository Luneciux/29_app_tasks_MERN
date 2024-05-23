import { DailyTasksContainerStyle, TasksBoardStyle } from "./styles";

import { TaskForm } from "../TaskForm";
import { SearchBar } from "../SearchBar";
import { Task } from "../Task";
import { TaskType } from "../../types/Task";


interface DailyTasksType {
  tasks: TaskType[],
}

const showTasks = (tasks: TaskType[]) => (
  <TasksBoardStyle>
    {tasks.map((task) => (
      <Task {...task} key={task._id} />
    ))}
  </TasksBoardStyle>
)


export function DailyTasks({ tasks } : DailyTasksType) {

  return (
    <>
      <DailyTasksContainerStyle>
        <TaskForm />
        <SearchBar/>
        {
          tasks.length !== 0 ? showTasks(tasks) : <h1>Parece não haver tarefas no momento.</h1>
        }
      </DailyTasksContainerStyle>
    </>
  );
}
