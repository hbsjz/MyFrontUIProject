$(function () {

    optionsTost();


    $(".loginButton").click(function (e) {
        var userName = $("#usernameinput").val();
        var password = $("#passwordinput").val();

        if (userName && password) {
        var dataMap={
            "username":userName,
            "password":password,
            "role":"admin"
        }



    
        console.log("---->map:"+dataMap);
        

        $.post("http://192.168.1.114:8080/zlq_war_exploded/login", dataMap,
            function (data, textStatus, jqXHR) {
                console.log(data);
                
            },
            "dataType"
        );
        } else {
            console.log("用户名" + userName + "----密码：" + password);
            toastr.warning("密码用户名不能为空");
            return;
        }
        

    });


    //定义tost的参数
    function optionsTost() {
        toastr.options = {
            closeButton: false,
            debug: false,
            progressBar: false,
            positionClass: "toast-bottom-center",
            onclick: null,
            showDuration: "300",
            hideDuration: "1000",
            timeOut: "2000",
            extendedTimeOut: "1000",
            showEasing: "swing",
            hideEasing: "linear",
            showMethod: "fadeIn",
            hideMethod: "fadeOut"
        };
    };
})