const express = require('express');
const Apply = require('../models/Apply');
const { checkIfLoggedIn } = require('../middlewares/index');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const applies = await Apply.find();
    res.status(200).json(applies);
  } catch (err) {
    next(`*** Alert -> You have an error: ${err}`);
  }
});


module.exports = router;
