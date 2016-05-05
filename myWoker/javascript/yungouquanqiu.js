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
        aa=setInterval(scroll,4000);
    })
}())
//最新动态结束
//轮播图开始
$(function(){
    var sWidth = $(".carousel").width(), //获取焦点图的宽度（显示面积）
        len = $(".carousel ul li").length, //获取焦点图个数
        index = 0,
        $carousel=$(".carousel"),
        $carouselList= $(".carousel ul"),
        $carouselListItem= $(".carousel .carousel-list .item")
    $lBtn=$(".carouser-lbtn"),
        $rBtn=$(".carouser-rbtn");
    var picTimer=  picTimer = setInterval(function() {
        showPics(index);
        index++;
        if(index == len) {index = 0;}
    },2000);
    //为小按钮添加鼠标点击事件，以显示相应的内容
    $carouselListItem.click(function() {
        index =$carouselListItem.index(this);
        showPics(index);
    }).eq(0).trigger("click");
    //上一页按钮
    $lBtn.click(function() {
        index -= 1;
        if(index == -1) {index = len - 1;}
        showPics(index);
    });
//下一页按钮
    $rBtn.click(function() {
        index += 1;
        if(index == len) {index = 0;}
        showPics(index);
    });
    //计算出外围ul元素的宽度
    $carouselList.css("width",sWidth * (len));

//鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
    $carousel.hover(function() {
        clearInterval(picTimer);
        $rBtn.show();
        $lBtn.show();
    },function() {
        $rBtn.hide();
        $lBtn.hide();
        picTimer = setInterval(function() {
            showPics(index);
            index++;
            if(index == len) {index = 0;}
        },2000);
    })

//显示图片函数，根据接收的index值显示相应的内容
    function showPics(index) {
        var nowLeft = -index*sWidth; //根据index值计算ul元素的left值
        $carouselList.stop(true,false).animate({"left":nowLeft},300);
        $carouselListItem.css("background","#111").eq(index).css("background","#C40000"); //为当前的按钮切换到选中的效果
    };
}())
//轮播图结束
//顶部累计人数
$(function(){
    $.fn.numberAnimate = function(setting) {
        var defaults = {
            speed : 1000,//动画速度
            num : "", //初始化值
            iniAnimate : true, //是否要初始化动画效果
            symbol : '',//默认的分割符号，千，万，千万
            dot : 0 //保留几位小数点
        }
        //如果setting为空，就取default的值
        var setting = $.extend(defaults, setting);

        //如果对象有多个，提示出错
        if($(this).length > 1){
            alert("just only one obj!");
            return;
        }

        //如果未设置初始化值。提示出错
        if(setting.num == ""){
            alert("must set a num!");
            return;
        }
        var nHtml = '<div class="mt-number-animate-dom-box">\
        <div class="mt-number-animate-dom" data-num="{{num}}">\
            <span class="mt-number-animate-span">.</span>\
            <span class="mt-number-animate-span">9</span>\
            <span class="mt-number-animate-span">8</span>\
            <span class="mt-number-animate-span">7</span>\
            <span class="mt-number-animate-span">6</span>\
            <span class="mt-number-animate-span">5</span>\
            <span class="mt-number-animate-span">4</span>\
            <span class="mt-number-animate-span">3</span>\
            <span class="mt-number-animate-span">2</span>\
            <span class="mt-number-animate-span">1</span>\
            <span class="mt-number-animate-span">0</span>\
          </div>\
        </div>';

        //数字处理
        var numToArr = function(num){
            num = parseFloat(num).toFixed(setting.dot);
            if(typeof(num) == 'number'){
                var arrStr = num.toString().split("");
            }else{
                var arrStr = num.split("");
            }
            return arrStr;
        }

        //设置DOM symbol:分割符号
        var setNumDom = function(arrStr){
            var shtml = '<div class="mt-number-animate"><div class="mt-number-animate-befor">累计注册人数</div>';
            for(var i=0,len=arrStr.length; i<len; i++){
                if(i != 0 && (len-i)%3 == 0 && setting.symbol != "" && arrStr[i]!="."){
                    shtml += '<div class="mt-number-animate-dot">'+setting.symbol+'</div>'+nHtml.replace("{{num}}",arrStr[i]);
                }else{
                    shtml += nHtml.replace("{{num}}",arrStr[i]);
                }
            }
            shtml += '</div>';
            return shtml;
        }

        //执行动画
        var runAnimate = function($parent){
            $parent.find(".mt-number-animate-dom").each(function() {
                var num = $(this).attr("data-num");
                num = (num=="."?10:num);
                var a=$(this).height();
                var spanHei = $(this).height()/11; //11为元素个数
                $(this).animate({
                    top :-spanHei*10
                }, 0);

                $(this).animate({
                    top :-spanHei*10+num*spanHei
                }, 2000);


            });
        }

        //初始化
        var init = function($parent){
            //初始化
            $parent.html(setNumDom(numToArr(setting.num)));
            runAnimate($parent);
        };

        //重置参数
        this.resetData = function(num){
            var newArr = numToArr(num);
            var $dom = $(this).find(".mt-number-animate-dom");
            if($dom.length < newArr.length){
                $(this).html(setNumDom(numToArr(num)));
            }else{
                $dom.each(function(index, el) {
                    $(this).attr("data-num",newArr[index]);
                });
            }
            runAnimate($(this));
        }
        //init
        init($(this));
        return this;
    };
    var numRun = $(".topsearch-statistics").numberAnimate({num:'17221318', speed:2000});
    var nums =17221318;
    var addNum=Math.random()*4;
    setInterval(function(){
        nums+=addNum;
        numRun.resetData(nums);
    },4000);
}())
//顶部累计人数结束
//飞入购物车
$(function(){
    var $buyNum=$(".buyNum"),
        addNum=0;
    $buyNum.hide()
    		//给购物按钮绑定点击事件
    $('.Buy-box .Buy').bind('click',function(){
//		寻找图片并且克隆
        var  $img = $(this).parent().parent().find('img'),
            flyElm = $img.clone().css('opacity', 0.75);
//		把克隆图片加入并定位
        $('body').append(flyElm);
        flyElm.css({
            'z-index': 9000,
            'display': 'block',
            'position': 'absolute',
            'top': $img.offset().top +'px',
            'left': $img.offset().left +'px',
            'width': $img.width() +'px',
            'height': $img.height() +'px'
        });
//		克隆图片飞入购物车
        flyElm.animate({
            top: $('.shopCart').offset().top,
            left: $('.shopCart').offset().left,
            width: 20,
            height: 32
        }, 'slow', function() {
            flyElm.remove();
            ++addNum;
            $buyNum.html(addNum)
            if(parseInt($buyNum.html())>0){
                $buyNum.show();
            }else{$buyNum.hide()};
        });

    });
}())
//飞入购物车结束





