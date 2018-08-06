chrome.browserAction.onClicked.addListener(function (tab) {
	// for the current tab, inject the "inject.js" file & execute it
	chrome.tabs.executeScript(tab.ib, {
		file: 'inject.js'
	});
});
console.log("in background.js")
console.log(window.location.href)
chrome.runtime.onMessage.addListener(function () {
	// for the current tab, inject the "inject.js" file & execute it
	chrome.tabs.executeScript({
		file: 'inject.js'
	});
});
