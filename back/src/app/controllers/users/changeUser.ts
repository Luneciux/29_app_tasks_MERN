import { Request, Response } from "express";

import { User } from "../../models/User";

export async function changeUser(req: Request, res: Response) {
  try {

    const { userId } = req.params;
    const update = {...req.body};
    await User.findByIdAndUpdate( userId,  update );
    res.sendStatus(204);


  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}
