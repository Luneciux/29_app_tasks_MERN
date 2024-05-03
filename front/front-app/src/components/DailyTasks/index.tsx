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
        <TasksBoardStyle>
          {props.tasks.map((task) => (
            <Task title={`${task.title}`} date={task.date} description={task.description} key={task._id} _id={task._id} tags={task.tags}/>
          ))}
        </TasksBoardStyle>
      </DailyTasksContainerStyle>
    </>
  );
}
