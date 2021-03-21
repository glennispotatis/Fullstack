const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const controller = require('../controllers/controller');
const router = express.Router();

/* 
Most of this code was taken from the lecture 17th of March. These are the public routes, and are
available fro everyone.
*/

router.post(
    '/signup',
    controller.createUser
);

// Had errors when I tried to move the login functionality to the controller, decided to keep it here.
router.post(
    '/login',
    async (req, res, next) => {
        passport.authenticate(
            'login',
            async (err, user, info) => {
                try {
                    if (err || !user) {
                        const error = new Error('An error occurred while logging in');
                        return next(info);
                    }
                    req.login(user, { session: false },
                        async (error) => {
                            if (error) return next(error);
                            const body = { email: user.email, role: user.role };
                            const token = jwt.sign({ user: body }, process.env.KEY);
                            return res.json(token);
                        })
                } catch (error) {
                    return next(error);
                }
            }
        )(req, res, next);
    }
);

router.post(
    '/forgot',
    controller.forgotPass
);

module.exports = router;