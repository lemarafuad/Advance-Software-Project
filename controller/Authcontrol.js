import express from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User  from "../models/user.js";
import IsEmail from "isemail";
export const router = express.Router();

const createToken = (id, email) => {
  return jwt.sign({ email }, process.env.KEY || '', {
    expiresIn: 7 * 24 * 60 * 60 // 1 week ( token's expiration time)
  });
}

export const signup = async(userData) => {    
 const { name, role, email, mobile_number, password} = userData;

  try {

    if (!name) {
      return { error: 'Name is required', success: false};
    }
    if (!IsEmail.validate(email)) {
      return { error: 'Invalid email', success: false};
    }
    if (password.length < 6) {
      return { error: 'Password must be at least 6 characters long', success: false};
    }

    // Check if the user already exists in the database
    const user = await User.findOne({ where: { email } });
    if (user) {
      return { error: 'User email already exists' ,success: false};
    }

    // Create a new user in the database
    const newUser = await User.create({
      name,
      role,
      email,
      mobile_number,
      password
    });

    return { message: `User ${newUser.name} created successfully`, success: true, token: createToken(newUser.id, newUser.email)};
  }   
  catch (error) {
    console.log(error);
    return { error: error.message ,success: false};
  }
};

export const login = async (userData) => {
  const { email, password } = userData;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return { error: 'User does not exist', success: false};
    }

    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid) {
      return { error: 'Invalid password', success: false};
    }

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.KEY || '', {
      expiresIn: 7 * 24 * 60 * 60 // 1 week
    });

    // make status active
    /*console.log('user before', user );
    user.status = 'active';
    console.log('user after', user );
    await user.save();*/
   
    return { token, success: true, role: user.role, message: `User ${user.name} logged in successfully`};
  } catch (error) {
    return { error: error.message, success: false};
  }
}

export const forgetPassword = (req, res) => {
    res.send("Forget Password route");
    
}