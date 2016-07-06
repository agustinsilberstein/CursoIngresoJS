/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperat;
	var farAgrados;
	temperat=document.getElementById('Temperatura').value;
	farAgrados= (parseInt(temperat)-32)/1.8;
	alert(temperat+" Fahrenheit son "+farAgrados+" centigrados");

}

function CentigradosFahrenheit () 
{
	var temperat;
	var gradosAfar;
	temperat=document.getElementById('Temperatura').value;
	gradosAfar=(parseInt(temperat)*1.8)+32;
	alert(temperat+" Celsius son "+gradosAfar+" Fahrenheit");
}
