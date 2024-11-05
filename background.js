chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.insertCSS({
        target: { tabId: tab.id },
        files: ['style.css']
    }).catch((error) => console.log(error));

    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            files: ['content.js']
        },
        () => { chrome.runtime.lastError; }
    );
});
