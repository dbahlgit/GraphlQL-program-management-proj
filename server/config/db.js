const mongoose = require('mongoose');

const connectDB = async () => {  // asyn because they return promises
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;

