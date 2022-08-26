const mongoose = require('mongoose')

const { MongoMemoryServer } = require('mongodb-memory-server');
let mongod = null;
let mongoDBURI = ""

const connectDB = async () => {
  try {
    if (process.env.NODE_ENV === 'test') {
      mongod = await MongoMemoryServer.create();
      mongoDBURI = mongod.getUri();
    } else {
      // MongoDB URI building
      const mongoDBUser = process.env.DATABASE_USERNAME || 'user'
      const mongoDBPass = process.env.DATABASE_PASSWORD || 'user'
      const mongoDBCredentials = (mongoDBUser && mongoDBPass) ? mongoDBUser + ':' + mongoDBPass + '@' : ''

      const mongoDBHostname = process.env.DATABASE_HOST || 'localhost'
      const mongoDBPort = process.env.DATABASE_PORT || '27017'
      const mongoDBName = process.env.DATABASE_NAME || 'node-ms-mongodb'

      mongoDBURI = 'mongodb://' + mongoDBCredentials + mongoDBHostname + ':' + mongoDBPort + '/' + mongoDBName
    }
    
    const conn = await mongoose.connect(mongoDBURI, {
      connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
      family: 4, // skip trying IPv6
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

const disconnectDB = async () => {
  try {
    await mongoose.connection.close();
    if (mongod) {
      await mongod.stop();
    }
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = { connectDB, disconnectDB };
