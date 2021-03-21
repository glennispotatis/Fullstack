const express = require('express');
const router = express.Router();
const controller = require('../controllers/studentController');

// This is a private route and can be accessed by anyone that have a valid token. This means
// that both students and teacher has access.
router.get(
    '/all',
    controller.getAllUsers
);

module.exports = router;