import { Request, Response } from "express";

import { Task } from "../../models/Task";

export async function deleteTask(req: Request, res: Response) {

  try {

    const { taskId } = req.params;
    await Task.findByIdAndDelete( taskId );
    res.status(204);


  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}
