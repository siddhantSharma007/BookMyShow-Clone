const express = require('express');
const router = express.Router();
const User=require('../Model/User');

router.post("/register", async (req, res) => {
  
  const { name, email, password } = req.body;
  const newUser = new User({ name, email, password });

  try {
    await newUser.save();
    res.status(200).json({
      success: true,
      message: "Registration successful",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});


// Login

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'All fields required' });
    }

    const userLogin = await User.findOne({ email: email, password: password });

    if (!userLogin) {
      return res.status(404).json({ error: 'Invalid email or password' });
    } else {
      return res.json({ message: 'Sign In Successfully', user: userLogin });
    }
  } catch (err) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});



module.exports = router;