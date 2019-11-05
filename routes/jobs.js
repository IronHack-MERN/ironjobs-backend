const express = require('express');
const Jobs = require('../models/Job');

const router = express.Router();

router.get('/jobs', async (req, res, next) => {
  try {
    const jobs = await Jobs.find();
    res.status(200).json(jobs);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
