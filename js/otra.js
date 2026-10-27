function calcularPresupuesto() {
  let numInv = Number(document.getElementById("numero-inv").value);
  let costoComida = Number(document.getElementById("cost-comida").value);
  let costoBebida = Number(document.getElementById("cost-bebida").value);
  let costoDecor = Number(document.getElementById("cost-decor").value);
  let costoMusica = Number(document.getElementById("cost-musica").value);
  let propinaPorc = Number(document.getElementById("propina-porc").value);

  let comidaTotal = numInv * costoComida;
  let bebidaTotal = numInv * costoBebida;
  let decoracion = costoDecor;
  let musica = costoMusica;
  let subtotal = comidaTotal + bebidaTotal + decoracion + musica;
  let propina = subtotal * (propinaPorc / 100);
  let totalGeneral = subtotal + propina;
  let costoInvitado = numInv > 0 ? totalGeneral / numInv : 0;

  document.getElementById("comida-total-s").innerText = comidaTotal;
  document.getElementById("bebida-total-s").innerText = bebidaTotal;
  document.getElementById("costdecor").innerText = decoracion;
  document.getElementById("musica").innerText = musica;
  document.getElementById("subtotal").innerText = subtotal;
  document.getElementById("propina").innerText = propina;
  document.getElementById("total-general").innerText = totalGeneral;
  document.getElementById("costo-inv").innerText = costoInvitado.toFixed(2);
}