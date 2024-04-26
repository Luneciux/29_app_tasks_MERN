import { Request, Response } from "express";

import { Tag } from "../../models/Tag";

export async function getTags(req: Request, res: Response) {
  try {
    const tags = await Tag.find();

    res.status(200).json(tags);


  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}
