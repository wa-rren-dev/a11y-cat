// SPECIFICATION
// A collection of requirements
// e.g. "Version 1"

const { Text, Relationship } = require("@keystonejs/fields");
const { Wysiwyg } = require("@keystonejs/fields-wysiwyg-tinymce");

module.exports = {
  fields: {
    name: {
      type: Text
    },
    requirements: {
      type: Relationship,
      ref: "Requirement",
      many: true
    },
    description: {
      type: Wysiwyg
    }
  }
};
