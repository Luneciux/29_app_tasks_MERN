import { TagType } from "./Tag";

export interface TaskType {
  _id?: string,
  title: string,
  date: string,
  description: string,
  timeSpanHours: string,
  tags: TagType[];
  userId: string
}
