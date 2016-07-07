function Mostrar()
{
//tomo la edad  
var edadIngresada;
parseInt(edadIngresada);
edadIngresada=document.getElementById('edad').value;
/*if (13<=edadIngresada&&edadIngresada<18){alert("Es adolescente")}
*/
if (edadIngresada>12) {
	if (edadIngresada<18) {alert("Es adolescente")};
};
}//FIN DE LA FUNCIÓN