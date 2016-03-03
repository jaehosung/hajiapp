var solnum = 4;
var prenum = 1;
$(document).ready(function(){
	
	$("#button").click(function(){
		if(prenum<=solnum){
			$("#button").before("<img class =\"sol\" id = \"sol"+prenum+"\"src='imgs/problem/sol"+prenum+".png'/>");
			prenum++;

		if(prenum>=solnum){
			$("#sol"+solnum).click(function(){
				console.log("hey");
				window.location.href = "tutor.html";
				
			});
		};

		}
	});

	
});