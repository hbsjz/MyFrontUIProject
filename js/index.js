$(function () {
    //js中添加数据




    // 设置右上菜单监听
    $("#right_nav>ul>li").hover(function () {
        $(this).children("#item_ul_right_menu").stop();
        $(this).children("#item_ul_right_menu").slideToggle(300);

    });











})