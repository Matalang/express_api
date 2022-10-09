const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const router = require('./routes/posts');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/posts', router);


app.listen(port, () => console.log(`Server berjalan dengan baik di port ${port}`))
