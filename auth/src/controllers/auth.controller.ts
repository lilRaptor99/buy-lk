import { Role } from '@prisma/client';
import { NextFunction, Request, Response, Router } from 'express';
import { RegisterInput } from '../models/register-input.model';
import { createUser, login } from '../services/auth.service';

const router = Router();

/**
 * Login
 */
router.post(
  '/login',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await login(req.body.email, req.body.password);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

/**
 * Create an user
 */
router.post(
  '/register/:userType',
  async (req: Request, res: Response, next: NextFunction) => {
    const { userType } = req.params;
    try {
      const user = await createUser(
        req.body as RegisterInput,
        userType as Role
      );
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
