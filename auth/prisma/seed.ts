/* eslint-disable no-console */
import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

const defaultUsers: User[] = [
  {
    userId: '836342ef-5c21-4eeb-a0eb-82c2a2cfb88a',
    email: 'pratheek@gmail.com',
    password: '$2a$10$277bJPr/a9nG9K9umZb9aef47NsdAqf.Ia5IosRQvJG1EvsOMtUZe',
    firstName: 'Pratheek',
    lastName: 'Senevirathne',
    phoneNumber: '0777483404',
    addressLine1: '200/4B, Some Lane',
    addressLine2: 'Some Road, Colombo.',
    role: 'BUYER',
    initialLogIn: false,
  },
];

function insertUsers() {
  defaultUsers.forEach(async (userDetails) => {
    try {
      const result = await prisma.user.upsert({
        where: { email: userDetails.email },
        update: {},
        create: userDetails,
      });

      console.info('User created: ', result.email);
    } catch {
      console.error('Error creating user: ', userDetails.email);
    }
  });
}

async function main() {
  // Insert users asynchronously
  insertUsers();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
