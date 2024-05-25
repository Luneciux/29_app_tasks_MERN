import {
  TaskFormContainerStyle,
  TaskFormHeaderContainerStyle,
  TaskFormActionsStyle,
  TaskFormHeaderStyle,
  TaskFormDescriptionStyle,
  ActionStyle
} from "./styles";


import { TaskType } from "../../types/Task";
import { CreateTask } from "../../utils/Api";
import { useContext, useState } from "react";
import { TasksContext, UserContext } from "../../App";


export function TaskForm() {

  const [finishHour, setFinishHour] = useState<string>("00:00");
  const [startHour, setStartHour] = useState<string>("00:00");
  const [description, setDescription] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const handleDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value);
  const handleFinishHours = (e: React.ChangeEvent<HTMLInputElement>) => setFinishHour(e.target.value);
  const handleStartHours = (e: React.ChangeEvent<HTMLInputElement>) => setStartHour(e.target.value) ;
  const handleTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => setTitle(e.target.value) ;

  const { user } = useContext(UserContext);
  const { setTasks } = useContext(TasksContext);


  const newTask: TaskType = {
    title,
    description,
    date: "",
    timeSpanHours: "",
    tags: [],
    userId: ""
  }


  function formatDate (hour: string) {
    const dateHelper = new Date(Date.now());
    let timeBreaker = [];

    timeBreaker = hour.split(":");
    dateHelper.setHours(parseInt(timeBreaker[0]), parseInt(timeBreaker[1]));

    return dateHelper.toISOString();
  }

  function addTaskAndUpdate (taskT: TaskType) {
    if(taskT.title === "")
      return null;

    setStartHour("00:00");
    setFinishHour("00:00");
    setDescription("");
    setTitle("");
    setTasks(prevTasks => [...prevTasks, taskT ]);
  }

  async function handleCreation () {
    if(!user)
      return null;

    newTask.userId = user;
    newTask.date = formatDate(startHour);
    newTask.timeSpanHours = formatDate(finishHour);

    await CreateTask(newTask).then(addTaskAndUpdate(newTask)).catch(e => console.log(e));
  }

  return (
    <TaskFormContainerStyle>
      <TaskFormHeaderContainerStyle>
        <TaskFormHeaderStyle>
          <textarea
            name="text-input-title"
            id="text-input-title"
            className="text-input-title"
            placeholder="Título,"
            cols={20}
            rows={3}
            value={title}
            onChange={handleTitle}
            required={true}
          />

          <input
            type="time"
            name="text-input-date"
            id="text-input-date-1"
            className="text-input-date"
            value={startHour}
            onChange={handleStartHours}
          />

          <span className="time-input-separator">até</span>

          < input
            type="time"
            name="text-input-date-span"
            id="text-input-date-span"
            className="text-input-date"
            step="1800"
            value={finishHour}
            onChange={handleFinishHours}
          />
        </TaskFormHeaderStyle>
        <TaskFormActionsStyle>
          <ActionStyle>

            <button
              className="create"
              onClick={handleCreation}
            >
              Criar
            </button>

          </ActionStyle>
        </TaskFormActionsStyle>
      </TaskFormHeaderContainerStyle>
      <TaskFormDescriptionStyle>

        <textarea
          name="text-input-description"
          id="text-input-description"
          className="text-input-description"
          placeholder="Escreva algo relacionado a task"
          value={description}
          onChange={handleDescription}
          required={true}
        />

      </TaskFormDescriptionStyle>
    </TaskFormContainerStyle>
  );
}
