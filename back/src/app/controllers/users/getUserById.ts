import { Request, Response } from "express";

import { User } from "../../models/User";

export async function getUserById(req: Request, res: Response) {
  try {

    const { userId } = req.params;

    const users = await User.find().where("_id").equals( userId );
    res.status(200).json(users);


  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}
