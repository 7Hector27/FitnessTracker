// const addWorkout = async () => {
//     // await prisma.user.deleteMany();
//     // const user1 = await prisma.user.findUnique({
//     //   where: {
//     //     email: 'aldo1@gmail.com',
//     //   },
//     // });
//     // const updateWorkoutSchedule = await prisma.user.update({
//     //   where: { id: user1?.id },
//     //   data: {
//     //     WorkoutSchedule: {
//     //       upsert: {
//     //         create: {
//     //           days: {
//     //             create: {
//     //               dayofTheWeek: 'Tuesday',
//     //               workouts: {
//     //                 create: {
//     //                   bodyPart: 'waist',
//     //                   equipment: 'body weight',
//     //                   gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0001.gif',
//     //                   id: '0001',
//     //                   name: '3/4 sit-up',
//     //                   target: 'abs',
//     //                 },
//     //               },
//     //             },
//     //           },
//     //         },
//     //         update: {
//     //           days: {
//     //             create: {
//     //               dayofTheWeek: 'Wednesday',
//     //               workouts: {
//     //                 create: {
//     //                   bodyPart: 'waist',
//     //                   equipment: 'body weight',
//     //                   gifUrl: 'http://d205bpvrqc9yn1.cloudfront.net/0001.gif',
//     //                   id: '0001',
//     //                   name: '3/4 sit-up',
//     //                   target: 'abs',
//     //                 },
//     //               },
//     //             },
//     //           },
//     //         },
//     //       },
//     //     },
//     //   },
//     // });

//     const user1 = await prisma.user.findUnique({
//       where: {
//         email: 'hector@gmail.com',
//       },
//       // data: {
//       //   firstName: 'hector',
//       //   lastName: 'carbajal',
//       //   email: 'h@gmail.com',
//       //   password: 'c',
//       // },
//     });

//     console.log('hi');

//     addWorkout()
//       .catch((e) => {
//         console.error(e);
//         process.exit(1);
//       })
//       .finally(async () => {
//         await prisma.$disconnect;
//       });
