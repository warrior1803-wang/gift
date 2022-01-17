$(function(){

  if (!$('.envelope').hasClass('open')){
    $('.envelope').click(function(){
      $(this).removeClass('new').addClass('open');
    });
  }
  
});
$(function(){
  if (!$('.envelope').hasClass('new')){
    $('.letter').click(function(){
      $('.envelope').removeClass('open').addClass('new');
    });
  }
})