$(document).ready(function(){

	$("#tutor").click(function(){
		if($("#tutor").attr("src")=="imgs/tutor/tutor2.png"){
			$("#tutor").attr("src","imgs/tutor/tutor2_selected.png");
		}else if($("#tutor").attr("src")=="imgs/tutor/tutor1.png"){
			$("#tutor").attr("src","imgs/tutor/tutor2.png");
		}
	});
	$("#tutor_footer").click(function(){
		alert("Wed 6:00PM ~ 6:15PM");
		// window.location.href = "problem.html";
	});

});