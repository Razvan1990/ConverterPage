function chooseConversion()
{

	var checkboxOption = null;
	let counterCheckers=0;


	checkbox = document.getElementsByName("conversion");

	for(let i =0;i<checkbox.length;i++){
		if(checkbox[i].checked){
			checkboxOption = checkbox[i].value;
			
		}
	}

	let arraysOfConversion = ["Euro", "Dolar", "Pound", "Yuan","Ruble","Lei moldovenesti","Coroana suedeza"];
	let checkboxOptionReplay = checkboxOption;

	

	while(true)
	{
		switch(checkboxOption)
		{

			case "euro":
				document.getElementById("euroVal").style.fontSize="16px";
				document.getElementById("euroVal").style.fontFamily="Comic Sans";
				document.getElementById("Euros").style.backgroundColor="yellow"
				document.getElementById("Euros").style.border = "3px solid azure";
				//put selected value in page
				document.getElementById("selected").insertAdjacentHTML("beforeBegin",arraysOfConversion[0]);
				//modify styles for it
				document.getElementById("selection").style.backgroundImage="url('europa.png')";
				document.getElementById("selection").style.backgroundRepeat ="no-repeat";
				document.getElementById("selection").style.backgroundSize= "300px 40px";
				document.getElementById("selection").style.height ="40px";	
				document.getElementById("selection").style.color ="yellow"


				document.getElementById("Dollars").style.backgroundColor="grey";
				document.getElementById("Pounds").style.backgroundColor="grey";
				document.getElementById("Ruble").style.backgroundColor="grey";
				document.getElementById("Yuan").style.backgroundColor="grey";
				document.getElementById("Leu moldovenesc").style.backgroundColor="grey";
				document.getElementById("Coroana suedeza").style.backgroundColor="grey";
				//make checkboxes dissapear now
				document.getElementById("dollar").style.display= "none";
				document.getElementById("pounds").style.display= "none";
				document.getElementById("yuan").style.display= "none";
				document.getElementById("ruble").style.display= "none";
				document.getElementById("moldovenesc").style.display= "none";
				document.getElementById("swedish").style.display= "none";
				break;

			case "dollar":
				document.getElementById("dollarVal").style.fontSize="16px";
				document.getElementById("dollarVal").style.fontFamily="Comic Sans";
				document.getElementById("Dollars").style.backgroundColor="yellow"
				document.getElementById("Dollars").style.border = "3px solid azure";
				//put selected value in page
				document.getElementById("selected").insertAdjacentHTML("beforeBegin",arraysOfConversion[1]);
				//modify styles for it
				document.getElementById("selection").style.backgroundImage="url('sua.png')";
				document.getElementById("selection").style.backgroundRepeat ="no-repeat";
				document.getElementById("selection").style.backgroundSize= "300px 40px";
				document.getElementById("selection").style.height ="40px";	
				document.getElementById("selection").style.color ="#000"


				

				document.getElementById("Euros").style.backgroundColor="grey";
				document.getElementById("Pounds").style.backgroundColor="grey";
				document.getElementById("Ruble").style.backgroundColor="grey";
				document.getElementById("Yuan").style.backgroundColor="grey";
				document.getElementById("Leu moldovenesc").style.backgroundColor="grey";
				document.getElementById("Coroana suedeza").style.backgroundColor="grey";
				//make checkboxes dissapear now
				document.getElementById("euro").style.display= "none";
				document.getElementById("pounds").style.display= "none";
				document.getElementById("yuan").style.display= "none";
				document.getElementById("ruble").style.display= "none";
				document.getElementById("moldovenesc").style.display= "none";
				document.getElementById("swedish").style.display= "none";
				break;

			case "pounds":
				document.getElementById("poundVal").style.fontSize="16px";
				document.getElementById("poundVal").style.fontFamily="Comic Sans";
				document.getElementById("Pounds").style.backgroundColor="yellow"
				document.getElementById("Pounds").style.border = "3px solid azure";
				//put selected value in page
				document.getElementById("selected").insertAdjacentHTML("beforeBegin",arraysOfConversion[2]);
				//modify styles for it
				document.getElementById("selection").style.backgroundImage="url('marea britanie.png')";
				document.getElementById("selection").style.backgroundRepeat ="no-repeat";
				document.getElementById("selection").style.backgroundSize= "300px 40px";
				document.getElementById("selection").style.height ="40px";	
				document.getElementById("selection").style.color ="#000";
				

				document.getElementById("Euros").style.backgroundColor="grey";
				document.getElementById("Dollars").style.backgroundColor="grey";
				document.getElementById("Ruble").style.backgroundColor="grey";
				document.getElementById("Yuan").style.backgroundColor="grey";
				document.getElementById("Leu moldovenesc").style.backgroundColor="grey";
				document.getElementById("Coroana suedeza").style.backgroundColor="grey";
				//make checkboxes dissapear now
				document.getElementById("euro").style.display= "none";
				document.getElementById("dollar").style.display= "none";
				document.getElementById("yuan").style.display= "none";
				document.getElementById("ruble").style.display= "none";
				document.getElementById("moldovenesc").style.display= "none";
				document.getElementById("swedish").style.display= "none";
				break;

			case "yuan":
				document.getElementById("yuanVal").style.fontSize="16px";
				document.getElementById("yuanVal").style.fontFamily="Comic Sans";
				document.getElementById("Yuan").style.backgroundColor="yellow"
				document.getElementById("Yuan").style.border = "3px solid azure";
				//put selected value in page
				document.getElementById("selected").insertAdjacentHTML("beforeBegin",arraysOfConversion[3]);
				//modify styles for it
				document.getElementById("selection").style.backgroundImage="url('china.png')";
				document.getElementById("selection").style.backgroundRepeat ="no-repeat";
				document.getElementById("selection").style.backgroundSize= "300px 40px";
				document.getElementById("selection").style.height ="40px";	
				document.getElementById("selection").style.color ="yellow";

				document.getElementById("Euros").style.backgroundColor="grey";
				document.getElementById("Pounds").style.backgroundColor="grey";
				document.getElementById("Ruble").style.backgroundColor="grey";
				document.getElementById("Dollars").style.backgroundColor="grey";
				document.getElementById("Leu moldovenesc").style.backgroundColor="grey";
				document.getElementById("Coroana suedeza").style.backgroundColor="grey";
				//make checkboxes dissapear now
				document.getElementById("dollar").style.display= "none";
				document.getElementById("pounds").style.display= "none";
				document.getElementById("euro").style.display= "none";
				document.getElementById("ruble").style.display= "none";
				document.getElementById("moldovenesc").style.display= "none";
				document.getElementById("swedish").style.display= "none";
				break;

			case "ruble":
				document.getElementById("rubleVal").style.fontSize="16px";
				document.getElementById("rubleVal").style.fontFamily="Comic Sans";
				document.getElementById("Ruble").style.backgroundColor="yellow"
				document.getElementById("Ruble").style.border = "3px solid azure";
				//put selected value in pag
				document.getElementById("selected").insertAdjacentHTML("beforeBegin",arraysOfConversion[4]);
					//modify styles for it
				document.getElementById("selection").style.backgroundImage= "url('rusia.png')";
				document.getElementById("selection").style.backgroundRepeat ="no-repeat";
				document.getElementById("selection").style.backgroundSize= "300px 100px";
				document.getElementById("selection").style.height ="100px";	
				document.getElementById("selection").style.color ="#000";
				

				document.getElementById("Euros").style.backgroundColor="grey";
				document.getElementById("Pounds").style.backgroundColor="grey";
				document.getElementById("Dollars").style.backgroundColor="grey";
				document.getElementById("Yuan").style.backgroundColor="grey";
				document.getElementById("Leu moldovenesc").style.backgroundColor="grey";
				document.getElementById("Coroana suedeza").style.backgroundColor="grey";
				//make checkboxes dissapear now
				document.getElementById("dollar").style.display= "none";
				document.getElementById("pounds").style.display= "none";
				document.getElementById("yuan").style.display= "none";
				document.getElementById("euro").style.display= "none";
				document.getElementById("moldovenesc").style.display= "none";
				document.getElementById("swedish").style.display= "none";
				break;

			case "moldovenesc":
				document.getElementById("moldovenescVal").style.fontSize="16px";
				document.getElementById("moldovenescVal").style.fontFamily="Comic Sans";
				document.getElementById("Leu moldovenesc").style.backgroundColor="yellow"
				document.getElementById("Leu moldovenesc").style.border = "3px solid azure";
				//put selected value in page
				document.getElementById("selected").insertAdjacentHTML("beforeBegin",arraysOfConversion[5]);
				//modify styles for it
				document.getElementById("selection").style.backgroundImage="url('moldova.png')";
				document.getElementById("selection").style.backgroundRepeat ="no-repeat";
				document.getElementById("selection").style.backgroundSize= "300px 40px";
				document.getElementById("selection").style.height ="40px";	
				document.getElementById("selection").style.color ="#24dd24";

				document.getElementById("Euros").style.backgroundColor="grey";
				document.getElementById("Pounds").style.backgroundColor="grey";
				document.getElementById("Ruble").style.backgroundColor="grey";
				document.getElementById("Yuan").style.backgroundColor="grey";
				document.getElementById("Dollars").style.backgroundColor="grey";
				document.getElementById("Coroana suedeza").style.backgroundColor="grey";
				//make checkboxes dissapear now
				document.getElementById("dollar").style.display= "none";
				document.getElementById("pounds").style.display= "none";
				document.getElementById("yuan").style.display= "none";
				document.getElementById("ruble").style.display= "none";
				document.getElementById("euro").style.display= "none";
				document.getElementById("swedish").style.display= "none";
				break;

			case "swedish":
				document.getElementById("swedishVal").style.fontSize="16px";
				document.getElementById("swedishVal").style.fontFamily="Comic Sans";
				document.getElementById("Coroana suedeza").style.backgroundColor="yellow"
				document.getElementById("Coroana suedeza").style.border ="3px solid azure";
				//put selected value in page
				document.getElementById("selected").insertAdjacentHTML("beforeBegin",arraysOfConversion[6]);
				//modify styles for it
				document.getElementById("selection").style.backgroundImage="url('suedia.png')";
				document.getElementById("selection").style.backgroundRepeat ="no-repeat";
				document.getElementById("selection").style.backgroundSize= "300px 40px";
				document.getElementById("selection").style.height ="40px";	
				document.getElementById("selection").style.color ="#ffce39";
				//document.getElementById("selection").style.width ="100px";

				document.getElementById("Euros").style.backgroundColor="grey";
				document.getElementById("Pounds").style.backgroundColor="grey";
				document.getElementById("Ruble").style.backgroundColor="grey";
				document.getElementById("Yuan").style.backgroundColor="grey";
				document.getElementById("Leu moldovenesc").style.backgroundColor="grey";
				document.getElementById("Dollars").style.backgroundColor="grey";
				//make checkboxes dissapear now
				document.getElementById("dollar").style.display= "none";
				document.getElementById("pounds").style.display= "none";
				document.getElementById("yuan").style.display= "none";
				document.getElementById("ruble").style.display= "none";
				document.getElementById("moldovenesc").style.display= "none";
				document.getElementById("euro").style.display= "none";
				break;

			default:
				var answer = confirm("Are you sure you want to choose a new option?");
				if (answer){
					//method that reloads the page
					location.reload();
				}
				else
				{
					alert("Tick again same option");
				}
				
			break;

		}

		break;
	}
	
	
	

}




