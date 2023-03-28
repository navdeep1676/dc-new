const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var videoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      index: true,
    },
    slug: {
      type: String,
      require: true,
    },
    desc: {
      type: String,
      required: true,
    },
    image: {
      type: {},
    },
    url: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model("Video", videoSchema);
