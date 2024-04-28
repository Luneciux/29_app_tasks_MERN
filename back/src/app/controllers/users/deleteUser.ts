import { Request, Response } from "express";

import { User } from "../../models/User";
import { Task } from "../../models/Task";
import { Tag } from "../../models/Tag";

export async function deleteUser(req: Request, res: Response) {

  try {

    const { userId } = req.params;
    await User.findByIdAndDelete( userId );
    await Task.deleteMany( { userId } );
    await Tag.deleteMany( { userId } );
    res.status(204);


  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}
