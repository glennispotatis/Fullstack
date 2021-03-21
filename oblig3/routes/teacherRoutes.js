const express = require('express');
const router = express.Router();
const unAController = require('../controllers/controller');
const controller  =require('../controllers/teacherController');

router.post(
    '/add',
    unAController.createUser
);

router.patch(
    '/update',
    controller.updateUser
);

router.delete(
    '/delete',
    controller.deleteUser
);

module.exports = router;