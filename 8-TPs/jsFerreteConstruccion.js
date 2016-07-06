/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largonum;
	var anchonum;
	var perimetroRecta;
	largonum=document.getElementById('Largo').value;
	anchonum=document.getElementById('Ancho').value;
	perimetroRecta= parseInt(largonum)*2 +parseInt(anchonum)*2;
	alert(perimetroRecta);

}
function Circulo () 
{
	var radioterreno;
	var perimetroCirculo;
	radioterreno=document.getElementById('Radio').value;
	perimetroCirculo= parseInt(radioterreno)*2*Math.PI;
	alert(perimetroCirculo);
}
function Materiales () 
{
	
var largonum;
	var anchonum;
largonum=document.getElementById('Largo').value;
	anchonum=document.getElementById('Ancho').value;
	var superficie;
	var arena;
	var caal;
	var mensaje;
	superficie = parseInt(largonum)*parseInt(anchonum);
	arena= parseInt(superficie)*2;
	caal= parseInt(superficie)*3;
	alert("Se necesitan: "+caal+" bolsas de cal y "+arena+" bolsas de arena");


}