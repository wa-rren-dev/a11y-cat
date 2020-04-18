const requirementGroupsData = require("./data/requirementGroups");
const requirementsData = require("./data/requirements");

module.exports = async keystone => {
	const {
		data: {
			_allRequirementGroupsMeta: { count }
		}
	} = await keystone.executeQuery(
		`query {
      _allRequirementGroupsMeta {
        count
      }
    }`
	);
	// presuming if you already have requirement groups that you've got everything for the time being
	if (count === 0) {
		console.log(`
    populating initial requirement groups`);
		await keystone.createItems(requirementGroupsData);
		console.log(`
    populating initial requirements
    `);
		await keystone.createItems(requirementsData);
	}
};
