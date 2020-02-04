const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({}));

router.get('/', (req, res) => {
    res.send('ok');
});

router.get('/api', (req, res) => {
    res.send('ok');
});

router.get('/api/countries', (req, res) => {
    const list = ['india', 'australia', 'us'];
    res.status(200).json(list);
});

app.use(router);


const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
    if (err) return console.error(err);
    console.log(`app is listening on port ${PORT}`);

})