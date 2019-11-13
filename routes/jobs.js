const express = require('express');
const Jobs = require('../models/Job');
const { checkIfLoggedIn } = require('../middlewares/index');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const jobs = await Jobs.find();
    res.status(200).json(jobs);
  } catch (err) {
    next(`*** Alert -> You have an error: ${err}`);
  }
});

router.post('/', async (req, res, next) => {
  const { _id: userId } = req.session.currentUser;
  const {
    title, description, company, typePosition, specialty, salary, requeriments, isOffered, location,
  } = req.body;

  try {
    const newJob = await Jobs.create({
      userId,
      title,
      description,
      company,
      typePosition,
      specialty,
      salary,
      requeriments,
      isOffered,
      location,
    });
    res.status(200).json(newJob);
  } catch (err) {
    next(`*** Alert -> You have an error: ${err}`);
  }
});

router.put('/:id', checkIfLoggedIn, async (req, res, next) => {
  const jobId = req.params.id;
  const {
    title, description, company, typePosition, specialty, salary, requeriments, isOffered, location,
  } = req.body;

  try {
    const response = Jobs.findByIdAndUpdate(
      jobId,
      {
        title,
        description,
        company,
        typePosition,
        specialty,
        salary,
        requeriments,
        isOffered,
        location,
      },
      { new: true },
    )
      .then((job) => {
        res.json({ job });
      })
      .catch((error) => {
        next(error);
      });

    res.status(200).json({
      message: 'User updated successfully',
      response,
    });
  } catch (err) {
    next(`You have an error: ${err} in the job:  ${jobId}`);
  }
});

module.exports = router;
