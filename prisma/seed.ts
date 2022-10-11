import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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
  const findDays = await prisma.day.findMany({
    where: { userId: '31752c9e-3d3e-40a9-a934-a657d7d47c61' },
  });
  console.log(findDays);

  // const createUser = await prisma.user.create({
  //   data: {
  //     firstName: 'a',
  //     lastName: 'a',
  //     email: 'a',
  //     password: 'a',
  //     workoutSchedule: {
  //       create: {
  //         days: {
  //           create: [
  //             { dayoftheweek: 'Sunday' },
  //             { dayoftheweek: 'Monday' },
  //             { dayoftheweek: 'Tuesday' },
  //             { dayoftheweek: 'Wednesday' },
  //             { dayoftheweek: 'Thursday' },
  //             { dayoftheweek: 'Friday' },
  //             { dayoftheweek: 'Sunday' },
  //           ],
  //         },
  //       },
  //     },
  //   },
  // });
  // const finduser = await prisma.user.findUnique({
  //   where: { email: 'a' },
  // });
  // const workouts = await prisma.day.findMany({
  //   where: { workoutScheduleId: 5 },
  // });
  // console.log(workouts);
  // const updateWorkoutDay = await prisma.day.update({
  //   where: { id: 75 },
  //   data: {
  //     workouts: {
  //       createMany: {
  //         data: [
  //           {
  //             bodyPart: 'waist',
  //             equipment: 'body weight',
  //             gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0001.gif',
  //             name: '3/4 sit-up',
  //             target: 'abs',
  //           },
  //           {
  //             bodyPart: 'waist',
  //             equipment: 'body weight',
  //             gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0001.gif',
  //             name: '3/4 sit-up',
  //             target: 'abs',
  //           },
  //         ],
  //       },
  //     },
  //   },
  // });
};
run()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect;
  });
