const { User } = require('../models/user')
const mongoose = require('mongoose')
require('dotenv').config()

// create array of seed data
const users = [
  new User({
    name: 'Adam',
    email: 'adam@email.com',
    password: '12345678',
    role: 'ADMIN'
  })]

// connect mongoose
const { connectDB, disconnectDB } = require('./config/mongooseLocalDB')
if (process.env.NODE_ENV !== 'test') {
    connectDB()
}

// seed data and disconnect
users.map(async (user, index) => {
  await user.save(() => {
    if (index === users.length - 1) {
      console.log('Users seeded into database!')
      mongoose.disconnect()
    }
  })
})
