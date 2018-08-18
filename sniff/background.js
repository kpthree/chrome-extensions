chrome.browserAction.onClicked.addListener(function (tab) {
	// for the current tab, inject the "inject.js" file & execute it
	chrome.tabs.executeScript(tab.ib, {
		file: 'inject.js'
	});
});
console.log("in background.js")
getParams = function (url) {
	var params = {};
	var parser = document.createElement('a');
	parser.href = url;
	var query = parser.search.substring(1);
	var vars = query.split('&');
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
		params[pair[0]] = decodeURIComponent(pair[1]);
	}
	return params;
};
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        details.url.match(/https:\/\/t.o-s.io/) && console.table(getParams(details.url))
    },
    { urls: ["<all_urls>"], types: ["image", "main_frame"] }
);
