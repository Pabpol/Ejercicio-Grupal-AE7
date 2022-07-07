function display_c() {
  var refresh = 1000; // Refresh rate in milli seconds
  setTimeout('display_ct()', refresh);
}

function display_ct() {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const fullDate = new Date();

  const date = fullDate.toLocaleDateString('es-ES', options);
  const time = fullDate.toLocaleTimeString();

  const formatoFecha = `${date} ${time}`;
  const currentTime = document.getElementById('current_time');
  currentTime.innerHTML = `${formatoFecha}`;

  display_c();
}
display_ct();

$('.slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  arrows: false,
  dots: true,
  
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        infinite: true,
      }}]
});

$('.slider2').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  infinite: true,
  arrows:false
  
});