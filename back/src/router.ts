import { Router } from "express";

import { createUser } from "./app/controllers/users/createUser";
import { getUsers } from "./app/controllers/users/getUsers";
import { getUserById } from "./app/controllers/users/getUserById";
import { getTagsByUser } from "./app/controllers/users/getTagsByUser";
import { getTasksByUser } from "./app/controllers/users/getTasksByUser";
import { changeUser } from "./app/controllers/users/changeUser";
import { deleteUser } from "./app/controllers/users/deleteUser";

import { createTask } from "./app/controllers/tasks/createTask";
import { getTasks } from "./app/controllers/tasks/getTasks";
import { getTaskById } from "./app/controllers/tasks/getTaskById";
import { changeTask } from "./app/controllers/tasks/changeTask";
import { deleteTask } from "./app/controllers/tasks/deleteTask";

import { createTag } from "./app/controllers/tags/createTag";
import { getTags } from "./app/controllers/tags/getTags";
import { getTagById } from "./app/controllers/tags/getTagById";
import { changeTag } from "./app/controllers/tags/changeTag";
import { deleteTag } from "./app/controllers/tags/deleteTag";


export const router = Router();

//USER
router.get("/users", getUsers);
router.get("/users/:userId", getUserById);
router.post("/users", createUser);
router.patch("/users/:userId", changeUser);
router.delete("/users/:userId", deleteUser);

//TASK
router.get("/tasks", getTasks);
router.get("/tasks/:taskId", getTaskById);
router.get("/users/:userId/tasks", getTasksByUser);
router.post("/tasks", createTask);
router.patch("/tasks/:taskId", changeTask);
router.delete("/tasks/:taskId", deleteTask);

//TAG
router.get("/tags", getTags);
router.get("/tags/:tagId", getTagById);
router.get("/users/:userId/tags", getTagsByUser);
router.post("/tags", createTag);
router.patch("/tags/:tagId", changeTag);
router.delete("/tags/:tagId", deleteTag);

