import { Request, Response } from "express";

import { Task } from "../../models/Task";

export async function changeTask(req: Request, res: Response) {
  try {

    const { taskId } = req.params;
    const update = { ...req.body };
    await Task.findByIdAndUpdate( taskId,  update );
    res.sendStatus(201);

  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}
