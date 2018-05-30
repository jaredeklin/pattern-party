const mobileLook = () => {
  if($(window).width() <= 970)  {
    $('.mobile-look-nav').toggleClass('show')   
  }
}

$('.x-button').on('click', mobileLook)



