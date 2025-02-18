const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json())
app.use(cors());




app.get('/', (req, res) => {
    res.json({ message: 'Hello from server!' });
});





app.listen(3000, () => {
    console.log('Server listening on port 5000');
});