import { TasksModeButton } from "../TasksModeButton";
import { TasksContainerStyle } from "./styles";

export function MontlyTasks() {
  return (
    <TasksContainerStyle>
      <h1>TASKS POR MES</h1>
      <TasksModeButton></TasksModeButton>
    </TasksContainerStyle>
  );
}
