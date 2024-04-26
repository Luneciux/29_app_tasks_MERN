import { Request, Response } from "express";

import { Tag } from "../../models/Tag";

export async function getTagById(req: Request, res: Response) {
  try {

    const { tagId } = req.params;

    console.log(tagId);

    const tags = await Tag.find().where("_id").equals( tagId );
    res.status(200).json(tags);


  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}
