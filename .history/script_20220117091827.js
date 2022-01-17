$(function(){

  if (!$('.envelope').hasClass('open')){
    $('.envelope').click(function(){
      $(this).removeClass('new').addClass('open');
    });
  }
  
});
$(function(){
  if (!$('.envelope').hasClass('new')){
    $('.envelope').click(function(){
      $(this).removeClass('open').addClass('open');
    });
  }
})