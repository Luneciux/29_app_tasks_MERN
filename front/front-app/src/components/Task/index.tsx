import {
  TaskContainerStyle,
  TaskHeaderContainerStyle,
  TaskActionsStyle,
  TaskHeaderStyle,
  TaskDescriptionStyle,
  TaskTagsStyle,
  ActionStyle
} from "./styles";

import { Tag } from "../Tag";
import { TagForm } from "../TagForm";
import { TaskType } from "../../types/Task";

export function Task(props: TaskType) {
  return (
    <TaskContainerStyle>
      <TaskHeaderContainerStyle>
        <TaskHeaderStyle>
          <h2>{`${props.title},`}</h2>
          <h2>{`${props.date}`}</h2>

        </TaskHeaderStyle>
        <TaskActionsStyle>
          <ActionStyle>
            <p className="edit">Editar</p>
          </ActionStyle>
          <ActionStyle>
            <p className="delete">Deletar</p>
          </ActionStyle>
        </TaskActionsStyle>
      </TaskHeaderContainerStyle>
      <TaskDescriptionStyle>
        <p>{`${props.description}`}</p>
      </TaskDescriptionStyle>
      <TaskTagsStyle>
        {props.tags.map((tag) => (
          <Tag title={`${tag.title}`} key={tag._id} _id={tag._id}/>
        ))}
        <TagForm />
      </TaskTagsStyle>
    </TaskContainerStyle>
  );
}
