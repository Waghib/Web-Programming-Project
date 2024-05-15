// // routes/auth.js
// const express = require('express');
// const User = require('../models/user');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// const router = express.Router();

// // Register a new user
// router.post('/register', async (req, res) => {
//     try {
//         const { username, email, password } = req.body;
//         const user = new User({ username, email, password });
//         await user.save();
//         res.status(201).send({ message: 'User registered successfully' });
//     } catch (error) {
//         res.status(400).send({ error: error.message });
//     }
// });

// // Login user
// router.post('/login', async (req, res) => {
//     try {
//         const { username, password } = req.body;
//         const user = await User.findOne({ username });
//         if (!user) {
//             return res.status(400).send({ error: 'Invalid credentials' });
//         }
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).send({ error: 'Invalid credentials' });
//         }
//         const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1h' });
//         res.send({ token });
//     } catch (error) {
//         res.status(400).send({ error: error.message });
//     }
// });

// module.exports = router;
