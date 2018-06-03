$(function() {
	$(".l").click(function() {
		$("#login-area0").addClass("z-out");
		$("#login-area").addClass("z-out");
        $("#register-area0").removeClass("z-out");
        $("#register-area").removeClass("z-out");
	});
     
    $(".r").click(function() {
		$("#register-area0").addClass("z-out");
		$("#register-area").addClass("z-out");
        $("#login-area0").removeClass("z-out");
        $("#login-area").removeClass("z-out");
	});
    
    $("#change1").click(function() {
		$("#container1").addClass("z-out");
        $("#container2").removeClass("z-out");
       
	});
    
    $("#change2").click(function() {
        $("#container1").removeClass("z-out");
        $("#container2").addClass("z-out");
       
	});
    
    $(".school").click(function() {
        $(".school").hide();
        $(".world").show();
	});
    
     $(".world").click(function() {
        $(".world").hide();
        $(".school").show();
	});
    
}());