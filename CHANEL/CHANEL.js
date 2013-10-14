$(function () {
  initEvents();
});

function initEvents () {
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

  $("#pim3").mouseover(function(){
	  $("#pk3").addClass("back3");
  	  $("#w5").addClass("txtcolor");
  	  $("#w6").addClass("txtcolor");
	});

	$("#pim3").mouseout(function(){
	  $("#pk3").removeClass("back3");
	  $("#pk3").addClass("photoShowIm3");
	  $("#w5").removeClass("txtcolor");
  	  $("#w5").addClass("txtS1");
  	  $("#w6").removeClass("txtcolor");
  	  $("#w6").addClass("txtS2");
	});



}