const express = require('express');
const router = express.Router();

router.get(
    '/dashboard',
    (req, res, next) => {
        res.json({
            message: 'This will be the dashboard where you can view all students',
            user: req.user,
            token: req.query.secret_token
        });
    }
);

module.exports = router;