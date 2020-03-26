// TEST
// The a11y results for a single entity
// e.g. "http://aims.com/login"

const { Text, Relationship } = require("@keystonejs/fields");
const { Wysiwyg } = require("@keystonejs/fields-wysiwyg-tinymce");

module.exports = {
  fields: {
    name: {
      type: Text
    },
    url: {
      type: Text
    },
    specification: {
      type: Relationship,
      ref: "Specification"
    },
    comments: {
      type: Wysiwyg
    }
  }
};
