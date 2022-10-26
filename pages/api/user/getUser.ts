// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { validateRoute } from '../../../lib/auth/middleware';
import { prisma } from '../../../lib/prisma';

const getUser = validateRoute(
  async (req: NextApiRequest, res: NextApiResponse, user) => {
    if (req.method === 'GET') {
      const finduser = await prisma.user.findUnique({
        where: { id: user.id },
        include: {
          workoutSchedule: {
            include: {
              workouts: {},
            },
          },
        },
      });

      return res.send(finduser);
    }
  }
);

export default getUser;
