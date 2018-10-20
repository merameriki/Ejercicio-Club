

var nombre = prompt("Cual es tu nombre");
var edad = prompt("Cual es tu Edad");
edad = Number (edad);
var isMember = prompt("Ud es Miembro del Club?  S/N");
var gender = prompt("Cual es tu Genero ? F/M");

if (gender==="F"|| gender==="f")
	{
	gender="Sra "

	}if (gender==="M" || gender==="m")
		{
			gender="Sr "
		}if (edad>=21 && (isMember==="S" || isMember==="s")){

				alert (gender + " " + nombre + " pase por favor Bienvenido");
				var thirsty = prompt("Uds tiene sed? S/N");
		
			}if (edad<21 || isMember==="N"){

				alert( gender + nombre + " no puede ingresar al Bar")

				}if (thirsty==="S" || thirsty==="s"){

				var drinkname = prompt("Que le gustaria Beber?");
		 
					}if (thirsty==="N" || thirsty==="n"){

						alert("Perfecto disfrute");

						}if  (drinkname==="coors light"){

							alert( gender + nombre + "  debe retirarse");

							}else if (drinkname!=="coors light" && thirsty==="S" || thirsty==="s"){

								alert("Si " + nombre + " un " + drinkname + " viniendo!!!");

								}/*else alert ("Vuelva otro Dia")*/
		


  
