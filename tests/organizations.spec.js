let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
let server = require('../app');
chai.use(chaiHttp);
const keys = ['id', 'name', 'phone', 'image', 'address', 'welcomeText', 'socialNetworks', 'createdAt', "updatedAt", 'deletedAt']
const ongId = 1;



describe('Get all organizations: ', () => {
    it('should get all organizations', (done) => {
        chai.request(server)
            .get('/organizations')
            .end(function (err, res) {
                expect(res.body.success).to.be.true;
                expect(res.body.data[0]).to.have.all.keys(...keys);
                expect(res.body.data).to.have.lengthOf(5);
                expect(res).to.have.status(200);
                done();
            });
    });
    it('should NOT get all organizations, wrong url', (done) => {
        chai.request(server)
            .get('/organization')
            .end((err, res) => {
                expect(res).to.have.status(404);
                done();
            });
    });
});



describe('Insert an organization: ', () => {
    it('should insert an organization', (done) => {
        chai.request(server)
            .post('/organizations')
            .send({
                name: `Organization 200`,
                image: `https://picsum.photos/200?random=200`,
                phone: 15567200,
                address: `Dorrego 1843`,
                welcomeText: `Welcome to Organization 8`,
                socialNetworks: {
                    facebook: `https://www.facebook.com/fundacionsomosmasok`,
                    linkedin: `www.linkedin.com/organization8`,
                    instagram: `www.instragram.com/organization8`
                }
            })
            .end((err, res) => {
                expect(res.body.success).to.be.true;
                expect(res).to.have.status(200);
                done();
            });
    });
});

describe('Update an organization: ', () => {
    it('should update an organization', (done) => {
        chai.request(server)
            .put(`/organizations/3`)
            .send({
                name: `Super Organizacion`,
                image: `https://picsum.photos/200?random=200`,
                phone: 1798794,
                address: `Dorrego 3000`,
                welcomeText: `Welcome to Organization Super`,
                socialNetworks: {
                    facebook: `https://www.facebook.com/fundacionresomossuper`,
                    linkedin: `www.linkedin.com/super`,
                    instagram: `www.instagram.com/super`
                }
            })
            .end((err, res) => {
                expect(res.body.success).to.be.true;
                expect(res).to.have.status(200);
                done();
            });
    });
    it('should NOT update an organization, wrong id', (done) => {
        chai.request(server)
            .put(`/organizations/200`)
            .send({
                name: ``,
                image: `https://picsum.photos/200?random=200`,
                phone: 1798794,
                address: `Dorrego 3000`,
                welcomeText: `Welcome to Organization Super`,
                socialNetworks: {
                    facebook: `https://www.facebook.com/fundacionresomossuper`,
                    linkedin: `www.linkedin.com/super`,
                    instagram: `www.instagram.com/super`
                }
            })
            .end((err, res) => {
                expect(res.body.success).to.be.false;
                expect(res).to.have.status(401);
                done();
            });
    });
    it('should NOT update an organization, wrong ID', (done) => {
        chai.request(server)
            .put('/organizations/123')
            .send({
                name: `Super Organizacion`,
                image: `https://picsum.photos/200?random=200`,
                phone: 1798794,
                address: `Dorrego 3000`,
                welcomeText: `Welcome to Organization Super`,
                socialNetworks: {
                    facebook: `https://www.facebook.com/fundacionresomossuper`,
                    linkedin: `www.linkedin.com/super`,
                    instagram: `www.instagram.com/super`
                }
            })
            .end((err, res) => {
                expect(res.body.success).to.be.false;
                expect(res).to.have.status(401);
                done();
            });
    });
});


describe('Delete organization by ID: ', () => {
    it('should delete the organization with ID', (done) => {
        chai.request(server)
            .del(`/organizations/${ongId}`)
            .end((err, res) => {
                expect(res.body.success).to.be.true;
                expect(res).to.have.status(200);
                done();
            });
    });
    it('should NOT delete organization, wrong ID', (done) => {
        chai.request(server)
            .del('/organizations/123')
            .end((err, res) => {
                expect(res.body.success).to.be.false;
                expect(res).to.have.status(401);
                done();
            });
    });
});