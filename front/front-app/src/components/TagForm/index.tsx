import {  SetStateAction, useContext, useState } from "react";
import { CreateTag } from "../../utils/Api";
import { TagFormContainerStyle } from "./styles";
import { UserContext } from "../../App";
import { TagType } from "../../types/Tag";
import { TaskType } from "../../types/Task";

interface TagFormType {
  task: TaskType,
  setTags: React.Dispatch<SetStateAction<TagType[]>>
}

export function TagForm({ task, setTags } : TagFormType) {

  const [ edit, setEdit ] = useState(false);
  const [ title, setTitle ] = useState("");

  const { user } = useContext(UserContext);

  const newTag: TagType = {
    title,
    userId: user ? user : "",
  }


  function handleEdition () { setEdit(true) }

  const handleCreation = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key == "Enter"){
      CreateTag(newTag, task, setTags);
      setEdit(false);
      setTitle("");
    }
  }

  const handleClickCreation = () => {
    CreateTag(newTag, task, setTags);
    setEdit(false);
    setTitle("");
  }

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <TagFormContainerStyle>
      {
        edit ?
          <>
            <input
              type="text"
              value={ title }
              onChange={ handleTitle }
              onKeyDown={ handleCreation }
              placeholder="nova tag"
            />
            <span className="material-symbols-outlined" onClick={ handleClickCreation }>
              keyboard_return
            </span>
          </>
        :
          <p onClick={ handleEdition }>
            nova tag
          </p>
      }
    </TagFormContainerStyle>
  );
}
