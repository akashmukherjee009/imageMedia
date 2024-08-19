import express from 'express';
import connectDB from './db.js';
import postRoutes from './routes/postRoute.js';
import postActions from './routes/postAction.js';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';


const app = express();

// Get the filename and directory name using ES module syntax
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.json());

// Use post routes
app.use('/posts', postRoutes);
app.use('/actions', postActions);

// Serve static files from the uploads folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(5000, () => {
    console.log('Server Connected.........');
    connectDB();
});
