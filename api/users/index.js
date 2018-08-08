const express = require('express');
const router = express.Router();

const controller = require('./controller')

/* ROUTES/VIEW */
router.get('/', controller.get);
router.get('/:id', controller.getOneById);

module.exports = router;