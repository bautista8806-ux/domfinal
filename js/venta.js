function Calcular (){
    //crear variable cantidad,precio

    let cantidad =Number(document.getElementById("cantidad").value);
    let precio =Number(document.getElementById("precio").value);

    let subtotal1 =cantidad*precio;
   
    document.getElementById("subtotal1").value =subtotal1;

    let iva =subtotal1*0.19;
    document.getElementById("iva").value =iva;

    let descuento =subtotal1*0.1;
    document.getElementById("descuento").value =descuento;

    let total=subtotal1+iva-descuento;
    document.getElementById("total").value =total;
}
