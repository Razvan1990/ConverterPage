function convertLei(){

	// check first what is selected
	var checkboxOption = null;
	let counterCheckers = 0;
	let convertedValue = 0;





	//returneaza un array de valori

	checkbox = document.getElementsByName("conversion");

	for(let i =0;i<checkbox.length;i++){
		if(checkbox[i].checked){
			checkboxOption = checkbox[i].value;
			counterCheckers++;
			
		}
	}

	if (checkboxOption==="" || checkboxOption===null){
		alert("You must complete an option");
		for(let i =0;i<checkbox.length;i++){
			checkbox[i].style.outline ="2px dotted red";
		}
		return false;
	}

/**
 * This is useless because of chooser.js
 * it can be removed
 **/
	if(counterCheckers>1){
		alert("You must select a single element");
		return false;
	}

	// get the value of the inserted option

	let insertedAmount = document.getElementById("money").value;

	let conversionObjects = {
		"value1":"euro",
		"value2":"dollar",
		"value3":"pounds",
		"value4":"yuan",
		"value5":"ruble",
		"value6":"moldovenesc",
		"value7":"swedish"

	};

	const conversionValues ={
		"EUR":4.941,
		"USD":4.575,
		"GBP":5.961,
		"YUAN":0.717,
		"RUBLE":0.057,
		"MLD":0.247,
		"SUE":0.478
	};

	//check to see if it amount is inserted

	if (insertedAmount==="" || insertedAmount===null){
		alert("You need to insert an amount to make the conversion");
		document.getElementById("money").style.backgroundColor ="red";
		//return false;
	}

	if(insertedAmount==="0" || insertedAmount.startsWith("0")){
		alert("You must enter a non-zero value");
		document.getElementById("money").style.backgroundColor ="red";

		return false;
	}
	//if it is completed say to the user to click the convert button
	
	

	//clear red background if user selects to enter a value

	document.getElementById("money").onfocus = function(){clearBackground()};

	function clearBackground(){
		document.getElementById("money").style.backgroundColor="white";
	}

	//make the conversions now
	if(insertedAmount!==""){
		switch(checkboxOption){
			case conversionObjects["value1"]:
			convertedValue = insertedAmount/conversionValues["EUR"];
			document.getElementById("convert").value = convertedValue.toFixed(2)+" Euros";
			//document.getElementById("convert").style.backgroundColor="grey";
			document.getElementById("convert").style.color = "#000";
			document.getElementById("convert").style.fontWeight ="1000"
			document.getElementById("convert").style.fontSize ="20px";
			document.getElementById("convert").style.Family ="Helvetica";
			document.getElementById("convert").style.textAlign ="center";
			document.getElementById("convert").style.backgroundImage="url('europa.png')";
			document.getElementById("convert").style.backgroundRepeat ="no-repeat";
			document.getElementById("convert").style.backgroundSize= "300px 80px";
			//document.getElementById("selection").style.height ="40px";


			break;

			case conversionObjects["value2"]:
			convertedValue = insertedAmount/conversionValues["USD"];
			document.getElementById("convert").value = convertedValue.toFixed(2)+" Dollars";
			//document.getElementById("convert").style.backgroundColor="grey";
			document.getElementById("convert").style.color = "#000";
			document.getElementById("convert").style.fontWeight ="1000";
			document.getElementById("convert").style.fontSize ="20px";
			document.getElementById("convert").style.Family ="Helvetica";
			document.getElementById("convert").style.textAlign ="center";
			document.getElementById("convert").style.backgroundImage="url('sua.png')";
			document.getElementById("convert").style.backgroundRepeat ="no-repeat";
			document.getElementById("convert").style.backgroundSize= "300px 80px";
			break;

			case conversionObjects["value3"]:
			convertedValue = insertedAmount/conversionValues["GBP"];
			document.getElementById("convert").value = convertedValue.toFixed(2)+" Pounds";
			//document.getElementById("convert").style.backgroundColor="grey";
			document.getElementById("convert").style.color = "#000";
			document.getElementById("convert").style.fontWeight ="1000";
			document.getElementById("convert").style.fontSize ="20px";
			document.getElementById("convert").style.Family ="Helvetica";
			document.getElementById("convert").style.textAlign ="center";
			document.getElementById("convert").style.backgroundImage="url('marea britanie.png')";
			document.getElementById("convert").style.backgroundRepeat ="no-repeat";
			document.getElementById("convert").style.backgroundSize= "300px 80px";
			break;

			case conversionObjects["value4"]:
			convertedValue = insertedAmount/conversionValues["YUAN"];
			document.getElementById("convert").value = convertedValue.toFixed(2)+" Yuans";
			//document.getElementById("convert").style.backgroundColor="grey";
			document.getElementById("convert").style.color = "#000";
			document.getElementById("convert").style.fontWeight ="1000";
			document.getElementById("convert").style.fontSize ="20px";
			document.getElementById("convert").style.Family ="Helvetica";
			document.getElementById("convert").style.textAlign ="center";
			document.getElementById("convert").style.backgroundImage="url('china.png')";
			document.getElementById("convert").style.backgroundRepeat ="no-repeat";
			document.getElementById("convert").style.backgroundSize= "300px 80px";
			break;

			case conversionObjects["value5"]:
			convertedValue = insertedAmount/conversionValues["RUBLE"];
			document.getElementById("convert").value = convertedValue.toFixed(2)+" Rubles";
			//document.getElementById("convert").style.backgroundColor="grey";
			document.getElementById("convert").style.color = "#000";
			document.getElementById("convert").style.fontWeight ="1000";
			document.getElementById("convert").style.fontSize ="20px";
			document.getElementById("convert").style.Family ="Helvetica";
			document.getElementById("convert").style.textAlign ="center";
			document.getElementById("convert").style.backgroundImage="url('rusia2.png')";
			document.getElementById("convert").style.backgroundRepeat ="no-repeat";
			document.getElementById("convert").style.backgroundSize= "300px 80px";
			break;

			case conversionObjects["value6"]:
			convertedValue = insertedAmount/conversionValues["MLD"];
			document.getElementById("convert").value = convertedValue.toFixed(2)+" Moldavian lei";
			//document.getElementById("convert").style.backgroundColor="grey";
			document.getElementById("convert").style.color = "#000";
			document.getElementById("convert").style.fontWeight ="1000";
			document.getElementById("convert").style.fontSize ="20px";
			document.getElementById("convert").style.Family ="Helvetica";
			document.getElementById("convert").style.textAlign ="center";
			document.getElementById("convert").style.backgroundImage="url('moldova.png')";
			document.getElementById("convert").style.backgroundRepeat ="no-repeat";
			document.getElementById("convert").style.backgroundSize= "300px 80px";
			break;

			case conversionObjects["value7"]:
			convertedValue = insertedAmount/conversionValues["SUE"];
			document.getElementById("convert").value = convertedValue.toFixed(2)+" Swedish crowns";
			//document.getElementById("convert").style.backgroundColor="grey";
			document.getElementById("convert").style.color = "#000";
			document.getElementById("convert").style.fontWeight ="1000";
			document.getElementById("convert").style.fontSize ="20px";
			document.getElementById("convert").style.Family ="Helvetica";
			document.getElementById("convert").style.textAlign ="center";
			document.getElementById("convert").style.backgroundImage="url('suedia.png')";
			document.getElementById("convert").style.backgroundRepeat ="no-repeat";
			document.getElementById("convert").style.backgroundSize= "300px 80px";
			break;

		default:
			aleert("Something has gone incorrect. Refreshing the page");
			location.reload();

	}
}

	
	


}