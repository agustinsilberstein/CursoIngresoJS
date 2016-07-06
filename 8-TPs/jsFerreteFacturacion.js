/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioa;
	var preciob;
	var precioc;
	var sumatotal;
	precioa=document.getElementById('PrecioUno').value;
	preciob=document.getElementById('PrecioDos').value;
	precioc=document.getElementById('PrecioTres').value;
	sumatotal = parseInt(precioa)+parseInt(preciob)+parseInt(precioc);
	alert(sumatotal);
}
function Promedio () 
{
	var precioa;
	var preciob;
	var precioc;
	var promtotal;
	precioa=document.getElementById('PrecioUno').value;
	preciob=document.getElementById('PrecioDos').value;
	precioc=document.getElementById('PrecioTres').value;
	promtotal= (parseInt(precioa)+parseInt(preciob)+parseInt(precioc))/3;
	alert(promtotal);
}
function PrecioFinal () 
{
	var precioa;
	var preciob;
	var precioc;
	var prefinal;
	precioa=document.getElementById('PrecioUno').value;
	preciob=document.getElementById('PrecioDos').value;
	precioc=document.getElementById('PrecioTres').value;
	prefinal=(parseInt(precioa)+parseInt(preciob)+parseInt(precioc))*1.21;
	alert(prefinal);	
}