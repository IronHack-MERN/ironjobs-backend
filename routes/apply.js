const express = require('express');
const Apply = require('../models/Apply');
const { checkIfLoggedIn } = require('../middlewares/index');

const router = express.Router();

router.get('/', checkIfLoggedIn, async (req, res, next) => {
  try {
    const applies = await Apply.find();
    res.status(200).json(applies);
  } catch (err) {
    next(`*** Alert -> You have an error: ${err}`);
  }
});

router.post('/:id', checkIfLoggedIn, async (req, res, next) => {
  const { _id: userId } = req.session.currentUser;
  const jobId = req.params.id;
  const {
    state, hired,
  } = req.body;

  try {
    const newApply = await Apply.create({
      userId,
      jobId,
      state,
      hired,
    });
    res.status(200).json(newApply);
  } catch (err) {
    next(`*** Alert -> You have an error: ${err}`);
  }
});

router.put('/:id', checkIfLoggedIn, async (req, res, next) => {
  const idApply = req.params.id;
  const {
    state,
  } = req.body;

  try {
    const response = await Apply.findByIdAndUpdate(
      idApply,
      {
        state,
      },
      { new: true },
    );
    res.status(200).json({
      message: 'Apply updated successfully',
      response,
    });
  } catch (err) {
    next(`You have an error: ${err} in the apply:  ${idApply}`);
  }
});

module.exports = router;
