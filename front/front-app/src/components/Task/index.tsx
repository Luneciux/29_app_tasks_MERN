import { TaskContainerStyle, TaskHeaderContainerStyle, TaskActionsStyle, TaskHeaderStyle, TaskDescriptionStyle, TaskTagsStyle } from "./styles";

import { Tag } from "../Tag";
import { TagForm } from "../TagForm";

export function Task() {
  return (
    <TaskContainerStyle>
      <TaskHeaderContainerStyle>
        <TaskHeaderStyle>
          <h2>Fazer Compras,</h2>
          <h2>09:00h - 12:00h</h2>
        </TaskHeaderStyle>
        <TaskActionsStyle>
          <p>Deletar</p>
        </TaskActionsStyle>
      </TaskHeaderContainerStyle>
      <TaskDescriptionStyle>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      </TaskDescriptionStyle>
      <TaskTagsStyle>
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />

        <TagForm />
      </TaskTagsStyle>
    </TaskContainerStyle>
  );
}
