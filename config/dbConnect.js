const mongoose = require("mongoose");
const liveDb = "mongodb://navdeep:monu1676@127.0.0.1:27017/dc";
const localDb = "mongodb://0.0.0.0:27017/dc";
const connectDb = async () => {
  try {
    await mongoose.connect(localDb);
    console.log("conneected db successfully");
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = connectDb;