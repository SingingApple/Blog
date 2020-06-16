const mongooose = require("mongoose");

const connectdb = async () => {
  try {
    const db = await mongooose.connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectdb;
