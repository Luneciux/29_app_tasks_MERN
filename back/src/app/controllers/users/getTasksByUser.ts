import { Request, Response } from "express";

import { Task } from "../../models/Task";

export async function getTasksByUser(req: Request, res: Response) {
  try {

    const { userId } = req.params;

    const tasks = await Task.find().where("userId").equals( userId );
    res.status(200).json(tasks);


  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}
