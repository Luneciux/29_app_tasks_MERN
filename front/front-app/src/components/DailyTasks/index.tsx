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
          (!props.tasks) ? "TEZTERFWEGFWERG" :
          <TasksBoardStyle>
            {props.tasks.map((task) => (
              <Task {...task} key={task._id}/>
            ))}
          </TasksBoardStyle>
        }
      </DailyTasksContainerStyle>
    </>
  );
}
