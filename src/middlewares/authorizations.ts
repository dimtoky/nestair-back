import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


interface CustomRequest {
 token: string;
}

interface CustomDecoded {
    userId: number;
    iat: number;
    exp: number
   }

export const authorize = async (req: Request, res: Response, next: NextFunction) => {

 try {
    if (req.headers.authorization) {
        const  crq  : CustomRequest = {token : req.headers.authorization};
        const decoded : string | JwtPayload = jwt.verify(crq.token, process.env.SECRETKEY || '');
        const decodedF: CustomDecoded = JSON.parse(Buffer.from(crq.token.split('.')[1], 'base64').toString());
        if (decoded) {

                next();

        }
    }
 } catch (err) {
   res.status(401).send("false");
 }
};

export const authorizeAdmin = async (req: Request, res: Response, next: NextFunction) => {

    try {
       if (req.headers.authorization) {
           const  crq  : CustomRequest = {token : req.headers.authorization};
           const decoded : string | JwtPayload = jwt.verify(crq.token, process.env.SECRETKEY || '');
           const decodedF: CustomDecoded = JSON.parse(Buffer.from(crq.token.split('.')[1], 'base64').toString());
           if (decoded) {
               const user = await prisma.users.findFirst({
                   where: {
                       id: decodedF.userId
                   }
               })

               if (!user) {
                   return res.status(401).json({ error: 'User not found' })
               }

               if (user.role === 1) {
                   console.log(user.email);
                   next();
               } else {
                   return res.status(401).json({ error: 'Not an admin' })

               }
           }
       }
    } catch (err) {
      res.status(401).send("false");
    }
   };