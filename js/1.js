$(document).ready(function(){
  let $topBtn = $(".top");
  //плавный скролл меню
  function scroll(id) {
    $('html, body').animate({
      scrollTop: $(id).offset().top
    },700);
  }
  $(".menu_item, .menu_footer ul").on("click","a",function(e){
    e.preventDefault();
    let $item = $(this).attr('href');
    scroll($($item));
  });

  //button up
  $topBtn.add(".up").on("click",function(e){
      e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
  });

  //mobile menu
  $(".mob_menu").on("click",function(){
    $(".menu_item").slideToggle(400);
  });

  if($(window).scrollTop() === 0){
    $topBtn.css("display", "none");
  }
  $(window).on("scroll",function(){
    let windowScrollBottom = $(window).scrollTop() + $(window).height();

    if( windowScrollBottom >= $("body").height() ){
      $topBtn.addClass("top_end");
    }
    else{
      $topBtn.removeClass("top_end");
    }
    $(window).scrollTop() === 0 ? $topBtn.css("display", "none"): $topBtn.css("display", "block");

  });

  //portfolio
  $(".portfolio_menu").on("click","li",function() {
    $(".portfolio_menu li").removeClass("active");
    $(".portfolio_item").slideUp(10);
    let item = $(this).attr("class");
    if(item == "all"){
      $( ".portfolio_items" ).removeClass("active");
      $( ".portfolio_item" ).each(function() {
        $(this).slideDown();
      });
    }
    else{
      $( ".portfolio_items" ).addClass("active");
      $( ".portfolio_item" ).each(function() {
        if ($(this).hasClass(item)) {
          $(this).slideDown();
        }
      });
    }
    $(this).addClass("active");
  });

// валидация формы
  $('.message').each(function(){
	let form = $(this),
        btn = form.find('.footer_button');
	form.find('.field').addClass('empty_field');

    function checkInput(){
      form.find('.field').each(function(){
        if($(this).val() != ''){
		$(this).removeClass('empty_field');
        } else {
		$(this).addClass('empty_field');
        }
      });
    }

    function lightEmpty(){
      form.find('.empty_field').css({'border-color':'#d8512d'});
      setTimeout(function(){
        form.find('.empty_field').removeAttr('style');
      },700);
    }

    // Проверка в режиме реального времени
    setInterval(function(){
	  checkInput();
      var sizeEmpty = form.find('.empty_field').length;
      if(sizeEmpty > 0){
        if(btn.hasClass('disabled')){
          return false
        } else {
          btn.addClass('disabled')
        }
      } else {
        btn.removeClass('disabled')
      }
    },500);

    btn.on("click",function(){
      checkInput();
      if($(this).hasClass('disabled')){
        lightEmpty();
        return false;
      } else {
        form.submit();
      }
    });
  });

});
