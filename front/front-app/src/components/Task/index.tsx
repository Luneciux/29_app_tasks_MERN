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
import { useContext } from "react";
import { TasksContext } from "../../App";

export function Task(task : TaskType) {

  const { tasks, setTasks } = useContext(TasksContext);
  const { _id } = task;

  function deleteTaskAndUpdateList () {
    const newTasks = tasks.filter((e) => e._id !== _id);
    setTasks(newTasks);
    return null;
  }

  async function handleDelete () {
    await DeleteTask(_id).then(deleteTaskAndUpdateList()).catch(e => console.log(e));
  }

  const formatedDate = new Date(task.date);
  const timeSpan = new Date(task.timeSpanHours);

  function startTime () {
    return `${ formatedDate.getHours()  < 10 ? '0' : '' }${ formatedDate.getHours()}:${ (formatedDate.getMinutes() < 10 ? '0' : '') }${ formatedDate.getMinutes() }h `;
  }

  function finishTime () {
    timeSpan.setHours(timeSpan.getHours());
    return `${ timeSpan.getHours()  < 10 ? '0' : '' }${ timeSpan.getHours()}:${ (timeSpan.getMinutes() < 10 ? '0' : '') }${ timeSpan.getMinutes() }h `;
  }

  return (

    <TaskContainerStyle>

      <TaskHeaderContainerStyle>

        <TaskHeaderStyle>
          <TaskTitleStyle><h2>{`${task.title}`}</h2></TaskTitleStyle>
          <TaskTimeSpanStyle><h2>{`${startTime()} - ${finishTime()}`}</h2></TaskTimeSpanStyle>
        </TaskHeaderStyle>

        <TaskActionsStyle>
          <ActionStyle>
            <p className="edit">Editar</p>
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
