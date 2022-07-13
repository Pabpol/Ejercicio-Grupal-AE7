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
  autoplaySpeed: 3000,
  infinite: true,
  arrows:false,
  draggable: false
});
// Valida el rut con su cadena completa "XXXXXXXX-X"
var Fn = {
  validaRut : function (rutCompleto) {
    rutCompleto = rutCompleto.replace("‐","-");
    if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
      return false;
    var tmp   = rutCompleto.split('-');
    var digv  = tmp[1]; 
    var rut   = tmp[0];
    if ( digv == 'K' ) digv = 'k' ;
    
    return (Fn.dv(rut) == digv );
  },
  dv : function(T){
    var M=0,S=1;
    for(;T;T=Math.floor(T/10))
      S=(S+T%10*(9-M++%6))%11;
    return S?S-1:'k';
  }
}


$("#btnvalida").click(function(){
  if (Fn.validaRut( $("#txt_rut").val() )){
    $("#msgsuccess").show().delay(5000).queue(function(n) {
      $(this).hide(); n();
    });
  } else {
    $("#msgerror").show().delay(5000).queue(function(n) {
      $(this).hide(); n();
    });
  }
});

Fancybox.getInstance();