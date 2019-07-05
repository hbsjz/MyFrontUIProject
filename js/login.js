$(function(){
    $(".loginButton").click(function (e) { 
    var userName=$("#usernameinput").val();
    var password=$("#passwordinput").val();
    
    if(userName&&password){
        console.log("用户名"+userName+"----密码："+password);
    }else{
        console.log("用户名"+userName+"----密码："+password);
        toastr.warning("密码用户名不能为空");
        return;
    }
    

       $.getJSON("http://192.168.1.106:8080/loginMy?username="+userName+"&password="+password, "",
           function (data, textStatus, jqXHR) {
               console.log(data);
               
           }
       );
    
    });
})