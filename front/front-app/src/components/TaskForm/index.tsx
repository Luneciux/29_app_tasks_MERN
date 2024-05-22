import { useState } from "react";
import {
  TaskFormContainerStyle,
  TaskFormHeaderContainerStyle,
  TaskFormActionsStyle,
  TaskFormHeaderStyle,
  TaskFormDescriptionStyle,
  ActionStyle
} from "./styles";

export function TaskForm() {
  const [startHour, setStartHour] = useState("00:00");

  const handleHours = (value: string) => {setStartHour(value)};

  return (
    <TaskFormContainerStyle>
      <TaskFormHeaderContainerStyle>
        <TaskFormHeaderStyle>
          <textarea name="text-input-title" id="text-input-title" className="text-input-title" placeholder="Título," cols={20} rows={3}/>
          <input type="time" name="text-input-date" id="text-input-date-1" className="text-input-date" value={startHour}/>
          <span className="time-input-separator">até</span>
          <input type="time" name="text-input-date-span" id="text-input-date-span" className="text-input-date" step="1800" value={startHour}/>
        </TaskFormHeaderStyle>
        <TaskFormActionsStyle>
          <ActionStyle>
            <p className="create">Criar</p>
          </ActionStyle>
        </TaskFormActionsStyle>
      </TaskFormHeaderContainerStyle>
      <TaskFormDescriptionStyle>
        <textarea name="text-input-description" id="text-input-description" className="text-input-description" placeholder="Escreva algo relacionado a task"/>
      </TaskFormDescriptionStyle>
    </TaskFormContainerStyle>
  );
}
