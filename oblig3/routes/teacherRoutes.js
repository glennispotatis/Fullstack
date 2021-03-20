const express = require('express');
const router = express.Router();
const unAController = require('../controllers/controller');
const studController = require('../controllers/studentController');
const controller  =require('../controllers/teacherController');

router.post(
    '/add',
    unAController.createUser
);

router.delete(
    '/delete',
    controller.deleteUser
);

module.exports = router;