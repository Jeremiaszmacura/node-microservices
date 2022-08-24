const request = require('supertest');
const { app, stopServer } = require('../server.js');

const { connectDB, disconnectDB } = require('../config/mongooseLocalDB');

describe('GET /', () => {

    beforeAll( async () => {
        await connectDB();
    });

    afterAll( async () => {
        await disconnectDB();
        stopServer()
    });

    it('respond with a 200 status code', async () => {
        const response = await request(app).get('/')
        expect(response.statusCode).toBe(200);
    });
    
});
