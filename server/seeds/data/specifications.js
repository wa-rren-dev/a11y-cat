const requirements = require("./requirements").Requirement;

// all of the current requirements populating the only current specification
const requirementRelationships = requirements.map(item => {
	return {
		where: {
			name: item.name
		}
	};
});

module.exports = {
	Specification: [
		{
			name: "April 2020 (AA)",
			description: "<i>Initial specification<i>", // using <i> to test html parser
			requirements: requirementRelationships
		}
	]
};
