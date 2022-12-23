const express = require('express');
const app = express();
const path = require('path');
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const socketModule = require('./socket/socket.io');
const auth = require('./routes/auth');
const multer = require('multer');


const PORT = 3002;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'publick')));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(auth);



io.on('connection', socketModule);






app.get('/', (req,res) => {
  res.render('index')
})
app.get('/registration', (req,res) => {
  res.render('index')
})

app.get('/chat', (req,res) => {
  res.render('chat')
})



http.listen(PORT, () => {
  console.log(`server on listening. Port: ${PORT}`)
})