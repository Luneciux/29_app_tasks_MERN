import { DailyTasksContainerStyle } from "./styles";
import { TasksBoardStyle } from "./styles";

import { DateComponent } from "../Date";
import { TaskForm } from "../TaskForm";
import { SearchBar } from "../SearchBar";
import { Task } from "../Task";


export function DailyTasks() {
  return (
    <>
      <DailyTasksContainerStyle>
        <DateComponent />
        <TaskForm />
        <SearchBar />
        <TasksBoardStyle>
          <Task />
          <Task />
          <Task />
          <Task />
        </TasksBoardStyle>
      </DailyTasksContainerStyle>
    </>
  );
}
