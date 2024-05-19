import { DailyTasksContainerStyle, TasksBoardStyle } from "./styles";

import { DateComponent } from "../Date";
import { TaskForm } from "../TaskForm";
import { SearchBar } from "../SearchBar";
import { Task } from "../Task";
import { TaskType } from "../../types/Task";
import { useState, useEffect } from "react";


interface DailyTasksType {
  tasks: TaskType[];
}

const showTasks = (tasks: TaskType[]) => (
  <TasksBoardStyle>
    {tasks.map((task) => (
      <Task {...task} key={task._id}/>
    ))}
  </TasksBoardStyle>
)

export function DailyTasks(props: DailyTasksType) {

  const [searchString, setSearchString] = useState("");


  useEffect(() => {
  }, [searchString]);

  return (
    <>
      <DailyTasksContainerStyle>
        <DateComponent />
        <TaskForm />
        <SearchBar setSearchString={setSearchString} searchString={searchString}/>
        {
          props.tasks.length !== 0 ? showTasks(props.tasks) : <h1>Parece não haver tarefas no momento.</h1>
        }
      </DailyTasksContainerStyle>
    </>
  );
}
