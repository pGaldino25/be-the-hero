const generateUniqueId = require ('../../src/utils/generateUniqueId');
const { intersect } = require('../../src/database/connection');

describe('Generate Unique ID', () => {
    it('Should generate an unique ID', () => {
        const id = generateUniqueId();

        expect(id).toHaveLength(8);
    });
});