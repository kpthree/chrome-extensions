console.log("in popupjs"); 
var _sokOsPixelHelper_1 = {
     
//    _sokGetParam: function(url){
//     var params = {};
//     params.requestUrl = url;
//     var parser = document.createElement('a');
//     parser.href = url;
//     var query = parser.search.substring(1);
//     var vars = query.split('&');
//     for (var i = 0; i < vars.length; i++) {
//     var pair = vars[i].split('=');_sokPramObject
//     params[pair[0]] = decodeURIComponent(pair[1]);
//     }
//     return params;
   
//    },
   _sokSetUiValues:function(){
       console.log("in setVlaue");
       chrome.storage.local.get('_sokPramObject', function(data) {
         console.log(data);
         var arrayOfSokParamObjects = data;
         console.log(arrayOfSokParamObjects._sokPramObject.length);
      
        for(var i=0;i<arrayOfSokParamObjects._sokPramObject.length;i++){
          console.log("in for loop");
          if(arrayOfSokParamObjects._sokPramObject[i].product_category == "default"){ 
            console.log("in default pixel");
            document.getElementById("_sok_default_pixels").innerHTML = "Default pixel is available";
          }
          if(arrayOfSokParamObjects._sokPramObject[i].lead_step == "viewproduct"){
            var viewproduct_1 = "";
            var viewproduct_2 = "";
            console.log("in viewproduct");
            viewproduct_1 =  document.querySelectorAll("[id=\'_sok_viewProduct\']")[0];
            viewproduct_1.style.display = "block";
            viewproduct_1.querySelectorAll("[class=\'_sok_leadstep\']")[0].innerHTML = arrayOfSokParamObjects._sokPramObject[i].lead_step;
            viewproduct_1.querySelectorAll("[class=\'_sok_sku_id\']")[0].innerHTML = arrayOfSokParamObjects._sokPramObject[i].sku_id;
            viewproduct_1.querySelectorAll("[class=\'_sok_sku_url\']")[0].innerHTML = arrayOfSokParamObjects._sokPramObject[i].sku_url;
            viewproduct_1.querySelectorAll("[class=\'_sok_product_names\']")[0].innerHTML = arrayOfSokParamObjects._sokPramObject[i].product_names;
            viewproduct_1.querySelectorAll("[class=\'_sok_product_quantities\']")[0].innerHTML = arrayOfSokParamObjects._sokPramObject[i].product_quantities;
            viewproduct_1.querySelectorAll("[class=\'_sok_product_prices\']")[0].innerHTML = arrayOfSokParamObjects._sokPramObject[i].product_prices;
            viewproduct_1.querySelectorAll("[class=\'_sok_product_imageurl\']")[0].innerHTML = arrayOfSokParamObjects._sokPramObject[i].product_imageurl;
            viewproduct_1.querySelectorAll("[class=\'_sok_breadcrumb\']")[0].innerHTML = arrayOfSokParamObjects._sokPramObject[i].breadcrumb;
            viewproduct_1.querySelectorAll("[class=\'_sok_currency\']")[0].innerHTML = arrayOfSokParamObjects._sokPramObject[i].currency;
          }
          if(arrayOfSokParamObjects._sokPramObject[i].lead_step == "funnel_add2cart"){
            var viewproduct_1 ="";
            console.log("in add to cart");
            
            viewproduct_1 =  document.querySelectorAll("[id=\'_sok_add2cart\']")[0];
            viewproduct_1.style.display = "block";
            viewproduct_1.querySelectorAll("[class=\'_sok_leadstep\']")[0].innerHTML = arrayOfSokParamObjects._sokPramObject[i].lead_step;
            viewproduct_1.querySelectorAll("[class=\'_sok_sku_id\']")[0].innerHTML = arrayOfSokParamObjects._sokPramObject[i].sku_id;
            viewproduct_1.querySelectorAll("[class=\'_sok_sku_url\']")[0].innerHTML = arrayOfSokParamObjects._sokPramObject[i].sku_url;
            viewproduct_1.querySelectorAll("[class=\'_sok_product_names\']")[0].innerHTML = arrayOfSokParamObjects._sokPramObject[i].product_names;
            viewproduct_1.querySelectorAll("[class=\'_sok_product_quantities\']")[0].innerHTML = arrayOfSokParamObjects._sokPramObject[i].product_quantities;
            viewproduct_1.querySelectorAll("[class=\'_sok_product_prices\']")[0].innerHTML = arrayOfSokParamObjects._sokPramObject[i].product_prices;
            viewproduct_1.querySelectorAll("[class=\'_sok_product_imageurl\']")[0].innerHTML = arrayOfSokParamObjects._sokPramObject[i].product_imageurl;
            viewproduct_1.querySelectorAll("[class=\'_sok_breadcrumb\']")[0].innerHTML = arrayOfSokParamObjects._sokPramObject[i].breadcrumb;
            viewproduct_1.querySelectorAll("[class=\'_sok_currency\']")[0].innerHTML = arrayOfSokParamObjects._sokPramObject[i].currency;
       

          }
          if(arrayOfSokParamObjects._sokPramObject[i].lead_step == "funnel_revieworder"){
            var viewproduct_1 ="";
            console.log(arrayOfSokParamObjects._sokPramObject[i].product_names);
            console.log(arrayOfSokParamObjects._sokPramObject[i].sku_id);
            viewproduct_1 =  document.querySelectorAll("[id=\'_sok_revieworder\']")[0];
            viewproduct_1.style.display = "block";
            viewproduct_1.querySelectorAll("[class=\'_sok_leadstep\']")[0].innerHTML = arrayOfSokParamObjects._sokPramObject[i].lead_step;
            viewproduct_1.querySelectorAll("[class=\'_sok_sku_id\']")[0].innerHTML = arrayOfSokParamObjects._sokPramObject[i].sku_id;
            viewproduct_1.querySelectorAll("[class=\'_sok_sku_url\']")[0].innerHTML = arrayOfSokParamObjects._sokPramObject[i].sku_url;
            viewproduct_1.querySelectorAll("[class=\'_sok_product_names\']")[0].innerHTML = arrayOfSokParamObjects._sokPramObject[i].product_names;
            viewproduct_1.querySelectorAll("[class=\'_sok_product_quantities\']")[0].innerHTML = arrayOfSokParamObjects._sokPramObject[i].product_quantities;
            viewproduct_1.querySelectorAll("[class=\'_sok_cartamount\']")[0].innerHTML = arrayOfSokParamObjects._sokPramObject[i].cart_amount;
            viewproduct_1.querySelectorAll("[class=\'_sok_currency\']")[0].innerHTML = arrayOfSokParamObjects._sokPramObject[i].currency;
          }
          if(arrayOfSokParamObjects._sokPramObject[i].lead_step == "funnel_checkout"){
            var viewproduct_1 ="";
            console.log(arrayOfSokParamObjects._sokPramObject[i].product_names);
            console.log(arrayOfSokParamObjects._sokPramObject[i].sku_id);
            viewproduct_1 =  document.querySelectorAll("[id=\'_sok_checkout\']")[0];
            viewproduct_1.style.display = "block";
            viewproduct_1.querySelectorAll("[class=\'_sok_leadstep\']")[0].innerHTML = arrayOfSokParamObjects._sokPramObject[i].lead_step;
            viewproduct_1.querySelectorAll("[class=\'_sok_sku_id\']")[0].innerHTML = arrayOfSokParamObjects._sokPramObject[i].sku_id;
            viewproduct_1.querySelectorAll("[class=\'_sok_sku_url\']")[0].innerHTML = arrayOfSokParamObjects._sokPramObject[i].sku_url;
            viewproduct_1.querySelectorAll("[class=\'_sok_product_names\']")[0].innerHTML = arrayOfSokParamObjects._sokPramObject[i].product_names;
            viewproduct_1.querySelectorAll("[class=\'_sok_product_quantities\']")[0].innerHTML = arrayOfSokParamObjects._sokPramObject[i].product_quantities;
            viewproduct_1.querySelectorAll("[class=\'_sok_cartamount\']")[0].innerHTML = arrayOfSokParamObjects._sokPramObject[i].cart_amount;
            viewproduct_1.querySelectorAll("[class=\'_sok_currency\']")[0].innerHTML = arrayOfSokParamObjects._sokPramObject[i].currency;
      }
          if(arrayOfSokParamObjects._sokPramObject[i].lead_step == "funnel_salestart"){
            var viewproduct_1 ="";
            console.log(arrayOfSokParamObjects._sokPramObject[i].product_names);
            console.log(arrayOfSokParamObjects._sokPramObject[i].sku_id);
            viewproduct_1 =  document.querySelectorAll("[id=\'_sok_salestart\']")[0];
            viewproduct_1.style.display = "block";
            viewproduct_1.querySelectorAll("[class=\'_sok_leadstep\']")[0].innerHTML = arrayOfSokParamObjects._sokPramObject[i].lead_step;
            viewproduct_1.querySelectorAll("[class=\'_sok_sku_id\']")[0].innerHTML = arrayOfSokParamObjects._sokPramObject[i].sku_id;
            viewproduct_1.querySelectorAll("[class=\'_sok_product_names\']")[0].innerHTML = arrayOfSokParamObjects._sokPramObject[i].product_names;
            viewproduct_1.querySelectorAll("[class=\'_sok_product_quantities\']")[0].innerHTML = arrayOfSokParamObjects._sokPramObject[i].product_quantities;
            viewproduct_1.querySelectorAll("[class=\'_sok_sale\']")[0].innerHTML = arrayOfSokParamObjects._sokPramObject[i].sales;
            viewproduct_1.querySelectorAll("[class=\'_sok_currency\']")[0].innerHTML = arrayOfSokParamObjects._sokPramObject[i].currency;
            viewproduct_1.querySelectorAll("[class=\'_sok_cust_email\']")[0].innerHTML = arrayOfSokParamObjects._sokPramObject[i].cust_email;
 
          }
          if(arrayOfSokParamObjects._sokPramObject[i].lead_step == "funnel_salecomplete"){
            var viewproduct_1 ="";
            console.log(arrayOfSokParamObjects._sokPramObject[i].product_names);
            console.log(arrayOfSokParamObjects._sokPramObject[i].sku_id);
            viewproduct_1 =  document.querySelectorAll("[id=\'_sok_salecomplete\']")[0];
            viewproduct_1.style.display = "block";
            viewproduct_1.querySelectorAll("[class=\'_sok_leadstep\']")[0].innerHTML = arrayOfSokParamObjects._sokPramObject[i].lead_step;
            viewproduct_1.querySelectorAll("[class=\'_sok_sku_id\']")[0].innerHTML = arrayOfSokParamObjects._sokPramObject[i].sku_id;
            viewproduct_1.querySelectorAll("[class=\'_sok_product_names\']")[0].innerHTML = arrayOfSokParamObjects._sokPramObject[i].product_names;
            viewproduct_1.querySelectorAll("[class=\'_sok_product_quantities\']")[0].innerHTML = arrayOfSokParamObjects._sokPramObject[i].product_quantities;
            viewproduct_1.querySelectorAll("[class=\'_sok_sale\']")[0].innerHTML = arrayOfSokParamObjects._sokPramObject[i].sales;
            viewproduct_1.querySelectorAll("[class=\'_sok_currency\']")[0].innerHTML = arrayOfSokParamObjects._sokPramObject[i].currency;
            viewproduct_1.querySelectorAll("[class=\'_sok_cust_email\']")[0].innerHTML = arrayOfSokParamObjects._sokPramObject[i].cust_email;
          }
              
           }
         });
       }
   
}
_sokOsPixelHelper_1._sokSetUiValues();
refresh = function(){
  document.getElementById('refresh').onclick = function() {
    chrome.storage.local.clear();
    chrome.runtime.reload();
    window.location.reload(true);
  }
}();