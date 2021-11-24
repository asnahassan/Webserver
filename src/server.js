const express = require('express');
const app = express();
const port = 5002;
// var expressPath = require('express-path')

app.use(express.static('public'));//using the folder

app.get('/static', express.static('public'));//assigning to endpoint


// app.get('/', (req, res) => {
//     res.sendFile('./public/index.html', { root: __dirname });
// });

// app.get('/contact', (req, res) => {
//     res.sendFile(path.resolve(__dirname, "public/contact/html"));
// });

app.listen(port, () => console.log(`listening on port ${port}!`));
