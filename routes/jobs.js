const express = require('express');
const Jobs = require('../models/Job');

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

module.exports = router;
