const router = require('express').Router();
const usersCtrl = require('../controllers/users');

// GET /users
router.get('/users', usersCtrl.index);
router.post('/users/:googleId', usersCtrl.userProfile);


// Insert this middleware for routes that require a logged in user
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}

module.exports = router;