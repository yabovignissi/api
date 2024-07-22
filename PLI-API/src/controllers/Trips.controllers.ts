import { Request, Response } from "express";
import  {createTrip, updateTrip, deleteTrip} from "../services/Trips.service";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


export async function getAll(req: Request, res: Response) {
  const QueryResult = await prisma.trip.findMany();
  res.send(JSON.stringify(QueryResult, null, 2));
}


export async function getById(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const QueryResult = await prisma.trip.findUnique({
    where: { id },
  });
  res.send(JSON.stringify(QueryResult, null, 2));
}


export async function create(req: Request, res: Response) {
  try {
    await createTrip(req, res);
  } catch (error) {
    res.send("Trip not create");
    console.log(error);
  }
}
export async function updateById(req: Request, res: Response) {
  try {
    await updateTrip(req, res);
  } catch (error) {
    res.send("Trip has been updated");
  }
}

export async function deleteById(req: Request, res: Response) {
  try {
    await deleteTrip(req, res);
  } catch (error) {
    res.send("Trip not delete");
    console.log(error);
  }
}
