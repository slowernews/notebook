// A Chrome extension has the following files:
// * A manifest.json file
// * Optional: One or more HTML files (unless the extension is a theme)
// * Optional: One or more JavaScript files
// * Optional: Any other files your extension needs. e.g. image files

// But how to create a basic Chrome extension?
// Create a simple manifest.json and a JS file.

// e.g. manifest.json file

{
    "manifest_version": 2,                  //v1 will not work anymore
    "name": "My Extension",
    "version": "0.1",
    "content_scripts": [
        {
            "matches": ["<all_urls>"],      // or specific pages: "https://mail.google.com/*"
            "js": ["extension.js"]
        }
    ]
}

// e.g extension.js file
// By default, Chrome injects content scripts after the DOM is complete.

alert("Hello from your Chrome extension!");

// You can already load it on chrome://extensions/ with developer mode activated.
// After making changes, just come back here to update the extension.