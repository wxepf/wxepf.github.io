//侧边菜单鼠标经过离开触发的事件
(function(){
    var sideNavItem=$(".topmenu-sidernav li")
    sideNavItem.hover(
        function() {
            $(this).addClass("sidernav-item-hover")
        }
        , function() {
            $(this).removeClass("sidernav-item-hover")
        });
}())
//定位导航
$(function(){
    $(window).scroll(function(){
        //获取滚动条距离顶部部的距离
        var scrollTop=$(document).scrollTop();
        //获得导航条
        var $fixBoxLeft=$(".fixbox-left");
        //获得所有的楼层
        var $floorItem=$("#main").find(".communal02");
        //当前所在楼层的ID值
        var floorIdNow="";
        //当前内容链接
        //遍历每一层获取距离顶部的高度
        $floorItem.each(function(){
            var $thisItem=$(this);
            var itemTop=$thisItem.offset().top;
            //比较两者高度确定当前所在楼层的值
            if(scrollTop>itemTop-200){
                floorIdNow="#"+$thisItem.attr("id");
            }else{return false};
        })
        //查询当前导航链接
        var $linkNow=$fixBoxLeft.find(".fixbox-left-show")
        //给指定链接添加名字
        if(floorIdNow&&floorIdNow!=$linkNow.attr("href")){
            $linkNow.removeClass("fixbox-left-show");
            $fixBoxLeft.find("[href="+floorIdNow+"]").addClass("fixbox-left-show");
        }
        //控制定位导航的出现
        if(scrollTop>1000){
            $fixBoxLeft.show()
        }else{
            $fixBoxLeft.hide()
        }
    })
}())
//头部导航
//$(function(){
//    $(window).scroll(function(){
//        var currUrl = window.location.href;
//        //横向颜色变化
//
//        var currStyle = function (links){
//            links.each(function(){
//                var url = $(this).attr('href');
//                console.log($(this).attr('href'))
//                console.log(currUrl.indexOf(url))
//                if (currUrl.indexOf(url) != -1){
//                    $(this).hide()
//                    return false;
//                }
//            });
//        }
//        currStyle($(".topmenu-nav-list  a"));
//        //横向颜色变化结
//
//    })
//}())