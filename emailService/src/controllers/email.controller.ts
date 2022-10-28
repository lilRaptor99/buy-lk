import { NextFunction, Request, Response, Router } from "express";
import sendMail from "../utils/send-mail";

const router = Router();

/**
 * Add Stations
 */
router.post(
  "/send-email",
  async (req: Request, res: Response, next: NextFunction) => {
    console.log("request res");
    const { to, subject, body } = req.body;
    try {
      // sendMail(to, subject, body);
      res.json({ status: "Email sent!" });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
