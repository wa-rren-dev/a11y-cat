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
  await keystone.createItems(requirementGroupsData);
  await keystone.createItems(requirementsData);
};
