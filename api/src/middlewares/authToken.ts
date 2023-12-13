import Jwt from "jsonwebtoken";
import { Admin } from "../models/Admin";
import { NextFunction, Request, Response } from "express";
import { IPayload } from "../interfaces/IPayload";
const { TOKEN } = process.env

export const authToken = async (req: Request, res: Response, next: NextFunction) => {

  if (req.headers.authorization) {

    try {
      const token = req.headers.authorization.split(" ")[1]

      const payload = Jwt.verify(token, TOKEN as string) as IPayload

      await Admin.findOne({
        where: { email: payload.id },
      })

      return next()

    } catch (error) {
      return res.status(400).json({ message: "Sesion o token invalido" })
    }
  }
  return next()
}
