/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 var edad=prompt("Ingrese edad");
 while(edad<18||edad>90)
 {
 	edad=prompt("Ingrese edad");
 	continue;
 }
document.getElementById('Edad').value=edad;

 var sexo=prompt("Ingrese sexo");
 while(sexo!="M" && sexo!="F")
 	{ sexo=prompt("Ingrese sexo");
 		continue;
 	}

 document.getElementById('Sexo').value=sexo;


 var estadoCivil=prompt("Ingrese estado civil");
 while(estadoCivil<0 ||estadoCivil>5)
 { 
	estadoCivil=prompt("Ingrese estado civil");
	continue;
 }

 document.getElementById('EstadoCivil').value=estadoCivil;

var sueldoBruto=prompt("Ingrese sueldo bruto");
while(sueldoBruto<8000)
{
sueldoBruto=prompt("Ingrese sueldo bruto");
continue;
}

document.getElementById('Sueldo').value=sueldoBruto;


var legajoValidado=prompt("Ingrese numero de legajo");
while(legajoValidado<999){
	legajoValidado=prompt("Ingrese numero de legajo");
	continue;
}


document.getElementById('Legajo').value=legajoValidado;

var nacionalidad=prompt("Ingrese su nacionalidad");
while(nacionalidad!=A&&nacionalidad!=B&&nacionalidad!=C)
{
	nacionalidad=prompt("Ingrese su nacionalidad")
	}


document.getElementById('Nacionalidad').value=nacionalidad;


 

 
 
 
 







}
