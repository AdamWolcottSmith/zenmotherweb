const mongoose = require('mongoose');

//Schema
const showListSchema = new mongoose.Schema({
  date: String,
  venue: String,
  city: String,
  state: String,
})

//model
const ShowList = mongoose.model('shows', showListSchema)

module.exports = ShowList;