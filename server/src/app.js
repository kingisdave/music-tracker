const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
// require('dotenv').config();

const app = express();
const port = 8081;
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res) => {
  res.send({
    message: 'hello world!'
  })
})

// app.listen(process.env.PORT || 8081)
app.listen(port, ()=>{
  console.log(`Example app listening on port ${port}`)
})
