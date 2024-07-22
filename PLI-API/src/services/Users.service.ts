import { Request, Response } from "express";
import {User} from "../Interface";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

// CREATE USER
export async function createUser(req: Request, res: Response) {
  try {
    const datas: User = req.body;
    const hash = await bcrypt.hash(datas.password, 10)

    const QueryResult = await prisma.user.create({
      data: {
        lastName: datas.lastName,
        firstName: datas.firstName,
        email: datas.email,
        password: hash,
        adress: datas.adress,
        avatarUrl: datas.avatarUrl,
      },
    });
    res.send(JSON.stringify(QueryResult, null, 2));
  } catch (error) {
    res.send("User not create");
    console.log(error);
  }
}

export async function updateUser(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const datas: User = req.body;
      const hash = await bcrypt.hash(datas.password, 10);
  
      await prisma.user.update({
        data: {
            lastName: datas.lastName,
            firstName: datas.firstName,
            email: datas.email,
            password: hash,
            adress: datas.adress,
            avatarUrl: datas.avatarUrl,
        },
        where: { id },
      });
      const QueryResult = await prisma.user.findUnique({ where: { id } });
      res.send(JSON.stringify(QueryResult, null, 2));
    } catch (error) {
      res.send("User has not been updated");
    }
  }

  // DELETE USER
export async function deleteUser(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      await prisma.user.delete({
        where: { id },
      });
      res.send("User delete");
    } catch (error) {
      res.send("User not delete");
    }
  }