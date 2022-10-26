import { prisma } from '../lib/prisma';

const run = async () => {
  // const createUser = await prisma.user.create({
  //   data: {
  //     firstName: 'a',
  //     lastName: 'a',
  //     email: 'a',
  //     password: 'a',
  //     day: {
  //       create: [
  //         { dayoftheweek: 'Sunday' },
  //         { dayoftheweek: 'Monday' },
  //         { dayoftheweek: 'Tuesday' },
  //         { dayoftheweek: 'Wednesday' },
  //         { dayoftheweek: 'Thursday' },
  //         { dayoftheweek: 'Friday' },
  //         { dayoftheweek: 'Sunday' },
  //       ],
  //     },
  //   },
  // });
  // const findDays = await prisma.day.findMany({
  //   where: { userId: '31752c9e-3d3e-40a9-a934-a657d7d47c61' },
  // });
  // console.log(findDays);
  const updateWorkoutDay = await prisma.day.update({
    where: { id: 'ae4a92f7-b92e-4339-9c26-514951ac6401' },
    data: {
      workouts: {
        deleteMany: {},
        createMany: {
          data: [
            {
              bodyPart: 'waist2',
              equipment: 'body weight',
              gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0001.gif',
              name: '3/4 sit-up',
              target: 'abs',
            },
            {
              bodyPart: 'waist2',
              equipment: 'body weight',
              gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0001.gif',
              name: '3/4 sit-up',
              target: 'abs',
            },
            {
              bodyPart: 'waist2',
              equipment: 'body weight',
              gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0001.gif',
              name: '3/4 sit-up',
              target: 'abs',
            },
            {
              bodyPart: 'waist2',
              equipment: 'body weight',
              gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0001.gif',
              name: '3/4 sit-up',
              target: 'abs',
            },
            {
              bodyPart: 'waist2',
              equipment: 'body weight',
              gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0001.gif',
              name: '3/4 sit-up',
              target: 'abs',
            },
            {
              bodyPart: 'waist2',
              equipment: 'body weight',
              gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0001.gif',
              name: '3/4 sit-up',
              target: 'abs',
            },
            {
              bodyPart: 'waist2',
              equipment: 'body weight',
              gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0001.gif',
              name: '3/4 sit-up',
              target: 'abs',
            },
          ],
        },
      },
    },
  });
  // const finduser = await prisma.user.findUnique({
  //   where: { id: 'd4b66182-3ada-4015-a7b5-a71799082cf7' },
  //   include: {
  //     workoutSchedule: {
  //       include: {
  //         workouts: {},
  //       },
  //     },
  //   },
  // });
  // const func = () => {
  //   days.map(async (day) => {
  //     const work = await prisma.workout.findMany({
  //       where: { dayId: day.id },
  //     });
  //     return work;
  //   });
  // };
  // console.log(finduser);
};
run()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect;
  });
