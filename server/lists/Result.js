// RESULT
// An individual response to a requirement

const { Text, Relationship, Select } = require("@keystonejs/fields");
const { Wysiwyg } = require("@keystonejs/fields-wysiwyg-tinymce");

module.exports = {
  fields: {
    requirement: {
      type: Relationship,
      ref: "Requirement"
    },
    status: {
      type: Relationship,
      ref: "Status"
    },
    note: {
      type: Text
    }
  }
};
