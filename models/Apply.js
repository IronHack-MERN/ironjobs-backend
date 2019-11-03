const mongoose = require('mongoose');

const { Schema } = mongoose;

const applySchema = new Schema(
  {
    userId: { type: String, required: true },
    jobId: { type: String, required: true },
    state: { type: String },
    hired: { type: Boolean },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

const Apply = mongoose.model('Apply', applySchema);

module.exports = Apply;
