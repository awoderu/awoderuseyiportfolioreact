// src/app.js
import express from 'express'; // Modern ES Module syntax!
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

// Resolve paths correctly when using ES Modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Set Pug engine (relative to the src/ folder)
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    res.render('index', { title: 'Babel Setup', message: 'Hello from modern ES6 Express!' });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
