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
//定位导航结束
//头部导航
$(function(){
    //横向颜色变化
    var currStyle = function (links){
        var currUrl = window.location.href;
        links.each(function(){
            var url = $(this).attr('href');
            if (currUrl.indexOf(url) != -1){
                $(this).css("color","#DD2726");
                return false;
            }
        });
    }
    currStyle($(".topmenu-nav-list  a"));
    //横向颜色变化结束
    //侧边导航及右边固定层
    var $siderNavList=$(".topmenu-sidernav-list"),
        $siderNavTitle=$(".topmenu-sidernav-title"),
        $topMenu=$(".topmenu"),
        $fixboxRight=$(".fixbox-right");

    $(window).scroll(function(){
        //获取滚动条距离顶部部的距离
        var scrollTop=$(document).scrollTop();
        //控制右边固定层的出现
        if(scrollTop<300){
            $fixboxRight.hide();
        }else{
            $fixboxRight.show();
        }
        //获取侧边菜单列表
        if(scrollTop<628){
            $siderNavList.show();
            $siderNavTitle.hover(function(){$siderNavList.show();})
            $topMenu.css({"position":"relative"});
        }else{
            $siderNavList.hide();
            $siderNavTitle.hover(function(){$siderNavList.show();},function(){$siderNavList.hide();})
            $topMenu.css({"position":"fixed","top":"0"});
        }
    })

    //侧边导航结束
}())
//头部导航结束
//底部固定层
$(function(){
    var $fixboxBottom=$(".fixbox-bottom")
    var $closs=$fixboxBottom.find(".closs")
    $closs.on("click",function(){
        $fixboxBottom.hide()
    })

}())
//底部固定层结束
//底部当前时间
$(function(){
    var $time=$(".phone-tiem .nowTime")
    function aTime (a){
        if(a<10){
            return a="0"+a;
        }else{return a};
    }
    function nowTime(){
        var myDay=new Date(),
            h=myDay.getHours(),
            m=myDay.getMinutes(),
            s=myDay.getSeconds();
        h=aTime(h);
        m=aTime(m);
        s=aTime(s);
        $time[0].innerHTML=h+":"+m+":"+s;
    }
    //优化显示
//这个去掉的话加载的时候明显闪屏
    nowTime();
    setInterval(nowTime,500);
}())
//底部当前时间结束
//最新解密倒计时效果
$(function(){

    function FreshTime()
    {
        function yTime(aa){
            return aa=aa%10
        }
        var $m1=$(".m1"),
            $m2=$(".m2"),
            $s1=$(".s1"),
            $s2=$(".s2"),
            $zs1=$(".zs1"),
            $zs2=$(".zs2"),
            endtime=new Date("2016/10/1,0:00:00"),//结束时间
            nowtime = new Date(),//当前时间
            lefttime=parseInt((endtime.getTime()-nowtime.getTime())),
            m=parseInt(lefttime/1000/60%60),
            s=parseInt(lefttime/1000%60),
            zs1=parseInt(lefttime%1000/100),
            zs2=parseInt(lefttime%10),
            m2=yTime(m),
            m1=(m-m2)/10,
            s2=yTime(s),
            s1=(s-s2)/10;
            $m1.html(m1)
            $m2.html(m2)
            $s1.html(s1)
            $s2.html(s2)
            $zs1.html(zs1)
            $zs2.html(zs2)

    }
    FreshTime()
    var sh;
    sh=setInterval(FreshTime,50);

}())
//最新解密倒计时效果结束
//最新动态
$(function(){
    var $newsList=$(".news-box-right ")
    function scroll(){
        $newsList.animate({"margin-top":"-46px"},function(){
            //$(".content ul li:eq(0)").appendTo($newsList)
            $newsList.find("li").eq(0).appendTo($newsList)
            $newsList.css({"margin-top":0})
        })
    }
    var aa=setInterval(scroll,1000);
    //鼠标悬停
    $newsList.hover(function(){
        clearInterval(aa)
    },function(){
        aa=setInterval(scroll,2000);
    })
}())
//最新动态结束







