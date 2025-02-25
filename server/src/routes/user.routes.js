import express from 'express';
import { createNewUser } from '../controllers/user.controller.js';

const router = express.Router();

router.post('/createNewUser', createNewUser);

export default router; // Use default export
