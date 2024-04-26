import { Request, Response } from "express";

import { Task } from "../../models/Task";

export async function createTask(req: Request, res: Response) {

  try {

    // const { tags } = req.body;

    const task = await Task.create({
      ...req.body,
      //se fosse necessario um ternario, mas como é um array simples e nao de objetos, nao usei JSON.parse, que poderia retornar alguma excecao
      // tags: tags ? tags : [],
    });

    res.status(201).json(task);


  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}
