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
          <Task title="Terminar Atividades" date="09:00h - 12:00h" description="Teste 1"/>
          <Task title="Fazer Compras 1" date="09:00h - 12:00h" description="Teste 2"/>
          <Task title="Fazer Compras 2" date="09:00h - 12:00h" description="Teste 3"/>
          <Task title="Fazer Compras 3" date="09:00h - 12:00h" description="Teste 4"/>
        </TasksBoardStyle>
      </DailyTasksContainerStyle>
    </>
  );
}
