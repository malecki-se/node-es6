const expect = require("chai").expect;
const app = require('../app');

describe('App', () => {
	it('show collection', () => {
		const comp = [{ item: 1 }, { item: 2 }];
		const collection = app.collection;
		
		expect(collection).to.be.an('array').to.deep.equal(comp);
	});
});
