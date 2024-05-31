import { TagStyle } from "./styles";
import { TagType } from "../../types/Tag";
import { SetStateAction } from "react";
import { DeleteTag } from "../../utils/Api";

interface TagComponentType {
  tag: TagType,
  setTags: React.Dispatch<SetStateAction<TagType[]>>
}

export function Tag({ tag, setTags } : TagComponentType) {

  const { title, _id } = tag;

  function deleteTagAndUpdateList () {
    setTags(prevTags => prevTags.filter((e) => e._id !== _id));
    return null;
  }

  async function handleDelete () {
    await DeleteTag(_id).then(deleteTagAndUpdateList());
  }

  return (
    <TagStyle onClick={handleDelete}>
      <p>{title}</p>
      <span className="material-symbols-outlined">
        close
      </span>
    </TagStyle>
  );
}
