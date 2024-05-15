import { Request, Response } from "express";

import { Task } from "../../models/Task";

export async function getTaskById(req: Request, res: Response) {
  try {

    const { taskId } = req.params;

    const tasks = await Task.find().where("_id").equals( taskId ).populate("tags");
    res.status(200).json(tasks);


  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}
