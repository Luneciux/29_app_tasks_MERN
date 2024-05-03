import { TagType } from "./Tag";

export interface TaskType {
  title: string,
  date: string,
  description: string,
  tags: TagType[];
}
