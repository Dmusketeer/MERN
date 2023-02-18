const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const dbConnect = async () => {
  console.log(process.env);
  try {
    await mongoose.connect(process.env.Db_Url_String, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connection is successfull !!!");
  } catch (e) {
    console.log(`Error ${e.message}`);
  }
};

module.exports = dbConnect;
