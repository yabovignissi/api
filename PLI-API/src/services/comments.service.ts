import { PrismaClient } from "@prisma/client";
import {Comments} from "../Interface";
import { Request, Response } from "express";
const prisma = new PrismaClient();



export async function createComments(req: Request, res: Response) {
  try {
    const datas: Comments = req.body;

    const QueryResult = await prisma.comment.create({
      data: {
        userId: datas.userId,
        stepId: datas.stepId,
        comment: datas.comment,
      },
    });
    res.send(JSON.stringify(QueryResult, null, 2));
  } catch (error) {
    res.send("Comments not create");
    console.log(error);
  }
}



export async function updateComment(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    const datas: Comments = req.body;


    await prisma.comment.update({
      data: {
        userId: datas.userId,
        stepId: datas.stepId,
        comment: datas.comment,
      },
      where: { id },
    });
    const QueryResult = await prisma.comment.findUnique({ where: { id } });
    res.send(JSON.stringify(QueryResult, null, 2));
  } catch (error) {
    res.send("Comment has not been updated");
  }
}

export async function deleteComment(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    await prisma.comment.delete({
      where: { id },
    });
    res.send("Comment delete");
  } catch (error) {
    res.send("Comment not delete");
  }
}
