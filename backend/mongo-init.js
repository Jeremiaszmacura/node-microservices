/* eslint-disable */
// Create user
db = db.getSiblingDB('node-ms-mongodb')
db.createUser(
  {
    user: 'user',
    pwd: 'user',
    roles: [{ role: 'readWrite', db: 'node-ms-mongodb' }],
  }
)
db.createCollection('users')

// Authenticate user
db.auth({
  user: "user",
  pwd: "user",
});