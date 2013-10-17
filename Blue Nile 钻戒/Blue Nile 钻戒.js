$(function() {
	initEvents();
});

var handle;
function initEvents(){
    handle=setInterval("slide()",1000);


    $("#focusImages").hover(function(){
		clearInterval(handle);
	},function(){
		handle=setInterval("slide()",1000);
	});


    $("#gg").mouseover(function(){
    	$("#sub_cCjn8TKd").fadeTo(300,"1");
    });

    $("#sub_cCjn8TKd").mouseout(function(){
    	$("#sub_cCjn8TKd").fadeTo(1000,"0");
    });
    
  }

  

var index=1;
function slide(){

	for (var i = 1; i <5; i++) {
	 	/*$("#Focusimg"+i).animate({"top":"+"+topt+"px"},1000);*/
	 	$("#img"+i).slideUp("1500");
        $("#btn"+i).css("background-color","rgb(251,219,216)");
	 } 
     
    /* $("#Focusimg"+index).animate({"top":"-"+topt+"px"},1000);*/
	 $("#img"+index).slideDown("1500");
	 $("#btn"+index).css("background-color","rgb(164,160,135)");
	   index++;

	if (index==5) 
	{
	    index=1;
	 
	}

}