$(function(){
  //获取跳转携带的值
	var name=decodeURI(getParam("name"));
	$("#myTitle").text(name);
	
	console.log(name);
  
    $("#login").click(function (e) { 
      window.open("../papers/login.html","_self");
        
    });

    function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}


 function getParam(paramName){  
       paramValue = "", isFound = !1;  
       if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1)         
      {  
       arrSource = unescape(this.location.search).substring(1, 
       this.location.search.length).split("&"), i = 0;  
       while (i < arrSource.length && !isFound) arrSource[i].indexOf("=") > 0 && 
       arrSource[i].split("=")[0].toLowerCase() ==                 paramName.toLowerCase() && (paramValue = arrSource[i].split("=")[1], isFound = !0), i++  
        }  
   return paramValue == "" && (paramValue = null), paramValue  
}


})