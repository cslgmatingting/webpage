 $(function(){
	initEvents();
	checkTxt();
	checkPwd();
});

function initEvents() {
	$("#emailtxt").keyup(function(){
		checkTxt();
	});
		
	$("#emailpwd").keyup(function(){
		checkPwd();
	});
}

function checkTxt(){
        var val=$("#emailtxt").val();
	     if (val=="") {
	     	
	     	$("#emailtxt").css("background-Image",'url("images/email2.png")');
	     }
	    else{
	   	  $("#emailtxt").css("background-Image","none");
	     }
}

function checkPwd(){
	var val=$("#emailpwd").val();
     if (val=="") {
     	$("#emailpwd").css("background-Image",'url("images/email.png")');
     }
    else{
   	  $("#emailpwd").css("background-Image","none");
     }
}

