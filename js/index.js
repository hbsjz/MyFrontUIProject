$(function () {
  //js中添加数据

  var myServeList = ["检测", "能力验证", "培训", "咨询", "技术范围研发", "故障分析及状态评估"];
  myServeList.forEach(element => {
    $("#myServe").append('<li><a href="#">' + element + '</a></li>');
  });

  // 我的服务添加监听
  $("#myServe").on('click', 'li', function () {

    // window.open('../papers/second.html','_self');
    
    var src = event.srcElement || event.target;
    if (src.nodeName == "A") {
      var name=src.innerHTML;
			
      url = "../papers/second.html?name="+encodeURI(encodeURI(name));
     
      
      window.location.href = url;
    }
	

    
  });



  // 设置右上菜单监听
  $(".right_nav>ul>li").hover(function () {
    $(this).children(".item_ul_right_menu").stop();
    $(this).children(".item_ul_right_menu").slideToggle(300);
  });




})