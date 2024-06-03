import jwt from 'jsonwebtoken';
import User from '../models/user.js';

// Authentication middleware
const authenticate = async (req, res, next) => {
  // Extract token from headers or cookies
  const token = req.headers['authorization']?.split(' ')[1] || req.cookies['token'];

  if (!token) {
    return res.status(401).send("No token provided, You are Unauthorized!");
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.KEY || '');

    // Find user in the database
    const user = await User.findOne({
      where: {
        email: decoded.email
      }
    });

    if (!user) {
      return res.status(401).send("User not found, You are Unauthorized!");
    }

    // Attach user to response locals
    res.locals.user = user;
    next();
  } catch (error) {
    res.status(401).send("Invalid token, You are Unauthorized!");
  }
};

// Role check middleware
const checkAdminRole = (req, res, next) => {
  const userRole = res.locals.User?.role;
  const userstatus = res.locals.User?.status;
  if (userRole === 'admin') {
    if (userstatus === 'online') {
    next();
    }
    else{
      res.status(401).send("admin,please Login!");
    }
  } else {
    res.status(401).send("You are Unauthorized!");
  }
};
/*
//او حطها جوا ال checkAdmin
const checklogout=(req,res,next)=>{
  const userRole = res.locals.User?.state;

  if (userRole === 'active') {
    next();
  } else {
    res.status(401).send("admin, You are logout !");
  }
}*/

export { authenticate, checkAdminRole };
