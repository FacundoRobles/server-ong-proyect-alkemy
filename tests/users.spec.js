let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
let server = require('../app');

chai.use(chaiHttp);

let token = '';

const userId = 3;

const keys = [
  "id",
  "firstName",
  "lastName",
  "email",
  "image",
  "password",
  "roleId",
  "createdAt",
  'deletedAt',
  "updatedAt",
];

describe("Get all users: ", () => {
  beforeEach(done => {
    chai.request(server).post('/auth/login').send({
      email: "test2@test.com",
      password: "User2021.L2"
    }).end(
      function (err, res) {
        token = res.body.data;
        expect(res).to.have.status(201);
        done();
      }
    );
  });
  it("Should get all users", function(done){
    chai.request(server)
      .get('/users')
      .set({
        Authorization: `Bearer ${token}`
      })
      .end(function (err, res) {
        expect(res.body.success).to.be.true;
        expect(res.body.data[0]).to.have.all.keys(...keys);
        expect(res.body.data).to.have.lengthOf(20);
        expect(res).to.have.status(201);
        done();
      })
  });

  it("Should not get all users, not authorized", function(done){
    chai.request(server)
      .get('/users')
      .end(function (err, res) {
        expect(res).to.have.status(401);
        done();
      })
  });
});

describe("PUT /users/:id", () => {


  it("Should update user", function(done){
    chai.request(server)
      .put(`/users/${userId}`)
      .send({
        firstName: "Marcos",
        lastName: "Pena",
        email: `test800@test.com`,
        password: "User2021.L800",
        roleId: 1,
        image: `https://picsum.photos/200?random=3`
      })
      .end(
        function (err, res) {
          expect(res).to.have.status(201);
          expect(res.body.success).to.be.true;
          expect(res.body).to.have.property('data');
          expect(res.body.data).to.have.all.keys(["email", "firstName", "image", "lastName", "password", "roleId"]);
          done();
        }
      );
  });
});

describe("DELETE /users/:id", () => {

  it("Should delete user", function(done){
    chai.request(server)
      .delete(`/users/4`)
      .end(
        function (err, res) {
          expect(res).to.have.status(201);
          expect(res.body.success).to.be.true;
          done();
        }
      );
  });
  it("Should NOT delete user, wrong id", function(done){
    chai.request(server)
      .delete(`/users/500`)
      .end(
        function (err, res) {
          expect(res).to.have.status(401);
          done();
        }
      );
  });
});


describe("POST /users, register", () => {

  it("Should register user", function(done) {
    chai.request(server)
      .post(`/auth/register`)
      .send({
        "firstName": "Leandro",
        "lastName": "Flores",
        "email": "lean@gmail.com",
        "password": "Lean2021.B",
        "image": "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png"
    })
      .end(
        function (err, res) {
          expect(res).to.have.status(201);
          expect(res.body.data).to.have.all.keys(["createdAt", "email", "firstName", "id", "image", "lastName", "password", "roleId", "updatedAt"]);
          expect(res.body.success).to.be.true;
          done();
        }
      );
  });
  it("Should NOT register user, missing fields", function (done) {
    chai.request(server)
      .post(`/auth/register`)
      .send({
        "firstName": "",
        "lastName": "Flores",
        "email": "",
        "password": "",
        "image": "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png"
    })
      .end(
        function (err, res) {
          expect(res).to.have.status(401);
          done();
        }
      );
  });
});




// describe('GET /news', () => {
//   it('It should GET all the tasks', (done) => {
//     chai.request(server)
//       .get('/news')
//       .end((error, res) => {
//         res.should.have.status(200)
//           .which.is.an('object')
//         done();
//       })
//   })

//   it('It should NOT GET all the tasks', (done) => {
//     chai.request(server)
//       .get('/new')
//       .end((error, response) => {
//         response.should.have.status(404);
//         done();
//       })
//   })
// });

// describe('GET /news/:id', () => {
//   it('It should GET a task by ID', (done) => {
//     let taskId = 3;
//     chai.request(server)
//       .get('/news/' + taskId)
//       .end((error, response) => {
//         response.should.have.status(200);
//         response.body.should.be.a('object');
//         done();
//       });
//   });
// });

// describe('POST /news', () => {
//   it('It should POST a new task', (done) => {
//     let news = {
//       name: 'Novedad6',
//       image: 'www.image7.com'
//     };
//     chai.request(server)
//       .post('/news')
//       .send(news)
//       .end((error, response) => {
//         response.should.have.status(200);
//         news.should.have.property('name');
//         news.should.have.property('image');
//         done();
//       });
//   });
// });

// describe('PUT /news', () => {
//   it('It should UDAPTE a task', (done) => {
//     let taskId = 3;
//     let news = {
//       name: 'novedad6',
//       image: 'www.image7.com'
//     }
//     chai.request(server)
//       .put('/news/' + taskId)
//       .send(news)
//       .end((error, response) => {
//         response.should.have.status(200);
//         news.name.should.be.equal('novedad6');
//         news.image.should.be.equal('www.image7.com');
//         response.body.should.have.property('success').eq(true);
//         done();
//       });
//   });
// });

// describe('DELETE /news/:id', () => {
//   it('It should DELETE a existing task', (done) => {
//     let taskId = 2;
//     chai.request(server)
//       .delete('/news/' + taskId)
//       .end((error, response) => {
//         response.should.have.status(200);
//         done();
//       });
//   });
// });