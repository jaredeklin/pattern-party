const mobileLook = () => {
  if($(window).width() <= 970)  {
    $('.mobile-look-nav').toggleClass('show')   
  }
}

$('.menu').on('click', mobileLook)



