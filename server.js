const express=require('express')
const app=express()
const cors=require('cors')
const dotenv=require('dotenv')
dotenv.config({path:__dirname+"/.env"})
const connectDB=require('./config/connectDB')
const port=process.env.PORT||8000
const path = require('path');
app.use(express.json())
app.use(cors())
connectDB()
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use('/api',require('./routes/adminRoutes'))
app.use('/api',require('./routes/userRoutes'))
app.use('/api',require('./routes/menuRoutes'))
app.listen(port,(err)=>{err? console.log(err): console.log("server is running in port:",port)})