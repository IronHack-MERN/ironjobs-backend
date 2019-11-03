const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    hashedPassword: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    mobile: { type: Number },
    studies: {
      start: { type: Date },
      end: { type: Date },
      careerTitle: { type: String },
      college: { type: String },
      sector: { type: String },
      comments: { type: String },
    },
    experience: {
      company: { type: String },
      job: { type: String },
      sector: { type: String },
      comments: { type: String },
    },
    languages: {
      language: { type: String },
      spokenLevel: { type: Number },
      writtenLevel: { type: Number },
      certificate: { type: String },
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

const User = mongoose.model('User', userSchema);

module.exports = User;
