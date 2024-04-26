import { Request, Response } from "express";

import { Tag } from "../../models/Tag";

export async function createTag(req: Request, res: Response) {

  try {
    const tag = await Tag.create({ ...req.body });

    res.status(201).json(tag);


  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}
