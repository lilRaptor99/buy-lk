import { Router } from 'express';
import authController from '../controllers/auth.controller';
import userController from '../controllers/user.controller';
import auth from '../utils/auth';

const userApi = Router().use(auth.required).use(userController);

const api = Router().use(authController).use('/user', userApi);

export default Router().use('/api', api);
