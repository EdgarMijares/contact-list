import { Router } from 'express';
const router = Router();

import { createUser } from '../controllers/users.controller'

router.post('user', createUser)