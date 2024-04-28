import { Request, Response } from "express";

import { Task } from "../../models/Task";

export async function getTasksByUser(req: Request, res: Response) {
  try {

    const { userId } = req.params;

    //populando as tags para poder usar quando for mostrar no front
    const tasks = await Task.find().where("userId").equals( userId ).populate("tags.tagId");
    res.status(200).json(tasks);


  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}
