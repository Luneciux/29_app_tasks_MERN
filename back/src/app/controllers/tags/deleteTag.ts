import { Request, Response } from "express";

import { Tag } from "../../models/Tag";

export async function deleteTag(req: Request, res: Response) {

  try {

    const { tagId } = req.params;
    await Tag.findByIdAndDelete( tagId );
    res.status(204);


  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}
