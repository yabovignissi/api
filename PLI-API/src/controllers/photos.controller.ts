import { Request, Response } from "express";
import  {createPhoto, updatePhoto, deletePhoto} from "../services/photos.service";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


export async function getAll(req: Request, res: Response) {
  const QueryResult = await prisma.photo.findMany();
  res.send(JSON.stringify(QueryResult, null, 2));
}


export async function getById(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const QueryResult = await prisma.photo.findUnique({
    where: { id },
  });
  res.send(JSON.stringify(QueryResult, null, 2));
}


export async function create(req: Request, res: Response) {
  try {
    await createPhoto(req, res);
  } catch (error) {
    res.send("Photo not create");
    console.log(error);
  }
}
export async function updateById(req: Request, res: Response) {
  try {
    await updatePhoto(req, res);
  } catch (error) {
    res.send("Photo has been updated");
  }
}

export async function deleteById(req: Request, res: Response) {
  try {
    await deletePhoto(req, res);
  } catch (error) {
    res.send("Photo not delete");
    console.log(error);
  }
}
