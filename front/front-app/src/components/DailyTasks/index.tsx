import { DailyTasksContainerStyle, TasksBoardStyle } from "./styles";

import { DateComponent } from "../Date";
import { TaskForm } from "../TaskForm";
import { SearchBar } from "../SearchBar";
import { Task } from "../Task";
import { TagType } from "../../types/Tag";

const tags: TagType[] = [
  {
    "_id": "663530c8d2940be8169b79d8",
    "title": "teste_5",
  },
  {
    "_id": "663530c8d2940be8169b79d8",
    "title": "teste_6",
  }
];

export function DailyTasks() {


  return (
    <>
      <DailyTasksContainerStyle>
        <DateComponent />
        <TaskForm />
        <SearchBar />
        <TasksBoardStyle>
          <Task title="Terminar Atividades" date="09:00h - 12:00h" description="Teste 1" tags={tags}/>
          <Task title="Fazer Compras 1" date="09:00h - 12:00h" description="Teste 2" tags={[]} />
        </TasksBoardStyle>
      </DailyTasksContainerStyle>
    </>
  );
}
