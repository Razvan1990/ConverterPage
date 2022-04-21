function modifyText(){
	var insertedAmount = document.getElementById("money").value;


	if (insertedAmount!==""){
		document.getElementById("click").style.fontSize= "20px";
		document.getElementById("click").style.color="aquamarine";
		document.querySelector("body > div > div > div.answer_page > input.convert-button").style.backgroundColor ="lime";

	}
	else{
		document.getElementById("click").style.fontSize= "14px";
		document.getElementById("click").style.color="black";
		document.querySelector("body > div > div > div.answer_page > input.convert-button").style.backgroundColor ="white";

	}
}