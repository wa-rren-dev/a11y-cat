const { Select } = require("@keystonejs/fields");

module.exports = {
  fields: {
    status: {
      type: Select,
      options: "PASS, FAIL, NOT SURE, NOT APPLICABLE, UNTESTED"
    }
  }
};
