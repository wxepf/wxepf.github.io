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
