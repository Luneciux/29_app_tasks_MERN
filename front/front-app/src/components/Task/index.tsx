import {
  TaskContainerStyle,
  TaskHeaderContainerStyle,
  TaskActionsStyle,
  TaskHeaderStyle,
  TaskDescriptionStyle,
  TaskTagsStyle,
  ActionStyle,
  TaskTitleStyle,
  TaskTimeSpanStyle,
  TaskTagsEdition
} from "./styles";

import { Tag } from "../Tag";
import { TagForm } from "../TagForm";
import { TaskType } from "../../types/Task";
import { DeleteTask } from "../../utils/Api";
import { SetStateAction, useContext, useEffect, useState } from "react";
import { TasksContext } from "../../App";
import { FormatTime } from "../../utils/Date";

interface TaskComponentType {
  task: TaskType,
  setEditedTask: React.Dispatch<SetStateAction<TaskType | undefined>>,
  editedTask: TaskType | undefined
}

export function Task( { task, setEditedTask, editedTask } : TaskComponentType) {

  const { setTasks } = useContext(TasksContext);
  const { _id } = task;
  const [ edit, setEdit ] = useState(false);
  const [ tags, setTags ] = useState(task.tags);

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
    setEdit(true);
    return null;
  }

  useEffect(() => {
    if(task !== editedTask)
      setEdit(false);

    if(editedTask === undefined)
      setEdit(false);
  }, [editedTask]);

  return (
    <TaskContainerStyle $action={true}>

      <TaskHeaderContainerStyle>

        <TaskHeaderStyle>
          <TaskTitleStyle><h2>{`${task.title}`}</h2></TaskTitleStyle>
          <TaskTimeSpanStyle><h2>{`${FormatTime(formatedDate)}h - ${FormatTime(timeSpan)}h`}</h2></TaskTimeSpanStyle>
        </TaskHeaderStyle>

        <TaskActionsStyle>
          <ActionStyle>
            <button className="edit" onClick={ handleEdit } >
              Editar
            </button>
          </ActionStyle>
          <ActionStyle>
            <button className="delete" onClick={ handleDelete } disabled={edit}>
              Deletar
            </button>
          </ActionStyle>
        </TaskActionsStyle>

      </TaskHeaderContainerStyle>

      <TaskDescriptionStyle>
        <p>{`${task.description}`}</p>
      </TaskDescriptionStyle>

      {
        !edit ?
          <TaskTagsStyle>
            {tags.map((tag, i) => (
              <Tag tag={tag} setTags={setTags} key={i} />
            ))}
            <TagForm task={task} setTags={setTags}/>
          </TaskTagsStyle>
        :
          <TaskTagsEdition>
            <p>editando</p><div className="loader"/>
          </TaskTagsEdition>
      }

    </TaskContainerStyle>
  );
}


