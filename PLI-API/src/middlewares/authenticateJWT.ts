import * as dotenv from "dotenv";
import { Request, Response } from "express";

const jwt = require("jsonwebtoken");

dotenv.config();

/* this function checked authentication of token, else it's show error message */
export default function authenticateJWT(
  req: Request,
  res: Response,
  next: Function
) {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SIGN_SECRET, (err: any) => {
      console.log(err);

      if (err) {
        res.sendStatus(403);
      } else {
        next();
      }
    });
  } else {
    res.sendStatus(401);
  }
}