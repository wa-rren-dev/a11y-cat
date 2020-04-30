module.exports = {
	Requirement: [
		{
			name: "Run aXe browser extension",
			shortSupport: "",
			longSupport: "",
			section: { where: { name: "In-browser automated tests" } },
			shortDescription:
				"<p>If the page has dynamic content (the DOM is manipulated and markup is amended programatically) then you need to put your page into a state in which it can be tested first.</p>",
			longDescription: "",
			displayOrder: 1
		},
		{
			name: "Header tag order",
			shortSupport: "",
			longSupport: "",
			shortDescription: "<p>Are headings in the correct order?</p>",
			longDescription: "",
			displayOrder: 1,
			section: { where: { name: "Markup Review" } }
		},
		{
			name: "Landmark wrapping",
			shortSupport: "",
			longSupport: "",
			shortDescription: "<p>Are all page elements contained in a landmark?</p>",
			longDescription: "",
			displayOrder: 2,
			section: { where: { name: "Markup Review" } }
		},
		{
			name: "Landmark duplication",
			shortSupport: "",
			longSupport: "",
			shortDescription:
				"<p>Is there only one &lt;header&gt;, &lt;main&gt; and &lt;footer&gt; on the page?</p>",
			longDescription: "",
			displayOrder: 3,
			section: { where: { name: "Markup Review" } }
		},
		{
			name: "1st level heading",
			shortSupport: "",
			longSupport: "",
			shortDescription:
				"<p>Is there one &lt;h1&gt; on this page and does it accurately convey what's unique about this page?</p>",
			longDescription: "",
			displayOrder: 4,
			section: { where: { name: "Markup Review" } }
		},
		{
			name: "Page title",
			shortSupport: "",
			longSupport: "",
			shortDescription:
				"<p>Does the page title accurately describe what's unique about this page?</p>",
			longDescription: "",
			displayOrder: 5,
			section: { where: { name: "Markup Review" } }
		},
		{
			name: "Valid markup",
			shortSupport: "",
			longSupport: "",
			shortDescription:
				"<p>Does the markup validate, and where it doesn't, is there justifyable reason for it?</p>",
			longDescription: "",
			displayOrder: 6,
			section: { where: { name: "Markup Review" } }
		},
		{
			name: "Tabbing",
			shortSupport: "",
			longSupport: "",
			shortDescription: "<p>Can you tab to everything you can click on?</p>",
			longDescription: "",
			displayOrder: 1,
			section: { where: { name: "Keyboard Access" } }
		},
		{
			name: "Tabbing order",
			shortSupport: "",
			longSupport: "",
			shortDescription:
				"<p>Does tabbing follow a logical order? Generally top-left to bottom-right?</p>",
			longDescription: "",
			displayOrder: 2,
			section: { where: { name: "Keyboard Access" } }
		},
		{
			name: "Focus",
			shortSupport: "",
			longSupport: "",
			shortDescription:
				"<p>Is the current keyboard focus obvious on every tabbable element, or do you sometimes not know where you are?</p>",
			longDescription: "",
			displayOrder: 3,
			section: { where: { name: "Keyboard Access" } }
		},
		{
			name: "Forms",
			shortSupport: "",
			longSupport: "",
			shortDescription:
				"<p>Fully complete a form - check the ability to use radio buttons and checkboxes</p>",
			longDescription: "",
			displayOrder: 4,
			section: { where: { name: "Keyboard Access" } }
		},
		{
			name: "Non-visual controls",
			shortSupport: "",
			longSupport: "",
			shortDescription:
				'<p>Ensure you\'re not able to tab into controls that are visually hidden (unless they are present as an accessibility feature e.g. "Skip to content" links</p>',
			longDescription: "",
			displayOrder: 5,
			section: { where: { name: "Keyboard Access" } }
		},
		{
			name: "Persistent modals",
			shortSupport: "",
			longSupport: "",
			shortDescription:
				"<p>Modal or modal-like interfaces should prevent tabbing back to the main content until the modal is closed</p>",
			longDescription: "",
			displayOrder: 6,
			section: { where: { name: "Keyboard Access" } }
		},
		{
			name: "Esc!",
			shortSupport: "",
			longSupport: "",
			shortDescription:
				"<p>Can you use the esc key to close modals or other dynamic interfaces?</p>",
			longDescription: "",
			displayOrder: 7,
			section: { where: { name: "Keyboard Access" } }
		},
		{
			name: "Is the user informed of page updates?",
			shortSupport: "",
			longSupport: "",
			shortDescription:
				"<p>If you interact with the page in a manner which modifies the DOM, is the screenreader notified of this?</p>",
			longDescription: "",
			displayOrder: 1,
			section: { where: { name: "Screen reader" } }
		},
		{
			name: "Jump to headings",
			shortSupport: "",
			longSupport: "",
			shortDescription:
				"<p>Use the screen reader shortcut key to jump between headings on the page. Is the page's content easily accessible if navigating this way?</p>",
			longDescription: "",
			displayOrder: 2,
			section: { where: { name: "Screen reader" } }
		},
		{
			name: "Jump to landmarks",
			shortSupport: "",
			longSupport: "",
			shortDescription:
				"<p>Use the screen reader shortcut key to jump between landmark regions on the page. Is the page's content easily accessible if navigating this way?</p>",
			longDescription: "",
			displayOrder: 3,
			section: { where: { name: "Screen reader" } }
		},
		{
			name: "Skip links",
			shortSupport: "",
			longSupport: "",
			shortDescription:
				"<p>Can you skip repetative or large amounts of supporting content?</p>",
			longDescription: "",
			displayOrder: 4,
			section: { where: { name: "Screen reader" } }
		},
		{
			name: "Descriptive titles",
			shortSupport: "",
			longSupport: "",
			shortDescription:
				"<p>Do the headings accurately describe the content they preceed?</p>",
			longDescription: "",
			displayOrder: 5,
			section: { where: { name: "Screen reader" } }
		},
		{
			name: "Content graphics",
			shortSupport: "",
			longSupport: "",
			shortDescription:
				"<p>Are there accurate text shortDescriptions of images that contain content (not purely decorative imagery)?</p>",
			longDescription: "",
			displayOrder: 6,
			section: { where: { name: "Screen reader" } }
		},
		{
			name: "Form submission error handling",
			shortSupport: "",
			longSupport: "",
			shortDescription:
				"<p>Is it easy to recover, amend and resubmit a form with focus pulled to a summary of form errors?</p>",
			longDescription: "",
			displayOrder: 7,
			section: { where: { name: "Screen reader" } }
		},
		{
			name: "Form validation error handling",
			shortSupport: "",
			longSupport: "",
			shortDescription:
				"<p>If a single form input fails validation, is it obvious to the user?</p>",
			longDescription: "",
			displayOrder: 8,
			section: { where: { name: "Screen reader" } }
		},
		{
			name: "Form completion",
			shortSupport: "",
			longSupport: "",
			shortDescription:
				"<p>Can you fill in and submit any forms by using a screen reader only?</p>",
			longDescription: "",
			displayOrder: 8,
			section: { where: { name: "Screen reader" } }
		},
		{
			name: "Mobile reflow",
			shortSupport: "",
			longSupport: "",
			shortDescription:
				"<p>Page must reflow to 320 CSS pixels and scroll vertically</p>",
			longDescription: "",
			displayOrder: 1,
			section: { where: { name: "Visual inspection" } }
		},
		{
			name: "Screen zoom",
			shortSupport: "",
			longSupport: "",
			shortDescription:
				"<p>Use a screen zoom application like windows magnifier</p>",
			longDescription: "",
			displayOrder: 2,
			section: { where: { name: "Visual inspection" } }
		},
		{
			name: "Colour contrast",
			shortSupport: "",
			longSupport: "",
			shortDescription:
				"<p>Do you lose information or context if the page is set to greyscale?</p>",
			longDescription: "",
			displayOrder: 3,
			section: { where: { name: "Visual inspection" } }
		},
		{
			name: "Disable all CSS",
			shortSupport: "",
			longSupport: "",
			shortDescription: "<p>Does the flow of the page still make sense?</p>",
			longDescription: "",
			displayOrder: 4,
			section: { where: { name: "Visual inspection" } }
		},
		{
			name: "Zoom to 200%",
			shortSupport: "",
			longSupport: "",
			shortDescription:
				"<p>Is the page still fully usable if the browser is zoomed to 200%?</p>",
			longDescription: "",
			displayOrder: 5,
			section: { where: { name: "Visual inspection" } }
		}
	]
};
