import { Request, Response } from "express";

import { Task } from "../../models/Task";

export async function getTasks(req: Request, res: Response) {
  try {
    const tasks = await Task.find().populate("tags");

    res.status(200).json(tasks);


  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}
