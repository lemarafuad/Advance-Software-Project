import express from "express";
import {signup,login,forgetPassword,} from "../controller/Authcontrol.js";
import User from "../models/user.js";
const AuthRoute = express.Router();

AuthRoute.post("/signup", async (req, res) => {
  const userData = req.body;
  console.log(userData);
  const response = await signup(userData);
  if (response.success) {
    res.cookie("token", response.token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.status(201).send(response);
  } else {
    res.status(400).send(response);
  }
});

AuthRoute.post('/login', async (req, res) => { 
    const response = await login(req.body);
    if(response.success){
        res.cookie('token', response.token, { httpOnly: true , maxAge: 7 * 24 * 60 * 60 * 1000});
        res.cookie('Role', response.role, { maxAge: 7 * 24 * 60 * 60 * 1000});
        response.status = 'online';
        res.status(200).send(response);
      //  console.log(info(response))
    }
    else{
        res.status(400).send(response);
       // console.log(error(response))
    }
});

AuthRoute.post("/logout", async (req, res) => {
  const email = req.body.email;
  const user = await User.findOne({ where: { email } });
  user.status = "offline";
  await user.save();

  res.clearCookie("token");
  console.log(req.cookies["token"]);
  res.status(201).send("Logged out successfully");
});

AuthRoute.post("/forgetpassword", forgetPassword);

export default AuthRoute;