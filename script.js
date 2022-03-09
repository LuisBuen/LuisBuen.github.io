// -----------Parallax------------------//
$(document).ready(function () {
  setTimeout(function () {
    $('#header-area').parallax({
      imageSrc: 'imagens/pexels-gustavo-fring.jpg'
    })

    $('#facebook').parallax({
      imageSrc: 'imagens/pexels-rob-eradus-968639.jpg'
    })
  }, 250)
})

//------------ScrollReveal---------------//
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#header-area nav, #header-area .arrow h2, #header-area .arrow .icon-arrow-down, 
    #about .col-md-12, #about .col-md-6, 
      #facebook .col-md-12,
        #contact .col-md-12,
        #adress .col-md-6, #adress .col-md-4,
          #icons .col-md-4 `,
  {
    interval: 100
  }
)
