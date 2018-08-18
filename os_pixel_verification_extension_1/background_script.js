chrome.contextMenus.onClicked.addListener(function(tab) {
        var tabID;
        chrome.tabs.getSelected(null, function(tab) {
            tabID = tab.id;
        });
        setInterval(function() {
            chrome.tabs.executeScript(tabID, {
                code: "location.reload()"
            });
        }, 2000);
      });
      var id = chrome.contextMenus.create({
        "title": "Auto Refresh",
        "contexts": ["page"]
      });
var _sokPramObject_temp = []; 
var _sokOsPixelHelper = {
     
   _sokGetParam: function(url){
    var params = {};
    params.requestUrl = url;
    var parser = document.createElement('a');
    parser.href = url;
    var query = parser.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    params[pair[0]] = decodeURIComponent(pair[1]);
    }
    return params;
   
   },
   _sokSetUiValues:function(){
       
    //     for(var i=0;i<_sokPramObject.length;i++){
    //     //    if(_sokPramObject[i].product_category == "default"){ 
    //     //      document.getElementsByName("h3").innerHTML = "Default pixel is fired";
    //     //    }
    //        if(_sokPramObject[i].lead_step = "viewproduct"){ 
    //          console.log(_sokPramObject[i].lead_step);
    //          document.getElementsByTagName("h4").innerHTML = _sokPramObject[i].lead_step;
    //          document.getElementById("sku_id").innerHTML = _sokPramObject[i].sku_id = null?"not defined":_sokPramObject.sku_id;
    //          document.getElementById("sku_url").innerHTML = _sokPramObject[i].sku_url= null?"not defined":_sokPramObject.sku_url;
    //          document.getElementById("product_names").innerHTML = _sokPramObject[i].product_names= null?"not defined":_sokPramObject.product_names;
    //          document.getElementById("product_quantities").innerHTML = _sokPramObject[i].product_quantities= null?"not defined":_sokPramObject.product_quantities;
    //          document.getElementById("product_prices").innerHTML = _sokPramObject[i].product_prices= null?"not defined":_sokPramObject.product_prices;
    //          document.getElementById("product_imageurl").innerHTML = _sokPramObject[i].product_imageurl= null?"not defined":_sokPramObject.product_imageurl;
    //          document.getElementById("breadcrumb").innerHTML = _sokPramObject[i].breadcrumb= null?"not defined": _sokPramObject.breadcrumb;
    //          document.getElementById("currency").innerHTML = _sokPramObject[i].currency= null?"not defined":_sokPramObject.currency;

    //        }
    //         if(_sokPramObject[i].lead_step = "funnel_add2cart"){ 
    //         document.getElementsByTagName("h4").innerHTML = _sokPramObject[i].lead_step;
    //         document.getElementById("sku_id").innerHTML = _sokPramObject[i].sku_id = null?"not defined":_sokPramObject.sku_id;
    //         document.getElementById("sku_url").innerHTML = _sokPramObject[i].sku_url= null?"not defined":_sokPramObject.sku_url;
    //         document.getElementById("product_names").innerHTML = _sokPramObject[i].product_names= null?"not defined":_sokPramObject.product_names;
    //         document.getElementById("product_quantities").innerHTML = _sokPramObject[i].product_quantities= null?"not defined":_sokPramObject.product_quantities;
    //         document.getElementById("product_prices").innerHTML = _sokPramObject[i].product_prices= null?"not defined":_sokPramObject.product_prices;
    //         document.getElementById("product_imageurl").innerHTML = _sokPramObject[i].product_imageurl= null?"not defined":_sokPramObject.product_imageurl;
    //         document.getElementById("breadcrumb").innerHTML = _sokPramObject[i].breadcrumb= null?"not defined": _sokPramObject.breadcrumb;
    //         document.getElementById("currency").innerHTML = _sokPramObject[i].currency= null?"not defined":_sokPramObject.currency;

    //       }
    //    }
    // //    document.getElementById("sku_id").innerHTML = _sokPramObject.sku_id;
    // //    document.getElementById("sku_url").innerHTML = _sokPramObject.sku_url;
    // //    document.getElementById("product_names").innerHTML = _sokPramObject.product_names;
    // //    document.getElementById("product_quantities").innerHTML = _sokPramObject.product_quantities;
    // //    document.getElementById("product_prices").innerHTML = _sokPramObject.product_prices;
    // //    document.getElementById("product_imageurl").innerHTML = _sokPramObject.product_imageurl;
    // //    document.getElementById("breadcrumb").innerHTML = _sokPramObject.breadcrumb;
    // //    document.getElementById("currency").innerHTML = _sokPramObject.currency;
       
   },
   _sokGetRequestObject:function(url){
    _TempSokParamObject= _sokOsPixelHelper._sokGetParam(url);
        // document.getElementById("sku_id").innerHTML = _TempSokParamObject.sku_id;
        // document.getElementById("sku_url").innerHTML = _TempSokParamObject.sku_url;
        // document.getElementById("product_names").innerHTML = _TempSokParamObject.product_names;
        // document.getElementById("product_quantities").innerHTML = _TempSokParamObject.product_quantities;
        // document.getElementById("product_prices").innerHTML = _TempSokParamObject.product_prices;
        // document.getElementById("product_imageurl").innerHTML = _TempSokParamObject.product_imageurl;
        // document.getElementById("breadcrumb").innerHTML = _TempSokParamObject.breadcrumb;
        // document.getElementById("currency").innerHTML = _TempSokParamObject.currency;
       _sokPramObject_temp.push(_TempSokParamObject);
    var int = setTimeout(function(){
        

    },3000);
   
    chrome.storage.local.set({'_sokPramObject':_sokPramObject_temp}, function() {
        console.log("sokparam object  is set");
        console.log(_sokPramObject_temp);
        console.log(_sokPramObject_temp.length);
        
      });
      
}


};
chrome.webRequest.onSendHeaders.addListener(
    function(info) {
        var httpRequestUrl = info.url;
            _sokOsPixelHelper._sokGetRequestObject(httpRequestUrl);
    }, 
    // filters
    {
        urls: [
            "<all_urls>"
        ],
        types: ["image"]
    },
    // extraInfoSpec
    ["requestHeaders"]);

    // 
    
      
 