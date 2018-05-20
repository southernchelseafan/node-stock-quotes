# Node Stock Quote

Simple node express demo using remote API for stock quotes & a local mongodb for storing recent quotes.

## Stock Quotes from alphavantage

The API requests for a stock quote use alphavantage to request a key to set in config.json use the link below.

https://www.alphavantage.co/documentation/
https://www.alphavantage.co/support/#api-key

## Running the express api

To run the express API run npm install then node server.js

Test the running express server from http://localhost:3434/quote/MSFT

This will fetch the quote from alphavantage and store a record in mongodb.
