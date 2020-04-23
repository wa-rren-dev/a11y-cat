const services = require("./data/services.js");

module.exports = async keystone => {
	// Count existing services
	const {
		data: {
			_allServicesMeta: { count }
		}
	} = await keystone.executeQuery(
		`query {
      _allServicesMeta {
        count
      }
    }`
	);

	// presuming if you've got anything there then you don't need this populating
	if (count === 0) {
		console.log(`
    populating initial services
    `);
		await keystone.createItems(services);
	}
};
