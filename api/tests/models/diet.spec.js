const { Recipe, Diet, conn } = require("../../src/db.js");
const { expect } = require("chai");

describe('Diet model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
/* describe('Validators', () => {
    beforeEach(() => Recipe.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Recipe.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Recipe.create({ name: 'Milanesa a la napolitana' });
      });
    });
  }); */
//test hecho por mi
 describe('Validators', () => {
    beforeEach(() => Diet.sync({ force: true }));
    describe('diet name', () => {
      it('should throw an error if name is null', (done) => {
        Diet.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name, and create it', async function () {
        const diet = await Diet.create({ name: 'celiaco' });
        expect(diet.name).to.equal("celiaco")
      });
    });
  });
});
