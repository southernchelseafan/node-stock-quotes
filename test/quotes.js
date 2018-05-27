process.env.NODE_ENV = 'test';

var request = require('request');
var mongoose = require('mongoose');
var config = require('../config.json');
var Stock = require('../models/stock');

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('/GET quote', () => {
    it('it should GET stock quote', (done) => {
      chai.request(server)
          .get('/quote/AAPL')
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              done();
          });
    });
});
