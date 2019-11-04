const mongoose = require('mongoose');

const { Schema } = mongoose;

const applySchema = new Schema(
  {
    state: { type: String },
    hired: { type: Boolean },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    jobId: {
      type: Schema.Types.ObjectId,
      ref: 'Job',
      required: true,
    },
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
