import { Router } from "express";

import { createUser } from "./app/controllers/users/createUser";
import { getUsers } from "./app/controllers/users/getUsers";
import { getUserById } from "./app/controllers/users/getUserById";
import { getTagsByUser } from "./app/controllers/users/getTagsByUser";
import { getTasksByUser } from "./app/controllers/users/getTasksByUser";

import { createTask } from "./app/controllers/tasks/createTask";
import { getTasks } from "./app/controllers/tasks/getTasks";
import { getTaskById } from "./app/controllers/tasks/getTaskById";

import { createTag } from "./app/controllers/tags/createTag";
import { getTags } from "./app/controllers/tags/getTags";
import { getTagById } from "./app/controllers/tags/getTagById";


export const router = Router();

//USER

//GET USERS
router.get("/users", getUsers);

//GET USER BY ID
router.get("/users/:userId", getUserById);

//CREATE USER
router.post("/users", createUser);

//UPDATE USER
router.patch("/users/:userId", (req, res) => {
  res.send("OK");
});

//DELETE USER
router.delete("/users/:userId", (req, res) => {
  res.send("OK");
});



//TASK

//GET TASKS
router.get("/tasks", getTasks);

//GET TASK BY ID
router.get("/tasks/:taskId", getTaskById);

//GET TASKS BY USER
router.get("/users/:userId/tasks", getTasksByUser);

//CREATE TASK
router.post("/tasks", createTask);

//UPDATE TASK
router.patch("/tasks/:taskId", (req, res) => {
  res.send("OK");
});

//DELETE TASK
router.delete("/tasks/:taskId", (req, res) => {
  res.send("OK");
});



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
router.patch("/tags/:tagId", (req, res) => {
  res.send("OK");
});

//DELETE TAG
router.delete("/tags/:tagId", (req, res) => {
  res.send("OK");
});

