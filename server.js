const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));

const {
  showGifts,
  getAddGiftPage,
  addGift
} = require('./controllers/giftControllers');

app.get('/', (req, res) => {
  showGifts(req, res);
});

app.get('/admin/add-gift', getAddGiftPage);

app.post('/admin/add-gift', addGift);

const gifts = ['milk', 'water'];

app.listen(3000, () => {
  console.log('Serber is running on Port 3000');
});
