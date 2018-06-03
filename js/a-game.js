$(function() {
     
    $(".back-choice #change11").hover(function() {
		$(this).css("color","#3a9ca0");
        $("#li1").css("background-color","#daf0f0");
    },function(){
        $(this).css("color","#d3e2ef");
        $("#li1").css("background-color","#fff");
	});
    
    $(".back-choice #change22").hover(function() {
		$(this).css("color","#3a9ca0");
        $("#li2").css("background-color","#daf0f0");
    },function(){
        $(this).css("color","#d3e2ef");
        $("#li2").css("background-color","#fff");
	});
    
    $("#book").click(function() {
		$(".picture").toggle();
	});
    
    $("#left").hover(function() {
		$(this).css({"color":"#fff","background-color":"#3a9ca0"});
        
    },function(){
        $(this).css({"color":"#3a9ca0","background-color":"#fff"});
	});
    
    $("#right").hover(function() {
		$(this).css({"color":"#fff","background-color":"#3a9ca0"});
        
    },function(){
        $(this).css({"color":"#3a9ca0","background-color":"#fff"});
	});

    $(".ok").click(function() {
        var total = $(".target").length;
        
        $(".target").each(function(){
            var targetNum;
            var imgNum;

            if($(this).find("img").length == 0){
                alert("还未完成哦。");
                return false;
            }else{
                var length = $(this).attr("id").length;
                var length1 = $(this).find("img").attr("id").length;
                targetNum = Number($(this).attr("id").substr(6,length));

                var imgStart = Number($(this).find("img").attr("src").lastIndexOf("-"))+1;
                var imgEnd =  Number($(this).find("img").attr("src").lastIndexOf("."));
                imgNum = Number($(this).find("img").attr("src").substr(imgStart,imgEnd-imgStart))+1;
                
                
               //alert(targetNum+","+imgNum);
                if(targetNum !== imgNum){
                     alert("第"+targetNum+"张就错啦。可以问问上面的猫头鹰哦。");
                     return false;
                }else if(targetNum == total && targetNum == imgNum){
                     alert("成功！");
                }
                

            };
        });
    });
    
    
}());





