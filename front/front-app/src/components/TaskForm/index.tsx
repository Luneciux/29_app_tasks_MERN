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
          <h2>Título,</h2>
          <h2>Ínicio - Fim (00:00h - 00:00h)</h2>
        </TaskFormHeaderStyle>
        <TaskFormActionsStyle>
          <ActionStyle>
            <p className="create">Criar</p>
          </ActionStyle>
        </TaskFormActionsStyle>
      </TaskFormHeaderContainerStyle>
      <TaskFormDescriptionStyle>
        <p>Escreva algo relacionado a task :D </p>
      </TaskFormDescriptionStyle>
    </TaskFormContainerStyle>
  );
}
