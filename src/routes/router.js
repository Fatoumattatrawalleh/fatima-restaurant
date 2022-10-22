const express = require('express');
const router = express.Router();
const { createUser, getAllUsers, getOneUser, updateOne} = require('../controllers/user');
// User route
router.post('/user', createUser);
router.get('/user', getAllUsers);
router.get('/user/:id', getOneUser);
router.put('/user/:id', updateOne);

module.exports = router;