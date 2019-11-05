const express = require('express');
const Jobs = require('../models/Job');

const router = express.Router();

router.get('/jobs', async (req, res, next) => {
  try {
    const jobs = await Jobs.find();
    res.status(200).json(jobs);
    res.status(200).send({
      message: 'Probando una action del controller de usuarios api con NODE y MONGOOSE'
    });
  } catch (err) {
    next(`Alert: You have an error -> ${err}`);
  }
});

router.post('/jobs/new', async (req, res, next) => {
  const { _id: userId } = req.session.currentUser;
  const {
    title, description, company, typePosition, specialty, salary, requeriments, isOffered, location,
  } = req.body;

  try {
    const newJob = await Jobs.create({
      // eslint-disable-next-line max-len
      userId, title, description, company, typePosition, specialty, salary, requeriments, isOffered, location,
    });
    res.status(200).json(newJob);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
