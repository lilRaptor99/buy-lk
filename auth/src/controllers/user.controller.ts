import { NextFunction, Request, Response, Router } from 'express';
import { getUserProfile, resetPassword } from '../services/user.service';

const router = Router();

/**
 * Reset Password
 */
router.post(
  '/reset-password',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const status = await resetPassword(
        // @ts-ignore
        req.auth.userId,
        req.body.currentPassword,
        req.body.newPassword
      );
      if (status) {
        res.json({ status: 'success' });
      } else {
        res.json({ status: 'unsuccess' });
      }
    } catch (error) {
      next(error);
    }
  }
);

/**
 * Reset Password
 */
router.get(
  '/profile',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // @ts-ignore
      const { userId } = req.auth;
      res.json(getUserProfile(userId));
    } catch (error) {
      next(error);
    }
  }
);

export default router;
