/* eslint-disable */
db = db.getSiblingDB('node-database')
db.createUser(
  {
    user: 'user',
    pwd: 'user',
    roles: [{ role: 'readWrite', db: 'database' }]
  }
)
db.createCollection('users')
