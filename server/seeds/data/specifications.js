const requirements = require("./requirements").Requirement;

const requirementRelationships = requirements.map((item) => {
  return {
    where: {
      name: item.name,
    },
  };
});

module.exports = {
  Specification: [
    {
      name: "April 2020 (AA)",
      comments: "<i>Initial specification<i>", // using <i> to test html parser
      requirements: requirementRelationships,
    },
  ],
};
