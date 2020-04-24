module.exports = {
	Requirement: [
		{
			name: "Run aXe browser extension",
			shortSupport: "",
			longSupport: "",
			section: { where: { name: "In-browser automated tests" } },
			shortDescription:
				"If the page has dynamic content (the DOM is manipulated and markup is amended programatically) then you need to put your page into a state in which it can be tested first.",
			longDescription: "",
			displayOrder: 1
		},
		{
			name: "Header tag order",
			shortSupport: "",
			longSupport: "",
			shortDescription: "Are headings in the correct order?",
			longDescription: "",
			displayOrder: 1,
			section: { where: { name: "Markup Review" } }
		},
		{
			name: "Landmark wrapping",
			shortSupport: "",
			longSupport: "",
			shortDescription: "Are all page elements contained in a landmark?",
			longDescription: "",
			displayOrder: 2,
			section: { where: { name: "Markup Review" } }
		},
		{
			name: "Landmark duplication",
			shortSupport: "",
			longSupport: "",
			shortDescription:
				"Is there only one <header>, <main> and <footer> on the page?",
			longDescription: "",
			displayOrder: 3,
			section: { where: { name: "Markup Review" } }
		},
		{
			name: "1st level heading",
			shortSupport: "",
			longSupport: "",
			shortDescription:
				"Is there one <h1> on this page and does it accurately convey what's unique about this page?",
			longDescription: "",
			displayOrder: 4,
			section: { where: { name: "Markup Review" } }
		},
		{
			name: "Page title",
			shortSupport: "",
			longSupport: "",
			shortDescription:
				"Does the page title accurately describe what's unique about this page?",
			longDescription: "",
			displayOrder: 5,
			section: { where: { name: "Markup Review" } }
		},
		{
			name: "Valid markup",
			shortSupport: "",
			longSupport: "",
			shortDescription:
				"Does the markup validate, and where it doesn't, is there justifyable reason for it?",
			longDescription: "",
			displayOrder: 6,
			section: { where: { name: "Markup Review" } }
		},
		{
			name: "Tabbing",
			shortSupport: "",
			longSupport: "",
			shortDescription: "Can you tab to everything you can click on?",
			longDescription: "",
			displayOrder: 1,
			section: { where: { name: "Keyboard Access" } }
		},
		{
			name: "Tabbing order",
			shortSupport: "",
			longSupport: "",
			shortDescription:
				"Does tabbing follow a logical order? Generally top-left to bottom-right?",
			longDescription: "",
			displayOrder: 2,
			section: { where: { name: "Keyboard Access" } }
		},
		{
			name: "Focus",
			shortSupport: "",
			longSupport: "",
			shortDescription:
				"Is the current keyboard focus obvious on every tabbable element, or do you sometimes not know where you are?",
			longDescription: "",
			displayOrder: 3,
			section: { where: { name: "Keyboard Access" } }
		},
		{
			name: "Forms",
			shortSupport: "",
			longSupport: "",
			shortDescription:
				"Fully complete a form - check the ability to use radio buttons and checkboxes",
			longDescription: "",
			displayOrder: 4,
			section: { where: { name: "Keyboard Access" } }
		},
		{
			name: "Non-visual controls",
			shortSupport: "",
			longSupport: "",
			shortDescription:
				'Ensure you\'re not able to tab into controls that are visually hidden (unless they are present as an accessibility feature e.g. "Skip to content" links',
			longDescription: "",
			displayOrder: 5,
			section: { where: { name: "Keyboard Access" } }
		},
		{
			name: "Persistent modals",
			shortSupport: "",
			longSupport: "",
			shortDescription:
				"Modal or modal-like interfaces should prevent tabbing back to the main content until the modal is closed",
			longDescription: "",
			displayOrder: 6,
			section: { where: { name: "Keyboard Access" } }
		},
		{
			name: "Esc!",
			shortSupport: "",
			longSupport: "",
			shortDescription:
				"Can you use the esc key to close modals or other dynamic interfaces?",
			longDescription: "",
			displayOrder: 7,
			section: { where: { name: "Keyboard Access" } }
		},
		{
			name: "Is the user informed of page updates?",
			shortSupport: "",
			longSupport: "",
			shortDescription:
				"If you interact with the page in a manner which modifies the DOM, is the screenreader notified of this?",
			longDescription: "",
			displayOrder: 1,
			section: { where: { name: "Screen reader" } }
		},
		{
			name: "Jump to headings",
			shortSupport: "",
			longSupport: "",
			shortDescription:
				"Use the screen reader shortcut key to jump between headings on the page. Is the page's content easily accessible if navigating this way?",
			longDescription: "",
			displayOrder: 2,
			section: { where: { name: "Screen reader" } }
		},
		{
			name: "Jump to landmarks",
			shortSupport: "",
			longSupport: "",
			shortDescription:
				"Use the screen reader shortcut key to jump between landmark regions on the page. Is the page's content easily accessible if navigating this way?",
			longDescription: "",
			displayOrder: 3,
			section: { where: { name: "Screen reader" } }
		},
		{
			name: "Skip links",
			shortSupport: "",
			longSupport: "",
			shortDescription:
				"Can you skip repetative or large amounts of supporting content?",
			longDescription: "",
			displayOrder: 4,
			section: { where: { name: "Screen reader" } }
		},
		{
			name: "Descriptive titles",
			shortSupport: "",
			longSupport: "",
			shortDescription:
				"Do the headings accurately describe the content they preceed?",
			longDescription: "",
			displayOrder: 5,
			section: { where: { name: "Screen reader" } }
		},
		{
			name: "Content graphics",
			shortSupport: "",
			longSupport: "",
			shortDescription:
				"Are there accurate text shortDescriptions of images that contain content (not purely decorative imagery)?",
			longDescription: "",
			displayOrder: 6,
			section: { where: { name: "Screen reader" } }
		},
		{
			name: "Form submission error handling",
			shortSupport: "",
			longSupport: "",
			shortDescription:
				"Is it easy to recover, amend and resubmit a form with focus pulled to a summary of form errors?",
			longDescription: "",
			displayOrder: 7,
			section: { where: { name: "Screen reader" } }
		},
		{
			name: "Form validation error handling",
			shortSupport: "",
			longSupport: "",
			shortDescription:
				"If a single form input fails validation, is it obvious to the user?",
			longDescription: "",
			displayOrder: 8,
			section: { where: { name: "Screen reader" } }
		},
		{
			name: "Form completion",
			shortSupport: "",
			longSupport: "",
			shortDescription:
				"Can you fill in and submit any forms by using a screen reader only?",
			longDescription: "",
			displayOrder: 8,
			section: { where: { name: "Screen reader" } }
		},
		{
			name: "Mobile reflow",
			shortSupport: "",
			longSupport: "",
			shortDescription: "Page must reflow to 320 CSS pixels and scroll vertically",
			longDescription: "",
			displayOrder: 1,
			section: { where: { name: "Visual inspection" } }
		},
		{
			name: "Screen zoom",
			shortSupport: "",
			longSupport: "",
			shortDescription: "Use a screen zoom application like windows magnifier",
			longDescription: "",
			displayOrder: 2,
			section: { where: { name: "Visual inspection" } }
		},
		{
			name: "Colour contrast",
			shortSupport: "",
			longSupport: "",
			shortDescription:
				"Do you lose information or context if the page is set to greyscale?",
			longDescription: "",
			displayOrder: 3,
			section: { where: { name: "Visual inspection" } }
		},
		{
			name: "Disable all CSS",
			shortSupport: "",
			longSupport: "",
			shortDescription: "Does the flow of the page still make sense?",
			longDescription: "",
			displayOrder: 4,
			section: { where: { name: "Visual inspection" } }
		},
		{
			name: "Zoom to 200%",
			shortSupport: "",
			longSupport: "",
			shortDescription:
				"Is the page still fully usable if the browser is zoomed to 200%?",
			longDescription: "",
			displayOrder: 5,
			section: { where: { name: "Visual inspection" } }
		}
	]
};
