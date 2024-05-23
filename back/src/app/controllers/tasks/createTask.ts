import { Request, Response } from "express";

import { Task } from "../../models/Task";

export async function createTask(req: Request, res: Response) {

  try {

    const task = await Task.create({
      ...req.body,
    });

    res.status(201).json(task);


  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}
