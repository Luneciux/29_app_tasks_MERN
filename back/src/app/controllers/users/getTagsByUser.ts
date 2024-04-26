import { Request, Response } from "express";

import { Tag } from "../../models/Tag";

export async function getTagsByUser(req: Request, res: Response) {
  try {

    const { userId } = req.params;

    const tags = await Tag.find().where("userId").equals( userId );
    res.status(200).json(tags);


  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}
