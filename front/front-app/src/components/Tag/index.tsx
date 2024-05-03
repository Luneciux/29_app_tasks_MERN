import { TagStyle } from "./styles";

interface TagProps {
  title: string
}

export function Tag(props: TagProps) {
  return (
    <TagStyle>
      <p>{props.title}</p>
      <span className="material-symbols-outlined">
        close
      </span>
    </TagStyle>
  );
}
