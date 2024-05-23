import { DailyTasksContainerStyle, TasksBoardStyle } from "./styles";

import { DateComponent } from "../Date";
import { TaskForm } from "../TaskForm";
import { SearchBar } from "../SearchBar";
import { Task } from "../Task";
import { TaskType } from "../../types/Task";
import { useState, useEffect } from "react";


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

  const [searchString, setSearchString] = useState("");
  const [filteredTasks, setFilteredTasks] = useState<TaskType[]>(tasks);

  useEffect(() => {
    console.log(searchString, tasks, filteredTasks);
    setFilteredTasks(tasks.filter((task) => task.title.includes(searchString)));
  }, [searchString]);

  return (
    <>
      <DailyTasksContainerStyle>
        <DateComponent />
        <TaskForm />
        <SearchBar setSearchString={setSearchString} searchString={searchString}/>
        {
          tasks.length !== 0 ? showTasks(searchString ? filteredTasks : tasks) : <h1>Parece não haver tarefas no momento.</h1>
        }
      </DailyTasksContainerStyle>
    </>
  );
}
