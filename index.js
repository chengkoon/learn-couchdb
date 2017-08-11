const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const NodeCouchDb = require('node-couchdb');

const couch = new NodeCouchDb({
    auth: {
        user: 'chengkoon',
        pass: '1234qwer'
    }
});

console.log('couch is ', couch);

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(3000, () => {
  console.log('Server started on port 3000');
})