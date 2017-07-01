$(document).ready(function(){
  function slide(index) {
    $(".saying, .point, .person").removeClass("active");
    $(".saying").eq(index).addClass("active");
    $(".point").eq(index).addClass("active");
    $(".person").eq(index).addClass("active");
  }
  $(".point").on("click",function(){
    let point = $(this).index();
    slide(point);
  });
  $(".right").on("click",function(){
    let point = $(".point.active").index();
    if(point == ($(".point").length - 1)){
      point = 0;
    }
    else{
      point++;
    }
    slide(point);
  });
  $(".left").on("click",function(){
    let point = $(".point.active").index();
    if(point == 0){
      point = $(".point").length - 1;
    }
    else{
      point--;
    }
    slide(point);
  });
});
