function Mostrar()
{

	var contador=0;
	var contador1=0;
	var contador2=0;
	var contador3=0;
	var contador4=0;
	var contador5=0;
	var contador6=0;
	var contador7=0;
	var contador8=0;
	var contador9=0;
	var limite =10000;



	for(contador=0;contador<limite;contador++)
	   {	

	   		
	   		
	   	




		   var numeroRandom= Math.floor((Math.random()*10)+0);

			while(numeroRandom==5 && contador5>limite*0.010)
				{
					numeroRandom= Math.floor((Math.random()*10)+0);
				}



		   switch(numeroRandom)
			 {
			   	case 1:

			   	contador1++

			   	break;

			   	case 2:

			   	contador2++

			   	break;

			   	case 3:

			   	contador3++

			   	break;

			   	case 4:

			   	contador4++

			   	break;

			   	case 5:

			   	contador5++

			   	break;

			   	case 6:

			   	contador6++

			   	break;

			   	case 7:

			   	contador7++

			   	break;

			   	case 8:

			   	contador8++

			   	break;

			   	case 9:

			   	contador9++

			   	break;
		   }
		   	
	  

	   }
		console.log("numero 1:"+contador1*100/limite+"%");
		console.log("numero 2:"+contador2*100/limite+"%");
		console.log("numero 3:"+contador3*100/limite+"%");
		console.log("numero 4:"+contador4*100/limite+"%");
		console.log("numero 5:"+contador5*100/limite+"%");
		console.log("numero 6:"+contador6*100/limite+"%");
		console.log("numero 7:"+contador7*100/limite+"%");
		console.log("numero 8:"+contador8*100/limite+"%");
		console.log("numero 9:"+contador9*100/limite+"%");









}