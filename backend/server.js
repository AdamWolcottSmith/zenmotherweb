const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api')

//mongoDb connection

mongoose.connect('mongodb+srv://wolcott:booboo4000@zenmotherdb.nipnv.mongodb.net/zenmother?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('mongoose is connected!!!');
})

app.use(cors());
app.use('/', routes)

app.listen(PORT, console.log(`server running at ${PORT}`));