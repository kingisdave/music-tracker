const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
// require('dotenv').config();
const {sequelize} = require('./models')
const config = require('./config/config')
const app = express();
// const port = 8081;
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

// app.listen(process.env.PORT || 8081)
// .sync({force: true}) adding the force will clear the database
sequelize.sync()
    .then(() => {
        console.log(`Db ready on port ${config.port}`)
    })
  
app.listen(config.port)
