import { TagType } from "./Tag";

export interface TaskType {
  _id: string,
  title: string,
  date: string,
  description: string,
  tags: TagType[];
}
