chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, { allFrames: true, file: "node_modules/tesseract.js/dist/tesseract.js" }, function() {
        chrome.tabs.executeScript(null, { allFrames: true, file: "js/content-script.js" });
    });
});