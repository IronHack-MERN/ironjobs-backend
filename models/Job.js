const mongoose = require('mongoose');

const { Schema } = mongoose;

const jobSchema = new Schema(
  {
    job: { type: String, required: true },
    jobDescription: { type: String },
    companyName: { type: String, required: true },
    typePosition: { type: String },
    specialty: { type: String },
    salary: { type: Number },
    requeriments: { type: String },
    isOffered: { type: String },
    location: { type: String },
    userId: { type: String },
  },
);

const Job = mongoose.model('Job', jobSchema);
module.exports = Job;
