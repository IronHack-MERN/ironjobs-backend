const express = require('express');
const User = require('../models/User');
const { checkIfLoggedIn } = require('../middlewares/index');

const router = express.Router();

router.put('/', checkIfLoggedIn, async (req, res, next) => {
  const { _id: userId } = req.session.currentUser;
  try {
    let resp;
    switch (req.body.type) {
      case 'personal':
        resp = await User.findByIdAndUpdate(userId,
          {
            username: req.body.username,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            mobile: req.body.mobile,
          });
        break;
      case 'studies':
        resp = await User.findByIdAndUpdate(userId,
          {
            studies: {
              start: req.body.start,
              end: req.body.end,
              careerTitle: req.body.careerTitle,
              college: req.body.college,
              sector: req.body.sector,
              comments: req.body.comments,
            },
          });
        break;
      case 'experience':
        resp = await User.findByIdAndUpdate(userId,
          {
            experience: {
              company: req.body.company,
              job: req.body.job,
              sector: req.body.sector,
              comments: req.body.comments,
            },
          });
        break;
      case 'languages':
        resp = await User.findByIdAndUpdate(userId,
          {
            languages: {
              language: req.body.language,
              spokenLevel: req.body.spokenLevel,
              writtenLevel: req.body.writtenLevel,
              certificate: req.body.certificate,
            },
          },
          { new: true });
        break;
      default:
        break;
    }

    res.status(200).json({
      message: 'User updated successfully',
      resp,
    });
  } catch (err) {
    next(`You have an error: ${err} y el user es: ${userId}`);
  }
});

module.exports = router;
