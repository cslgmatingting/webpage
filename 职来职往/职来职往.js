$(function () {
  initEvents();
  showphoto();
});

function initEvents () {
	$("#hotd").mouseover(function(){
	  $("#ttqq1").removeClass("aa1");
  	  $("#ttqq1").addClass("ttq1");
  	  $("#ttqq1").find("li").addClass("t");
	});

	$("#hotd").mouseout(function(){
	  $("#ttqq1").addClass("aa1");

	});

	$("#hotd1").mouseover(function(){
	  $("#ttqq2").removeClass("aa1");
  	  $("#ttqq2").addClass("ttq1");
  	  $("#ttqq2").find("li").addClass("t");

  	  $("#hotd1").mouseout(function(){
	  $("#ttqq2").addClass("aa1");

	});
	});
}

var handle;
var index=1;
function showphoto(){
  handle = setInterval("light()",1000);
}

function light(){
	    
	   	$("#pp1").removeClass("dis");
		$("#pp2").removeClass("dis");
		if (index==1) {
			$("#pp"+index).addClass("dis");
			index=2;
		}else{
			$("#pp"+index).addClass("dis");
			 index=1;
		}
	  	
       
    
        
    
      	
      	 
      
	      
    }


    

	
