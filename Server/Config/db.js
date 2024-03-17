const mongoose = require("mongoose");

// Correct the connection URI as needed
const db = "mongodb+srv://kamalbanjade:K%40M%40L@cluster0.sf0urdt.mongodb.net/books?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  try {
    // Set strictQuery option before connecting to the database
    mongoose.set('strictQuery', true);

    // Connect to the database
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
