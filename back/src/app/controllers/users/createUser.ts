import { Request, Response } from "express";

import { User } from "../../models/User";

export async function createUser(req: Request, res: Response) {

  try {

    const user = await User.create({ ...req.body });
    res.status(201).json(user);

  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}
