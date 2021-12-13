const express    = require('express')
const bodyParser = require('body-parser')
const cors       = require('cors')
const mongoose   = require('mongoose')
require('dotenv').config()


//applicaton
const app = express();

//database connection
mongoose.connect(process.env.Database, {

  useNewUrlParser: true,
  useUnifiedTopology:true
})
.then(()=>console.log("new db connected successfully"))
.catch(err=>console.log(err)) 

//middlewares
app.use(cors());
 app.use(bodyParser.json());


//Using Routes
app.use('/Api', require('./Routes/post'))
app.use('/Api', require('./Routes/auth'))



const port= process.env.PORT || 8000;
app.listen(port, ()=>console.log(`server is running at port ${port}`));






