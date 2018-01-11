const express = require('express');
const app = express();
const CORS = require('cors')();
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const rndstring = require('randomstring');
const session = require('express-session');
const sessionstore = require('sessionstore');
app.use(CORS);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '1gb', extended: false }));


app.listen(3000, (req,res)=>{
  console.log('Server Porting on 3000');
})
