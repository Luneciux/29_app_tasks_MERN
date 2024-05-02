import { DailyTasksContainerStyle, TasksBoardStyle } from "./styles";

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
          <Task title="Terminar Atividades"/>
          <Task title="Fazer Compras"/>
          <Task title="Fazer Compras"/>
          <Task title="Fazer Compras"/>
        </TasksBoardStyle>
      </DailyTasksContainerStyle>
    </>
  );
}
