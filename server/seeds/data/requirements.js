module.exports = {
  Requirement: [
    {
      name: "Run aXe browser extension",
      section: { where: { name: "In-browser automated tests" } },
      description:
        "If the page has dynamic content (the DOM is manipulated and markup is amended programatically) then you need to put your page into a state in which it can be tested first.",
      displayOrder: 1
    },
    {
      name: "Header tag order",
      description: "Are headings in the correct order?",
      displayOrder: 1,
      section: { where: { name: "Markup Review" } }
    },
    {
      name: "Landmark wrapping",
      description: "Are all page elements contained in a landmark?",
      displayOrder: 2,
      support:
        "List of allowed ARIA roles can be found at https://www.w3.org/TR/wai-aria-1.1/#landmark_roles",
      section: { where: { name: "Markup Review" } }
    },
    {
      name: "Landmark duplication",
      description:
        "Is there only one <header>, <main> and <footer> on the page?",
      displayOrder: 3,
      section: { where: { name: "Markup Review" } }
    },
    {
      name: "1st level heading",
      description:
        "Is there one <h1> on this page and does it accurately convey what's unique about this page?",
      displayOrder: 4,
      section: { where: { name: "Markup Review" } }
    },
    {
      name: "Page title",
      description:
        "Does the page title accurately describe what's unique about this page?",
      displayOrder: 5,
      section: { where: { name: "Markup Review" } }
    },
    {
      name: "Valid markup",
      description:
        "Does the markup validate, and where it doesn't, is there justifyable reason for it?",
      displayOrder: 6,
      section: { where: { name: "Markup Review" } }
    },
    {
      name: "Tabbing",
      description: "Can you tab to everything you can click on?",
      displayOrder: 1,
      section: { where: { name: "Keyboard Access" } }
    },
    {
      name: "Tabbing order",
      description:
        "Does tabbing follow a logical order? Generally top-left to bottom-right?",
      displayOrder: 2,
      section: { where: { name: "Keyboard Access" } }
    },
    {
      name: "Focus",
      description:
        "Is the current keyboard focus obvious on every tabbable element, or do you sometimes not know where you are?",
      displayOrder: 3,
      section: { where: { name: "Keyboard Access" } }
    },
    {
      name: "Forms",
      description:
        "Fully complete a form - check the ability to use radio buttons and checkboxes",
      displayOrder: 4,
      section: { where: { name: "Keyboard Access" } }
    },
    {
      name: "Non-visual controls",
      description:
        'Ensure you\'re not able to tab into controls that are visually hidden (unless they are present as an accessibility feature e.g. "Skip to content" links',
      displayOrder: 5,
      section: { where: { name: "Keyboard Access" } }
    },
    {
      name: "Persistent modals",
      description:
        "Modal or modal-like interfaces should prevent tabbing back to the main content until the modal is closed",
      displayOrder: 6,
      section: { where: { name: "Keyboard Access" } }
    },
    {
      name: "Esc!",
      description:
        "Can you use the esc key to close modals or other dynamic interfaces?",
      displayOrder: 7,
      section: { where: { name: "Keyboard Access" } }
    },
    {
      name: "Is the user informed of page updates?",
      description:
        "If you interact with the page in a manner which modifies the DOM, is the screenreader notified of this?",
      displayOrder: 1,
      section: { where: { name: "Screen reader" } }
    },
    {
      name: "Jump to headings",
      description:
        "Use the screen reader shortcut key to jump between headings on the page. Is the page's content easily accessible if navigating this way?",
      displayOrder: 2,
      section: { where: { name: "Screen reader" } }
    },
    {
      name: "Jump to landmarks",
      description:
        "Use the screen reader shortcut key to jump between landmark regions on the page. Is the page's content easily accessible if navigating this way?",
      displayOrder: 3,
      section: { where: { name: "Screen reader" } }
    },
    {
      name: "Skip links",
      description:
        "Can you skip repetative or large amounts of supporting content?",
      displayOrder: 4,
      section: { where: { name: "Screen reader" } }
    },
    {
      name: "Descriptive titles",
      description:
        "Do the headings accurately describe the content they preceed?",
      displayOrder: 5,
      section: { where: { name: "Screen reader" } }
    },
    {
      name: "Content graphics",
      description:
        "Are there accurate text descriptions of images that contain content (not purely decorative imagery)?",
      displayOrder: 6,
      section: { where: { name: "Screen reader" } }
    },
    {
      name: "Form submission error handling",
      description:
        "Is it easy to recover, amend and resubmit a form with focus pulled to an error summary?",
      displayOrder: 7,
      section: { where: { name: "Screen reader" } }
    },
    {
      name: "Form validation error handling",
      description:
        "If a single form input fails validation, is it obvious to the user?",
      displayOrder: 8,
      section: { where: { name: "Screen reader" } }
    },
    {
      name: "Mobile reflow",
      description: "Page must reflow to 320 CSS pixels and scroll vertically",
      displayOrder: 1,
      section: { where: { name: "Visual inspection" } }
    },
    {
      name: "Screen zoom",
      description: "Use a screen zoom application like windows magnifier",
      displayOrder: 2,
      section: { where: { name: "Visual inspection" } }
    },
    {
      name: "Colour contrast",
      description:
        "Do you lose information or context if the page is set to greyscale?",
      displayOrder: 3,
      section: { where: { name: "Visual inspection" } }
    },
    {
      name: "Disable all CSS",
      description: "Does the flow of the page still make sense?",
      displayOrder: 4,
      section: { where: { name: "Visual inspection" } }
    },
    {
      name: "Zoom to 200%",
      description:
        "Is the page still fully usable if the browser is zoomed to 200%?",
      displayOrder: 5,
      section: { where: { name: "Visual inspection" } }
    }
  ]
};
