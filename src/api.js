const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const api = express();
const port = 3000;
const mysql = require('mysql');
const events = require('./events');
const bearerToken = require('express-bearer-token');
const oktaAuth = require('./auth');


const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'timeline',
  password : '123456',
  database : 'timeline'
});

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(bearerToken())
  .use(oktaAuth)
  .use(events(connection));


const router = express.Router();



api.use(cors());

const userData = {
    username: 'Ayrton Senna',
    level: 999
}

api.use(bodyparser.urlencoded({extended: true}));
api.use(bodyparser.json({limit: '20mb', extended: true}));
api.use(bodyparser.json({userData, extended: true}));

router.get("/", (req, resp)=> resp.json({
    welcome: "API Online!",
    currentUserData: userData
}));

api.use("/", router);
api.listen(port);
console.log('Running API!');

router.post('/event', (req, res, next) => {
    const owner = req.user.email;
    // db.query() code
  });
  
  router.get('/event', function (req, res, next) {
    const owner = req.user.email;
    // db.query() code
  });
  
  router.put('/event/:id', function (req, res, next) {
    const owner = req.user.email;
    // db.query() code
  });
  
  router.delete('/event/:id', function (req, res, next) {
    const owner = req.user.email;
    // db.query() code
  });
