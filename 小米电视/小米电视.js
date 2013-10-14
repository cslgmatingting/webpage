$(function(){ 
 changebigImage();
});



var handle;
function changebigImage(){
	
	handle=setInterval("slide()",1000);
	$("#pic1").hover(function(){
		clearInterval(handle);
	},function(){
		handle=setInterval("slide()",1000);
	});
	$("#pic2").hover(function(){
		clearInterval(handle);
	},function(){
		handle=setInterval("slide()",1000);
	});
	$("#pic3").hover(function(){
		clearInterval(handle);
	},function(){
		handle=setInterval("slide()",1000);
	});
	$("#pic4").hover(function(){
		clearInterval(handle);
	},function(){
		handle=setInterval("slide()",1000);
	});
	$("#pic5").hover(function(){
		clearInterval(handle);
	},function(){
		handle=setInterval("slide()",1000);
	});

    }




var index=1;
function slide(){
	for (var i = 1; i< 6; i++) {
      $("#pic"+i).css("display","none");
 	}

	$("#pic"+index).css("display","block");
	index++;
	if (index==6) 
	{
		index=1;
	}
	
}
