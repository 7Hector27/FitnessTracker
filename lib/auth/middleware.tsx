import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import prisma from '../prisma';

interface JwtPayload {
  id: string;
}

export const validateRoute = (handler: NextApiHandler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const { AUTH_TOKEN: token } = req.cookies;

    //if no token exists throw error
    if (!token) {
      return res.status(401).json({
        error: [
          {
            message: `Unauthorized`,
            code: 401,
          },
        ],
      });
    }

    //if token provided is not valid throw error
    try {
      const { id } = jwt.verify(
        token,
        process.env.SECRET as string
      ) as JwtPayload;

      //query user using id from token payload
      const user = await prisma.user.findUnique({
        where: {
          id,
        },
      });

      //if user requesting doesn't match id in payload, throw error
      if (!user) {
        return res.status(401).json({
          error: [
            {
              message: `Unauthorized`,
              code: 401,
            },
          ],
        });
      }
      return handler(req, res, user);
    } catch (error) {
      return res.status(401).json({
        error: [
          {
            message: `Unauthorized`,
            code: 401,
          },
        ],
      });
    }
  };
};
