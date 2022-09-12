import { Role } from '@prisma/client';
import bcrypt from 'bcryptjs';
import prisma from '../../prisma/prisma-client';
import HttpException from '../models/http-exception.model';
import { RegisterInput } from '../models/register-input.model';
import { RegisteredUser } from '../models/registered-user.model';
import { User } from '../models/user.model';
import generateToken from '../utils/token.utils';

export async function login(
  email: string,
  password: string
): Promise<RegisteredUser> {
  if (!email) {
    throw new HttpException(422, { errors: ["Email can't be blank"] });
  }
  if (!password) {
    throw new HttpException(422, { errors: ["Password can't be blank"] });
  }
  const matchedUser = (await prisma.user.findFirst({
    where: { email },
  })) as unknown as User;

  if (!matchedUser) {
    throw new HttpException(401, { errors: ['Incorrect email or password'] });
  }
  if (!(await bcrypt.compare(password, matchedUser.password))) {
    throw new HttpException(401, { errors: ['Incorrect email or password'] });
  }

  const registeredUser = matchedUser as RegisteredUser;
  registeredUser.token = generateToken(matchedUser);
  registeredUser.password = '';

  return registeredUser;
}

async function checkUserUniqueness(email: string) {
  const existingUserByEmail = await prisma.user.findUnique({
    where: {
      email,
    },
    select: {
      userId: true,
    },
  });

  if (existingUserByEmail) {
    throw new HttpException(422, {
      errors: ['Email has already been taken'],
    });
  }
}

export async function createUser(
  input: RegisterInput,
  userType: Role
): Promise<RegisteredUser> {
  const email = input.email?.trim();
  const password = input.password?.trim();

  if (!email) {
    throw new HttpException(422, { errors: ["Email can't be blank"] });
  }
  if (!password) {
    throw new HttpException(422, { errors: ["Password can't be blank"] });
  }

  await checkUserUniqueness(email);

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = (await prisma.user.create({
    data: {
      ...input,
      role: userType,
      email,
      password: hashedPassword,
    },
    select: {
      userId: true,
      email: true,
      password: true,
      role: true,
    },
  })) as User;

  return {
    ...input,
    ...user,
    token: generateToken(user),
  };
}
