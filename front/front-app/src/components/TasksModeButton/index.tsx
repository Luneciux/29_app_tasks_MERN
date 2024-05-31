import { useContext } from "react";
import { TasksModeContext } from "../../App";

import {
  TaskButtonContainerStyle,
  TaskFormActionsStyle,
  ActionStyle
} from "./styles";


export function TasksModeButton() {

  const { tasksMode, setTasksMode } = useContext(TasksModeContext);

  function handleTasksModeChange () {
    tasksMode === "dia" ? setTasksMode("mês") : setTasksMode("dia");
  }

  return (
    <TaskButtonContainerStyle>
      <TaskFormActionsStyle>
        <ActionStyle>

          <button
            className="change"
            onClick={handleTasksModeChange}
          >
            {`Por ${tasksMode}`}
          </button>

        </ActionStyle>
      </TaskFormActionsStyle>
    </TaskButtonContainerStyle>
  );
}
