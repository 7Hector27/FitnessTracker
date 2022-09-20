import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
const prisma = new PrismaClient();

const test = async () => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync('password', salt);
  await prisma.user.deleteMany({});
  // const user = await prisma.user.create({
  //   data: {
  //     name: 'hector',
  //     email: 'hector@gmail.com',
  //     password: hash,
  //   },
  // });
};
test()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect;
  });
