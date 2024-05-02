import {
  TaskFormContainerStyle,
  TaskFormHeaderContainerStyle,
  TaskFormActionsStyle,
  TaskFormHeaderStyle,
  TaskFormDescriptionStyle,
  ActionStyle
} from "./styles";

export function TaskForm() {
  return (
    <TaskFormContainerStyle>
      <TaskFormHeaderContainerStyle>
        <TaskFormHeaderStyle>
          {/* <input type="text" className="text-input-title" placeholder="Título,"/>
          <input type="text" className="text-input-hour" placeholder="Ínicio - Fim (00:00h - 00:00h)"/> */}
          <textarea name="text-input-title" id="text-input-title" className="text-input-title" placeholder="Título,"/>
          <textarea name="text-input-date" id="text-input-date" className="text-input-date" placeholder="Ínicio - Fim (00:00h - 00:00h)"/>
        </TaskFormHeaderStyle>
        <TaskFormActionsStyle>
          <ActionStyle>
            <p className="create">Criar</p>
          </ActionStyle>
        </TaskFormActionsStyle>
      </TaskFormHeaderContainerStyle>
      <TaskFormDescriptionStyle>
        <input type="text" className="text-input-description" placeholder="Escreva algo relacionado a task"/>
      </TaskFormDescriptionStyle>
    </TaskFormContainerStyle>
  );
}
