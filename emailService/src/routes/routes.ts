import { Router } from "express";
import emailController from "../controllers/email.controller";

const api = Router().use(emailController);

export default Router().use("/api", api);
