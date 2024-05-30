import {
  TaskContainerStyle,
  TaskHeaderContainerStyle,
  TaskActionsStyle,
  TaskHeaderStyle,
  TaskDescriptionStyle,
  TaskTagsStyle,
  ActionStyle,
  TaskTitleStyle,
  TaskTimeSpanStyle
} from "./styles";

import { Tag } from "../Tag";
import { TagForm } from "../TagForm";
import { TaskType } from "../../types/Task";
import { DeleteTask } from "../../utils/Api";
import { SetStateAction, useContext } from "react";
import { TasksContext } from "../../App";
import { FormatTime } from "../../utils/Date";

interface TaskComponentType {
  task: TaskType,
  setEditedTask: React.Dispatch<SetStateAction<TaskType | undefined>>
}

export function Task( { task, setEditedTask } : TaskComponentType) {

  const { setTasks } = useContext(TasksContext);
  const { _id } = task;

  const formatedDate = new Date(task.date);
  const timeSpan = new Date(task.timeSpanHours);

  function deleteTaskAndUpdateList () {
    setTasks(prevTasks => prevTasks.filter((e) => e._id !== _id));
    return null;
  }

  async function handleDelete () {
    await DeleteTask(_id).then(deleteTaskAndUpdateList()).catch(e => console.log(e));
  }

  async function handleEdit () {
    setEditedTask(task);
    return null;
  }

  return (
    <TaskContainerStyle $action={true}>

      <TaskHeaderContainerStyle>

        <TaskHeaderStyle>
          <TaskTitleStyle><h2>{`${task.title}`}</h2></TaskTitleStyle>
          <TaskTimeSpanStyle><h2>{`${FormatTime(formatedDate)}h - ${FormatTime(timeSpan)}h`}</h2></TaskTimeSpanStyle>
        </TaskHeaderStyle>

        <TaskActionsStyle>
          <ActionStyle>
            <p className="edit" onClick={ handleEdit }>
              Editar
            </p>
          </ActionStyle>
          <ActionStyle>
            <p className="delete" onClick={ handleDelete } >
              Deletar
            </p>
          </ActionStyle>
        </TaskActionsStyle>

      </TaskHeaderContainerStyle>

      <TaskDescriptionStyle>
        <p>{`${task.description}`}</p>
      </TaskDescriptionStyle>

      <TaskTagsStyle>
        {task.tags.map((tag) => (
          <Tag title={`${tag.title}`} key={tag._id} _id={tag._id}/>
        ))}
        <TagForm />
      </TaskTagsStyle>

    </TaskContainerStyle>
  );
}
