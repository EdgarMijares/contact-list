const { Router } = require('express');
const { createUser } = require('../controllers/users.controller');
const router = Router();

router.get('users', createUser)

module.exports = router;

