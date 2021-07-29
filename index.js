const cors = require('cors')
const express = require('express');
const fs = require('fs');
const quotes = require('./quotes.json');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.get('/getQuote', cors(), (req, res) => {
  res.json(quotes);
});

app.get('/addQuote', cors(), (req, res) => {
  const newQuotes = quotes;
  newQuotes.push({text:'something', author:'somebody'}); 
fs.writeFileSync('quotes.json', JSON.stringify(newQuotes, null, 2), "utf-8")
  res.send('Add any quote you want');
});


app.listen(3000, () => {
  console.log('server started');
});