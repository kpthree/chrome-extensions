(function() {
var t = null;

function download() {
    console.log("downloading");
    var content = []; 
    var data = localStorage.getItem("stores")
    data = JSON.parse(data);
    data.forEach( (d) => { content.push(d.join("\t").trim())} )
    window.location.href = "data:text/tab-separated-values," + encodeURIComponent(content.join("\n"));
}

function getStores() {
    stores = localStorage.getItem("stores")
    if (!stores) {
        stores = [];
    } else {
        stores = JSON.parse(stores);
    }
    currentStores = document.querySelectorAll(".contents a");
    if (!currentStores.length) {
        clearInterval(t);
        download();
        localStorage.setItem("stores", null);
        return;
    }
    currentReviews = document.querySelectorAll(".contents blockquote");
    currentStores.forEach((s, i) => {
        stores.push([s.href, currentReviews[i].innerText])
    })

    localStorage.setItem("stores", JSON.stringify(stores))

    href = window.location.href

    if (href.indexOf("?") == -1) {
        window.location.href = `${href}?rating=1&page=2`
    } else {
        page = href.match(/page=([0-9]+)/);
        page = (page && parseInt(page[1]) + 1) || 2;
        rating = href.match(/rating=([0-9])/);
        rating = rating[1] || 2;
        window.location.href = `https://${window.location.hostname}${window.location.pathname}?rating=${rating}&page=${page}`
    }
}

if (window.location.hostname == "apps.shopify.com") {
    t = setInterval(getStores, 5000);
}

})();

