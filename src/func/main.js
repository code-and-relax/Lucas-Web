// Import the 'annotate' function from the Rough Notation library which is hosted on a CDN.
import { annotate } from "https://unpkg.com/rough-notation?module";

// Listen for the 'DOMContentLoaded' event which fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
document.addEventListener("DOMContentLoaded", function () {
  // Retrieve elements from the document using their specific IDs. These elements are expected to be part of the webpage's DOM.
  const scanText = document.getElementById("anotation_to_scan");
  const realtimeText = document.getElementById("anotation_to_realtime");
  const empoweryouText = document.getElementById("anotation_to_empoweryou");

  // Create annotations on the selected elements with specified styles and types.
  const annotation_ScanText = annotate(scanText, { type: "circle" });
  const annotation_realTimeText = annotate(realtimeText, { type: "underline" });
  const annotation_empowerYouText = annotate(empoweryouText, {
    type: "circle",
  });

  // Display the created annotations immediately upon page load.
  annotation_ScanText.show();
  annotation_realTimeText.show();
  annotation_empowerYouText.show();

  // Select all FAQ headers by a common part of their IDs using the CSS attribute selector that targets any 'h1' tags whose ID starts with 'father-p-'.
  const faqHeaders = document.querySelectorAll('h1[id^="father-p-"]');

  // Iterate over each header element found to apply further functionality.
  faqHeaders.forEach((header) => {
    // Declare a variable to track the visibility state of the annotation.
    let isUnderlined = false;

    // Add a click event listener to the header itself to toggle the visibility of associated content.
    header.addEventListener("click", function () {
      // Extract the numeric part of the header's ID to associate it with a corresponding paragraph.
      const number = this.id.match(/\d+/)[0];
      const paragraph = document.getElementById(`p-${number}-`);
      // Toggle CSS classes that control visibility and styling changes, making the paragraph visible or hidden and changing the header's appearance as "active".
      if (paragraph) {
        paragraph.classList.toggle("visible");
        this.classList.toggle("active");
      }

      isUnderlined = !isUnderlined;
    });
  });
});
