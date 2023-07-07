const express = require("express");
const { 
    registerUser,
    currentUser,
    loginUser,
 } = require ("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login",loginUser);

 router.get("/currentogin",currentUser);

 module.exports = router;