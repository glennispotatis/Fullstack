const express = require('express');
const router = express.Router();

router.get(
    '/profile',
    (req, res, next) => {
        res.json({
            message: 'You are now in the secret place',
            user: req.user,
            token: req.query.secret_token
        })
    }
);

module.exports = router;