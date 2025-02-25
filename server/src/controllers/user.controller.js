import asyncHandler from "../utils/asyncHandler";
import apiError from "../utils/apiError";
import apiResponse from "../utils/apiResponse";
import { findOne, create } from "../models/user.model";
import jwt from "jsonwebtoken";
import client from "../models/client.model";
import crypto from 'crypto';

// Controller: Create New User
const createNewUser = asyncHandler(async (req, res) => {
    const { name, surname, email, password } = req.body;
  
    if (!name || !surname || !email || !password) {
      throw new apiError(
        400,
        "All fields (name, surname, email, password) are required"
      );
    }
  
    const existingUser = await findOne({ where: { email } });
    if (existingUser) {
      throw new apiError(409, "User with this email already exists");
    }    const express = require('express');
    const router = express.Router();
    const userController = require('../controllers/user.controller');
    
    router.post('/createNewUser', userController.createNewUser);
    
    module.exports = router;
  
    const newUser = await create({ name, surname, email, password });
    res
      .status(201)
      .json(new apiResponse(201, newUser, "User Created Successfully"));
  });
  module.exports = {
    createNewUser
  };
