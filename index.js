const express = require('express');
const port = process.env.PORT || 5000;

const app = express()
const cors = require('cors');


// Middleware
const corsOptions ={
  origin:'*', 
  credentials:true,
  optionSuccessStatus:200,
}

app.use(cors(corsOptions))
app.use(express.json())




app.get('/', (req, res) => {
    res.send("Your dream college is online")
  })
  
  app.listen(port, () => {
    console.log(`dream college is available on port : ${port}`);
  })