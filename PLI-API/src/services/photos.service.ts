import { PrismaClient } from "@prisma/client";
import {Photos} from "../Interface";
import { Request, Response } from "express";
const prisma = new PrismaClient();



export async function createPhoto(req: Request, res: Response) {
  try {
    const datas: Photos = req.body;

    const QueryResult = await prisma.photo.create({
      data: {
        stepId: datas.stepId,
        photoUrl: datas.photoUrl,
        caption: datas.caption,
      },
    });
    res.send(JSON.stringify(QueryResult, null, 2));
  } catch (error) {
    res.send("Photo not create");
    console.log(error);
  }
}



export async function updatePhoto(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    const datas: Photos = req.body;


    await prisma.photo.update({
      data: {
        stepId: datas.stepId,
        photoUrl: datas.photoUrl,
        caption: datas.caption,
      },
      where: { id },
    });
    const QueryResult = await prisma.photo.findUnique({ where: { id } });
    res.send(JSON.stringify(QueryResult, null, 2));
  } catch (error) {
    res.send("Photo has not been updated");
  }
}

export async function deletePhoto(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    await prisma.photo.delete({
      where: { id },
    });
    res.send("Photo delete");
  } catch (error) {
    res.send("Photo not delete");
  }
}
