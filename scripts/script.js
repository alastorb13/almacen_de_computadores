var compus = 0;
var descuento = 0;
var tota = 0;
var costo = 820000;
var presio = 0;
var porcentaje = 0;

function calcular () {


  compus=document.getElementById("numero").value;
  presio = compus*costo;
 
  
  if (presio<1640000){
     descuento=0;
     porcentaje=0}
  else if (presio<3280000){
     descuento=presio*0.15;
     porcentaje=15}
  else if (presio<6560000){
    descuento=presio*0.25;
    porcentaje = 25}
  else if (presio<9840000){
    descuento=presio*0.35;
    porcentaje=35}
  else{
    descuento=0;
    porcentaje=0;
  }

tota=presio-descuento;
document.getElementById("valorcompra").value="$"+presio;
document.getElementById("valordescuent").value="$"+descuento;
document.getElementById("total").value="$"+tota;
document.getElementById("salida").innerHTML="Su descuente fue de " +porcentaje+"%";
}  