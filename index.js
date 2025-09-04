const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

app.get('/', (req, res) => {
    res.redirect('https://cat333t.github.io/visor');
});

app.listen(PORT, HOST, () => {
    
})