//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('Books API', () => {
  
  describe('GET /', () => {
    it('should return 200/OK', (done) => {
      chai.request(server)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe('GET /books', () => {
    it('should return an array of books', (done) => {
      chai.request(server)
        .get('/books')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
    });
    it('should return an array of hashes with id, title and year', (done) => {
      chai.request(server)
        .get('/books')
        .end((err, res) => {
          let firstBook = res.body[0];
          firstBook.should.be.a('object');
          firstBook.should.have.own.property('id');
          firstBook.should.have.own.property('title');
          firstBook.should.have.own.property('year');
          done();
        });
    });
  });

  describe('POST /books', () => {
    it('should add a book to the books array', (done) => {
      chai.request(server)
        .post('/books')
        .send({ id: 3, title: 'Cool Book', year: 2000 })
        .end((err, res) => {
          let newBook = res.body;
          newBook.should.be.a('object');
          newBook.should.have.own.property('id');
          newBook.should.have.own.property('title');
          newBook.should.have.own.property('year');
          done();
        });
    })
  })
});
