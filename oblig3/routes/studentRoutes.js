const express = require('express');
const router = express.Router();
const controller = require('../controllers/studentController');

router.get(
    '/all',
    controller.getAllUsers
);

module.exports = router;