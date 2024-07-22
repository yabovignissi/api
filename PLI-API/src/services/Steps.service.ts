import { PrismaClient } from "@prisma/client";
import {Steps} from "../Interface";
import { Request, Response } from "express";
const prisma = new PrismaClient();



export async function createStep(req: Request, res: Response) {
  try {
    const datas: Steps = req.body;

    const QueryResult = await prisma.step.create({
      data: {
        tripId: datas.tripId,
        stepDate: datas.stepDate,
        locationLat: datas.locationLat,
        locationLong: datas.locationLong,
        description: datas.description,
      },
    });
    res.send(JSON.stringify(QueryResult, null, 2));
  } catch (error) {
    res.send("Steps not create");
    console.log(error);
  }
}



export async function updateStep(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    const datas: Steps = req.body;


    await prisma.step.update({
      data: {
        tripId: datas.tripId,
        stepDate: datas.stepDate,
        locationLat: datas.locationLat,
        locationLong: datas.locationLong,
        description: datas.description,
      },
      where: { id },
    });
    const QueryResult = await prisma.step.findUnique({ where: { id } });
    res.send(JSON.stringify(QueryResult, null, 2));
  } catch (error) {
    res.send("Step has not been updated");
  }
}

export async function deleteStep(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    await prisma.step.delete({
      where: { id },
    });
    res.send("Step delete");
  } catch (error) {
    res.send("Step not delete");
  }
}
