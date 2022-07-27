const express = require('express');
const bodyParser = require('body-parser');
const socket = require('socket.io')

const app = express();
const io = socket(server);
require('./utils/socket')(io);
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.set('view engine', 'ejs');
var port = process.env.PORT || 8080;
//Render Index page
app.get('/', (req, res) => {
    res.render('index')
})

app.post('/room', (req, res) => {
    roomname = req.body.roomname;
    username = req.body.username;
    res.redirect(`/room?username=${username}&roomname=${roommate}`)
})

//Rooms
app.get('/room', (req, res)=>{
    res.render('room')
})
//Start Server
const server = app.listen(port, () => {
    console.log(`Server Running on port ${port}`)
})