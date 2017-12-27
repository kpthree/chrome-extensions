chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create(
        "index.html",
        {
            outerBounds: {
                width: 400,
                height: 500
            },
            alwaysOnTop: true,
            focused: true
        },
        function(win) {
            win.contentWindow.onload = function () {
                var webview = win.contentWindow.document.getElementById("webview")
                webview.setAttribute("src", "https://www.primevideo.com/")
            }
        }
    );
});
