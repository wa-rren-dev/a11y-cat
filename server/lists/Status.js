const { Select } = require("@keystonejs/fields");

module.exports = {
  fields: {
    status: {
      type: Select,
      options: [
        {
          value: "PASS",
          label: "Pass"
        },
        {
          value: "FAIL",
          label: "Fail"
        },
        {
          value: "NOT_SURE",
          label: "Not Sure"
        },
        {
          value: "NOT_APPLICABLE",
          label: "Not Applicable"
        },
        {
          value: "UNTESTED",
          label: "Untested"
        }
      ]
    }
  }
};
