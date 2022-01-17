$(function(){

  if (!$('.envelope').hasClass('open')){
    $('.envelope').click(function(){
      $(this).removeClass('new').addClass('open');
    });
  }else{
    $('.envelope').click(function(){
      $(this).removeClass('open').addClass('new');
    });
  }
  
});