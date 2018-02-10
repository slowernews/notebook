// Each extension has the following files:
//
// a) A manifest.json file
// b) Optional: One or more HTML files (unless the extension is a theme)
// c) Optional: One or more JavaScript files
// d) Optional: Any other files your extension needs—for example, image files
//
// * Create a simple manifest.json
// You can already load it on chrome://extensions/ after activating developer mode.
// Just come back here and reload the page to update the extension.

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

// * Create a extension.js file. E.g.
// By default, Chrome injects content scripts after the DOM is complete.

alert("Hello from your Chrome extension!")