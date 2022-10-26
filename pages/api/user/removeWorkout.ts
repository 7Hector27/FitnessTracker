import type { NextApiRequest, NextApiResponse } from 'next';
import { validateRoute } from '../../../lib/auth/middleware';
import { prisma } from '../../../lib/prisma';

const removeWorkout = validateRoute(
  async (req: NextApiRequest, res: NextApiResponse, user) => {
    const { id } = req.body;
    if (req.method === 'DELETE') {
      const deleteWorkout = await prisma.workout.delete({
        where: { id: id },
      });

      return res.send(deleteWorkout);
    }
  }
);

export default removeWorkout;
