function Mostrar()
{
//tomo la edad  
var edadIngresada;
parseInt(edadIngresada);
edadIngresada=document.getElementById('edad').value;
	/*if (edadIngresada<13) {alert("Es un niño")}
	if (edadIngresada>17){alert("Es mayor de edad ")}
	if (edadIngresada>=13 && edadIngresada<=17) {alert("Es adolescente")};
*/
if (edadIngresada<13) {alert("Es menor")}
	else{
		if (edadIngresada>18) {alert("Es mayor")}
			else{alert("es adolescente")}
	}

}
			




