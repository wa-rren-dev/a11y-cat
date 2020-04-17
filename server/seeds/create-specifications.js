const specificationsData = require("./data/specifications");

module.exports = async keystone => {
	const {
		data: {
			_allSpecificationsMeta: { count }
		}
	} = await keystone.executeQuery(
		`query {
      _allSpecificationsMeta {
        count
      }
    }`
	);
	// presuming if you've got anything there then you don't need this populating
	if (count === 0) {
		console.log(`
    populating initial specifications
    `);
		await keystone.createItems(specificationsData);
	}
};
