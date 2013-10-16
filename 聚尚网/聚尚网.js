
$(function(){
	initEvents();
  showphoto ();
});
var handle;
function initEvents(){
    handle=setInterval("slide()",1000);

	$(".FocusImgListyle").hover(function(){
		clearInterval(handle);
	},function(){
		handle=setInterval("slide()",1000);
	});

	$(".kt").hover(function(){
        var val=$(this).attr("value");
		index=val;
		for (var i = 1; i <5; i++) {
	 	$("#Focusimg"+i).css("display","none");
        $("#dot"+i).css("background-image","url('images/dotWhite.png')");
	 } 
     
	 $("#Focusimg"+index).css("display","block");
	 $("#dot"+index).css("background-image","url('images/dotRed.png')");
		clearInterval(handle);
	},function(){
		handle=setInterval("slide()",1000);
	});

   
  $(".mainMenuOn").mouseover(function(){
  	$("#menu0").css({"background-image":"none",
  		"color":"rgb(0,0,0)"});
  	$(this).addClass("cb");
  	$(this).find("#mainMenuBox1").css("display","block");
  	$(this).find("#mainMenuBox2").css("display","block");
  	$(this).find("#mainMenuBox3").css("display","block");


  });
   
   $(".mainMenuOn").mouseout(function(){ 
  	$(this).removeClass("cb");
  	$("#menu0").css({"background-image":"url('images/mainMenuOverBg.jpg')",
  		"color":"rgb(255,255,255)"});
  	$(this).find("#mainMenuBox1").css("display","none");
  	$(this).find("#mainMenuBox2").css("display","none");
  	$(this).find("#mainMenuBox3").css("display","none");
  });


    $(".hotArea").mouseover(function(){
  	$(this).find(".iXQShadowBoxRed").fadeTo(1000,"1");
  	$(this).find(".newsBoxForMove").fadeTo(1000,"1");
    $(this).find(".iXQOff").css("color","rgb(255,255,255)")
    $(this).find(".font12").css("color","rgb(255,255,255)")

  });
   
   $(".hotArea").mouseout(function(){ 
  	$(this).find(".iXQShadowBoxRed").css("display","none");
  	$(this).find(".newsBoxForMove").css("display","none");
  	$(this).find(".iXQOff").css("color","rgb(255,0,0)")
    $(this).find(".font12").css("color","rgb(255,0,0)")
  });



    $(".iFirstShare").mouseover(function(){
    $(this).find(".first_wei").animate({height:"76px"},"slow");


  });
   
   $(".iFirstShare").mouseout(function(){ 
    $(this).find(".first_wei").animate({height:"30px"},"slow");
  });

   $(".iShare2").mouseover(function(){
    $(this).find(".first_wei").animate({height:"76px"},"slow");


  });
   
   $(".iShare2").mouseout(function(){ 
    $(this).find(".first_wei").animate({height:"30px"},"slow");
  });

   $(".iShare3").mouseover(function(){
    $(this).find(".first_wei").animate({height:"76px"},"slow");


  });
   
   $(".iShare3").mouseout(function(){ 
    $(this).find(".first_wei").animate({height:"30px"},"slow");
  });

   $(".iShare4").mouseover(function(){
    $(this).find(".first_wei").animate({height:"76px"},"slow");


  });
   
   $(".iShare4").mouseout(function(){ 
    $(this).find(".first_wei").animate({height:"30px"},"slow");
  });

   $(".iShare5").mouseover(function(){
    $(this).find(".first_wei").animate({height:"76px"},"slow");


  });
   
   $(".iShare5").mouseout(function(){ 
    $(this).find(".first_wei").animate({height:"30px"},"slow");
  });

   $(".iShare6").mouseover(function(){
    $(this).find(".first_wei").animate({height:"76px"},"slow");


  });
   
   $(".iShare6").mouseout(function(){ 
    $(this).find(".first_wei").animate({height:"30px"},"slow");
  });

   $(".iShare7").mouseover(function(){
    $(this).find(".first_wei").animate({height:"76px"},"slow");


  });
   
   $(".iShare7").mouseout(function(){ 
    $(this).find(".first_wei").animate({height:"30px"},"slow");
  });


   $(".iShare8").mouseover(function(){
    $(this).find(".first_wei").animate({height:"76px"},"slow");


  });
   
   $(".iShare8").mouseout(function(){ 
    $(this).find(".first_wei").animate({height:"30px"},"slow");
  });

}

//幻灯片实现
var index=1;
function slide(){

	/*var topt=(index-1)*325;*/
	for (var i = 1; i <5; i++) {
	 	/*$("#Focusimg"+i).animate({"top":"+"+topt+"px"},1000);*/
	 	$("#Focusimg"+i).css("display","none");
        $("#dot"+i).css("background-image","url('images/dotWhite.png')");
	 } 
     
    /* $("#Focusimg"+index).animate({"top":"-"+topt+"px"},1000);*/
	 $("#Focusimg"+index).css("display","block");
	 $("#dot"+index).css("background-image","url('images/dotRed.png')");
	   index++;

	if (index==5) 
	{
	    index=1;
	 
	}

}


function showphoto () {
  $("#pim1").mouseover(function(){
    $("#pk1").addClass("back1");
      $("#w1").addClass("txtcolor");
      $("#w2").addClass("txtcolor");
  });

  $("#pim1").mouseout(function(){
    $("#pk1").removeClass("back1");
    $("#pk1").addClass("photoShowIm1");
    $("#w1").removeClass("txtcolor");
      $("#w1").addClass("txtS1");
      $("#w2").removeClass("txtcolor");
      $("#w2").addClass("txtS2");
  });

  $("#pim2").mouseover(function(){
    $("#pk2").addClass("back2");
      $("#w3").addClass("txtcolor");
      $("#w4").addClass("txtcolor");
  });

  $("#pim2").mouseout(function(){
    $("#pk2").removeClass("back2");
    $("#pk2").addClass("photoShowIm2");
    $("#w3").removeClass("txtcolor");
      $("#w3").addClass("txtS1");
      $("#w4").removeClass("txtcolor");
      $("#w4").addClass("txtS2");
  });

  



}