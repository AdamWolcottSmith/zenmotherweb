const express = require('express');
const router = express.Router();
const ShowList = require('../models/showList')

//Routes

router.get('/api', (req, res) => {

  ShowList.find({})
    .then((data) => {
      console.log('Data', data);
      res.json(data)
    })
    .catch((error) => {
      console.log('Error', error);
    })
});

router.get('/api/name', (req, res) => {
  const data = {
    username: 'dumps',
    age: 2
  }
  res.json(data)
});

module.exports = router