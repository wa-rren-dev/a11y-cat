const statusesData = require("./data/statusesData");

module.exports = async keystone => {
	const {
		data: {
			_allStatusesMeta: { count }
		}
	} = await keystone.executeQuery(
		`query {
      _allStatusesMeta {
        count
      }
    }`
	);
	// presuming if you've got anything there then you don't need this populating
	if (count === 0) {
		console.log(`
    populating initial statuses
    `);
		await keystone.createItems(statusesData);
	}
};
