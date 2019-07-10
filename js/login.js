$(function () {

    $("#loginButton").on('click',function () {
	
		var $btn = $(this).button('loading');
		  // $btn.button('reset');
        var userName = $("#usernameinput").val();
        var password = $("#passwordinput").val();

        if (userName && password) {
        var dataMap={
            "username":userName,
            "password":password,
            "role":"admin"
        }
        

        $.post("http://192.168.1.114:8080/zlq_war_exploded/login", dataMap,
            function (data, textStatus, jqXHR) {
                console.log(data);
                
            },
            "dataType"
        );
        } else {
            console.log("用户名" + userName + "----密码：" + password);
          
            return;
        }
        

    });
	
	//跳转到注册界面
	$("#registerDiv").on('click',function(){
		window.open('register.html','_self')
	})


    
})