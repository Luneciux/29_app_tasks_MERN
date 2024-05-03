import { TagStyle } from "./styles";
import { TagType } from "../../types/Tag";

export function Tag(props: TagType) {
  return (
    <TagStyle>
      <p>{props.title}</p>
      <span className="material-symbols-outlined">
        close
      </span>
    </TagStyle>
  );
}
