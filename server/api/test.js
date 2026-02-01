import prisma from '~/server/utils/prisma';

async function main() {
  try {
    const users = await prisma.users.findMany();
    console.log(users);
  } catch (err) {
    console.error('Prisma connection failed:', err);
  } finally {
    await prisma.$disconnect();
  }
}

main();
