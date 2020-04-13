// TEST
// The a11y results for a single entity
// e.g. "http://aims.com/login"

const { Text, Relationship } = require("@keystonejs/fields");
const { Wysiwyg } = require("@keystonejs/fields-wysiwyg-tinymce");

module.exports = {
  fields: {
    name: {
      type: Text // "Home page"
    },
    url: {
      type: Text // "example.com/home"
    },
    description: {
      type: Wysiwyg // "after new home page design"
    },
    specification: {
      type: Relationship,
      ref: "Specification"
    }
  }
};
