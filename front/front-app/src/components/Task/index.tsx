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
import { TagType } from "../../types/Tag"
import { TagForm } from "../TagForm";

interface TaskProps {
  title: string,
  date: string,
  description: string,
  tags: TagType[];
}

export function Task(props: TaskProps) {
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
          <Tag title={`${tag.title}  teste com map`} key={tag._id}/>
        ))}
        <TagForm />
      </TaskTagsStyle>
    </TaskContainerStyle>
  );
}
