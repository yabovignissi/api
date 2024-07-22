import { Request, Response } from "express";
import  {createStep, updateStep, deleteStep} from "../services/Steps.service";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


export async function getAll(req: Request, res: Response) {
  const QueryResult = await prisma.step.findMany();
  res.send(JSON.stringify(QueryResult, null, 2));
}


export async function getById(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const QueryResult = await prisma.step.findUnique({
    where: { id },
  });
  res.send(JSON.stringify(QueryResult, null, 2));
}


export async function create(req: Request, res: Response) {
  try {
    await createStep(req, res);
  } catch (error) {
    res.send("Step not create");
    console.log(error);
  }
}
export async function updateById(req: Request, res: Response) {
  try {
    await updateStep(req, res);
  } catch (error) {
    res.send("step has been updated");
  }
}

export async function deleteById(req: Request, res: Response) {
  try {
    await deleteStep(req, res);
  } catch (error) {
    res.send("step not delete");
    console.log(error);
  }
}
