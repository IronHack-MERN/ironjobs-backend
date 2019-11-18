const mongoose = require('mongoose');

const { Schema } = mongoose;

const jobSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    company: { type: String, required: true },
    typePosition: { type: String },
    specialty: { type: String },
    salary: { type: String },
    requeriments: { type: String },
    isOffered: { type: String },
    location: { type: String },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
);

const Job = mongoose.model('Job', jobSchema);
module.exports = Job;
