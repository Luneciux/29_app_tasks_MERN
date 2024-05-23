import { useState } from "react";
import { TaskType } from "../../types/Task";
import { api } from "../../utils/api";

import {
  TaskFormContainerStyle,
  TaskFormHeaderContainerStyle,
  TaskFormActionsStyle,
  TaskFormHeaderStyle,
  TaskFormDescriptionStyle,
  ActionStyle
} from "./styles";


export function TaskForm() {

  const [startHour, setStartHour] = useState<string>("00:00");
  const [finishHour, setFinishHour] = useState<string>("00:00");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleStartHours = (e: React.ChangeEvent<HTMLInputElement>) => setStartHour(e.target.value) ;
  const handleFinishHours = (e: React.ChangeEvent<HTMLInputElement>) => setFinishHour(e.target.value);
  const handleTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => setTitle(e.target.value) ;
  const handleDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value);


  async function handleCreation () {

    let timeBreaker = [];

    const date = new Date(Date.now());
    timeBreaker = startHour.split(":");
    date.setHours(parseInt(timeBreaker[0]), parseInt(timeBreaker[1]));

    const timeSpanHours = new Date(Date.now());
    timeBreaker = finishHour.split(":");
    timeSpanHours.setHours(parseInt(timeBreaker[0]), parseInt(timeBreaker[1]));

    // const {
    //   user,
    //   setUser
    // } = useContext(UserContext);

    const newTask: TaskType = {
      title,
      description,
      date: date.toISOString(),
      timeSpanHours: timeSpanHours.toISOString(),
      tags: [],
      userId: ""
    };

    console.log(newTask);

    await api.post("/tasks", newTask).catch(e => console.log(e));
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
        />

      </TaskFormDescriptionStyle>
    </TaskFormContainerStyle>
  );
}
