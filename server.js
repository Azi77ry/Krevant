require('dotenv').config();
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin';

console.log('Admin password for debugging:', ADMIN_PASSWORD); // For debugging, remove in production


let db;

async function connectDB() {
    try {
        const client = new MongoClient(MONGO_URI);
        await client.connect();
        db = client.db();
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1);
    }
}

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname));

// API routes
app.get('/api/matches', async (req, res) => {
    const matches = await db.collection('matches').find().toArray();
    res.json(matches);
});

app.post('/api/matches', async (req, res) => {
    // We clear the collection and insert the new matches
    await db.collection('matches').deleteMany({});
    await db.collection('matches').insertMany(req.body);
    res.status(200).send('Matches updated successfully');
});

app.get('/api/codes', async (req, res) => {
    const codes = await db.collection('bettingCodes').find().toArray();
    res.json(codes);
});

app.post('/api/codes', async (req, res) => {
    await db.collection('bettingCodes').deleteMany({});
    await db.collection('bettingCodes').insertMany(req.body);
    res.status(200).send('Betting codes updated successfully');
});

// Admin password check
app.post('/api/login', (req, res) => {
    const { password } = req.body;
    if (password === ADMIN_PASSWORD) {
        res.status(200).send('Login successful');
    } else {
        res.status(401).send('Unauthorized');
    }
});

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
        console.log(`Admin panel is at http://localhost:${PORT}/admin.html`);
    });
});
