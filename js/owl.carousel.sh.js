$(document).ready(function() {
 
  //Sort random function
  function random(owlSelector){
    owlSelector.children().sort(function(){
        return Math.round(Math.random()) - 0.5;
    }).each(function(){
      $(this).appendTo(owlSelector);
    });
  }
 
  $("#owl-demo").owlCarousel({
slideSpeed : 700,	
  	lazyLoad: true,
  	singleItem: true,
    navigation: true,
    pagination: false,
    navigationText: [
      "<span class='glyphicon glyphicon-menu-left'></span>",
      "<span class='glyphicon glyphicon-menu-right'></span>"
      ],
    beforeInit : function(elem){
      //Parameter elem pointing to $("#owl-demo")
      random(elem);
    }
 	
  });
 
});