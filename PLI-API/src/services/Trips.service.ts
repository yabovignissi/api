import { PrismaClient } from "@prisma/client";
import {Trips} from "../Interface";
import { Request, Response } from "express";
const prisma = new PrismaClient();



export async function createTrip(req: Request, res: Response) {
  try {
    const datas: Trips = req.body;

    const QueryResult = await prisma.trip.create({
      data: {
        userId: datas.userId,
        title: datas.title,
        description: datas.description,
        startDate: datas.startDate,
        endDate: datas.endDate,
      },
    });
    res.send(JSON.stringify(QueryResult, null, 2));
  } catch (error) {
    res.send("Trip not create");
    console.log(error);
  }
}



export async function updateTrip(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    const datas: Trips = req.body;


    await prisma.trip.update({
      data: {
        userId: datas.userId,
        title: datas.title,
        description: datas.description,
        startDate: datas.startDate,
        endDate: datas.endDate,
      },
      where: { id },
    });
    const QueryResult = await prisma.trip.findUnique({ where: { id } });
    res.send(JSON.stringify(QueryResult, null, 2));
  } catch (error) {
    res.send("Trip has not been updated");
  }
}

export async function deleteTrip(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    await prisma.trip.delete({
      where: { id },
    });
    res.send("Trip delete");
  } catch (error) {
    res.send("Trip not delete");
  }
}
