$(function(){
    $(".loginButton").click(function (e) { 
    var userName=$("#usernameinput").val();
    var password=$("#passwordinput").val();
    console.log("用户名"+userName+"----密码："+password);
    

       $.getJSON("http://192.168.1.106:8080/loginMy?username="+userName+"&password="+password, "",
           function (data, textStatus, jqXHR) {
               console.log(data);
               
           }
       );
    
    });
})