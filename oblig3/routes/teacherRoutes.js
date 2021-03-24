const express = require('express');
const router = express.Router();
const unAController = require('../controllers/controller');
const controller  =require('../controllers/teacherController');

// This is the teacher route and can only be accessed if you are a teacher.
// Teacher should be able to create new users, so I imported the 'createUser' from signup method
// to use it here as well.
router.post(
    '/',
    unAController.createUser
);

// This is the update functionality that teachers have
router.patch(
    '/',
    controller.updateUser
);

// This is the delete functionality that teachers have.
router.delete(
    '/',
    controller.deleteUser
);

module.exports = router;