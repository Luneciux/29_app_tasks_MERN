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

//GET USERS
router.get("/users", getUsers);

//GET USER BY ID
router.get("/users/:userId", getUserById);

//CREATE USER
router.post("/users", createUser);

//UPDATE USER
router.patch("/users/:userId", changeUser);

//DELETE USER
router.delete("/users/:userId", deleteUser);



//TASK

//GET TASKS
router.get("/tasks", getTasks);

//GET TASK BY ID
router.get("/tasks/:taskId", getTaskById);

//GET TASKS BY USER
router.get("/users/:userId/tasks", getTasksByUser);

//GET TASKS BY NAME
//ESSA FUNCIONALIDADE SERÁ TRATADA PELO CLIENTE


//CREATE TASK
router.post("/tasks", createTask);

//UPDATE TASK
router.patch("/tasks/:taskId", changeTask);

//DELETE TASK
router.delete("/tasks/:taskId", deleteTask);



//TAG

//GET TAGS
router.get("/tags", getTags);

//GET TAG BY ID
router.get("/tags/:tagId", getTagById);

//GET TAG BY USER ID
router.get("/users/:userId/tags", getTagsByUser);

//CREATE TAG
router.post("/tags", createTag);

//UPDATE TAG
router.patch("/tags/:tagId", changeTag);

//DELETE TAG
router.delete("/tags/:tagId", deleteTag);

