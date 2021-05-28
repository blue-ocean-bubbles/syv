import app from '../server/index.js';
import chai from 'chai';
import request from 'supertest';


const expect = chai.expect;

describe('CatWalk API Integration tests', function() {

    it('should get all question from a product', function(done) {
      request(app).get('/api')
        .end(function(err, res) {
          expect(res.statusCode).to.equal(200);
          done();
        });
    });
  
    // it('should get all answers/photos from a question', function(done) {
    //   request(app).get('/qa/questions/3231870/answers')
    //     .end(function(err, res) {
    //       expect(res.statusCode).to.equal(200);
    //       done();
    //     });
    // });
  
    // it('should create a question on a product', function(done) {
    //   const question = {
    //     "question_body": "new",
    //     "asker_name": "Demarkus",
    //     "asker_email": "dmanthonycoding@gmail.com"
    //   };
    //   request(app).post('/qa/questions/918046').send(question).end(function(err, res) {
    //     expect(res.statusCode).to.equal(201);
    //     done();
    //   });
    // });
  
    // it('should create a answer on a question', function(done) {
    //   const answer = {
    //     "body": "made it",
    //     "answerer_name": "Demarkus",
    //     "answerer_email": "dmanthonycoding@gmail.com",
    //     "photos": "[\"asdf\"]"
    //   };
    //   request(app).post('/qa/questions/918046').send(answer).end(function(err, res) {
    //     expect(res.statusCode).to.equal(201);
    //     done();
    //   });
    // });
  });