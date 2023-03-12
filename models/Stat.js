const mongoose = require("mongoose");

const statSchema = mongoose.Schema({
  money: {
    type: Number,
    required: true,
  },
  backers: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Stat", statSchema);
