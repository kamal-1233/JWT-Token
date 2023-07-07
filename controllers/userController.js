const asyncHandler = require ("express-async-handler");
const bcrypt = require ("bcrypt");
const User = require ("../models/userModel");

//GET Register a user 
//route POST /api/users/register
//access public 

const registerUser = asyncHandler (async (req,res) => {
    const {username, email, password} = req.body;
    if (!username || !email || !password){
        res.status(400);
        throw new Error("All fields are Mandatory");
    }
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error("User already registered");
    }


//Hash password

const hashedPassword = await bcrypt.hash(password, 10);
console.log("Hashed password:", hashedPassword);
    res.json({message: "Register the user"});
 });


//GET login a user 
//route POST /api/users/login
//access public 

const loginUser = asyncHandler (async(req,res) => {
    res.json({message: "login user"});
 });


 //GET Current a user 
//route POST /api/users/current
//access private 

const currentUser = asyncHandler (async(req,res) => {
    res.json({message: "current user information"});
 });


 
 module.exports = { registerUser, loginUser,currentUser }