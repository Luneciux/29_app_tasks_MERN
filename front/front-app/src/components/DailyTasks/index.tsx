import { DailyTasksContainerStyle, TasksBoardStyle } from "./styles";

import { DateComponent } from "../Date";
import { TaskForm } from "../TaskForm";
import { SearchBar } from "../SearchBar";
import { Task } from "../Task";
import { TaskType } from "../../types/Task";


interface DailyTasksType {
  tasks: TaskType[];
}

export function DailyTasks(props: DailyTasksType) {
  return (
    <>
      <DailyTasksContainerStyle>
        <DateComponent />
        <TaskForm />
        <SearchBar />
        {
          (!props.tasks) ? <h1>teste</h1> :

          <TasksBoardStyle>
            {props.tasks.map((task) => (
              <Task {...task}/>
            ))}
          </TasksBoardStyle>
        }
      </DailyTasksContainerStyle>
    </>
  );
}
