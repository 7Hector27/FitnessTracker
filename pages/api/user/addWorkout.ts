import type { NextApiRequest, NextApiResponse } from 'next';
import { validateRoute } from '../../../lib/auth/middleware';
import { prisma } from '../../../lib/prisma';

const addWorkout = validateRoute(
  async (req: NextApiRequest, res: NextApiResponse, user) => {
    const { id, newWorkouts } = req.body;
    if (req.method === 'POST') {
      const finduser = await prisma.day.update({
        where: { id: id },
        data: {
          workouts: {
            deleteMany: {},
            createMany: {
              data: [...newWorkouts],
            },
          },
        },
      });

      return res.send(finduser);
    }
  }
);

export default addWorkout;
