// main.js

// top버튼
$(function(){
    $(window).scroll(function(){
      if($(this).scrollTop() > 250) {
        $('#topbtn').fadeIn();
      } else {
        $('#topbtn').fadeOut();
      }
    })
  });
  
  $(document).ready(function(){
    $('#topbtn').bind('click',function(){
      $('html,body').animate({scrollTop:'0'},800);
    });
  });
  