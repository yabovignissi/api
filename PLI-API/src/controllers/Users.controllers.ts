import { createUser,updateUser,deleteUser } from "../services/Users.service";
import { Request, Response } from "express";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


export async function getAll(req: Request, res: Response) {
    const QueryResult = await prisma.user.findMany();
    res.send(JSON.stringify(QueryResult, null, 2));
  }
  
  // GET BY ID
  export async function getById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const QueryResult = await prisma.user.findUnique({
      where: { id },
    });
    res.send(JSON.stringify(QueryResult, null, 2));
  }
  
// CREATE USER
export async function register(req: Request, res: Response) {
  try {
    await createUser(req, res);
  } catch (error) {
    res.send("User not create");
    console.log(error);
  }
}
// UPDATE USER
export async function updateById(req: Request, res: Response) {
    try {
      await updateUser(req, res);
    } catch (error) {
      res.send("User has been updated");
    }
  }
  
  // DELETE USER
  export async function deleteById(req: Request, res: Response) {
    try {
      await deleteUser(req, res);
    } catch (error) {
      res.send("User not delete");
      console.log(error);
    }
  }

export async function login(req: Request, res: Response) {
    const body = req.body;
  
    const QueryResult = await prisma.user.findUnique({
      where: { email: body.email },
    });
  
    if (QueryResult) {
      bcrypt.compare(body.password, QueryResult.password).then((valid: any) => {
        if (!valid) {
          res.status(404).send("error: email or password incorrect");
        } else {
          const acces = jwt.sign(
            {
              email: QueryResult.email,
              id: QueryResult.id,
            },
            process.env.JWT_SIGN_SECRET,
            {
              expiresIn: "24h",
            }
          );
          // console.log(acces)
          const result = { token: acces };
          return res.status(200).json(result);
        }
      });
    } else {
      res.status(404).send("error: email or password incorrect");
    }
  }