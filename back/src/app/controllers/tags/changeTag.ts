import { Request, Response } from "express";

import { Tag } from "../../models/Tag";

export async function changeTag(req: Request, res: Response) {
  try {

    const { tagId } = req.params;
    const update = { ...req.body };
    await Tag.findByIdAndUpdate( tagId,  update );
    res.status(204);


  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}
