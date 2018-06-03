$(function() {
    
    
    $(".category li").hover(function() {
		$(this).css({"background-color":"#3a9ca0","color":"#fff"});
    },function(){
        $(this).css({"background-color":"#fff","color":"#000"});
	});
     
    $(".map .location").hover(function() {
		$(this).css("border","1px solid #779cef");
    },function(){
        $(this).css("border","none");
	});
    
    
    
}());