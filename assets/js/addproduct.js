$("#addproduct-form").submit(async function(form) {
    form.preventDefault();

    const productName = $("#productNameInput").val();
    const productImageURL = $("#productImageURLInput").val();
    const Price = $("#productPriceInput").val();
    const productDescription = $("#productDescriptionInput").val();

    // Create our number formatter.
    var formatter = new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
        maximumFractionDigits: 0
    });

    const productPrice = formatter.format(Price);

    //Leer los que ya están    
    var urls = [];
    $('.imgproducto').each(function() {        
        urls.push(this.src);
    });
    urls.push(productImageURL);

    var detalles = [];
    $('.namproducto').each(function() {        
        detalles.push($(this).text());
    });
    detalles.push(productDescription)

    var tipos = [];
    $('.typproducto').each(function() {        
        tipos.push($(this).text());
    });
    tipos.push(productName)

    var precios = [];
    $('.priproducto').each(function() {        
        precios.push($(this).text());
    });
    precios.push(productPrice)

    //Crear objeto con los productos actuales
    var productos = [];
    for (var i = 0; i < urls.length; i++) {
        productos.push({
            "id": i,
            "tipoprod": tipos[i],
            "imageURL": urls[i],
            "price": precios[i],
            "description": detalles[i]
        });
    }
    console.log(productos)

    //Despoblar 
    document.getElementById('AllProductos').innerHTML = '';

    //Repoblar los productos
    $.each(productos, function(key, value) {
        $("#AllProductos").append(
            `
            <div class="producto p2 col-xl-3 col-12" id=` + value.id +` >
                <a data-fancybox data-src="` + value.imageURL + `" 
                data-caption="` + value.description + `">
                <img  class="imgproducto" src=` + value.imageURL + `></a>
                <p class="namproducto">` + value.description + `</p>
                <p class="typproducto">` + value.tipoprod + `</p>
                <span class="priproducto">` + value.price + `</span>
            </div> 
            `
        );
    });
         
   
});
