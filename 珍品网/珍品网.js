$(function(){ 
   changeImage();
 changebigImage();
});

function changeImage(){
	$(".foot_add").find("span").each(function() { 
			$(this).hover(function() { 
			$(this).find(".pic").fadeTo("slow",0.7); 
		},
		function() { 
		$(this).find(".pic").fadeTo("slow",1); 
		}); 
		}); 
	
}


var handle;
function changebigImage(){
	
	handle=setInterval("slide()",1000);
	$("#itests1").hover(function(){
		clearInterval(handle);
	},function(){
		handle=setInterval("slide()",1000);
	});
	$("#itests2").hover(function(){
		clearInterval(handle);
	},function(){
		handle=setInterval("slide()",1000);
	});
	$("#itests3").hover(function(){
		clearInterval(handle);
	},function(){
		handle=setInterval("slide()",1000);
	});
	$("#itests4").hover(function(){
		clearInterval(handle);
	},function(){
		handle=setInterval("slide()",1000);
	});

    }




var index=1;
function slide(){
	for (var i = 1; i< 5; i++) {
      $("#itests"+i).css("display","none");
      $("#btnsbi"+i).css({"font-weight":"200",
      	"color":"rgb(179,179,179)"});
 	}

	$("#itests"+index).css("display","block");
	$("#btnsbi"+index).css({"font-weight":"900",
      	"color":"rgb(255,255,255)"});
	index++;
	if (index==5) 
	{
		index=1;
	}
	
}
