//https://github.com/maitraiya/shopAPI/settings

const mongoose = require("mongoose");

const jwt = require("jsonwebtoken");

const User = require("../models/user");

exports.user_signup = async(req, res, next) => {
  const alreadyUser = await User.findOne({ email: req.body.emailReg });
  if (alreadyUser)
    return res.status(400).json({
      message: "Email already exists."
    });
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    userName: req.body.userNameReg,
    passWord: req.body.passWordReg,
    email: req.body.emailReg,
    mobile: req.body.mobileReg
  });
  const savingUser = await user.save();
  if (savingUser)
    return res.status(201).json({
      message: "user created",
      result : savingUser
    });
  else
    return res.status(500).json({
      error: savingUser
    });
};

exports.user_login = async(req, res, next) => {
  const alreadyUser = await User.findOne({ email: req.body.email });
  if (!alreadyUser)
    return res.status(400).json({
      message: "Please register first!"
    });
  else {
    const alreadyUser = await User.findOne({ email: req.body.email,passWord:req.body.passWord });
    if(alreadyUser) return res.status(200).json({
      message:'Login Successfull'
    })
    else return res.status(200).json({
      message:'Please enter valid email or password'
    })    
  }  
};

exports.user_delete = (req, res, next) => {
  res.status(200).json({ msg: "user_delete works" });
};
