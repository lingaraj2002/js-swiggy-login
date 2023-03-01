let form1 = document.querySelector('form');


form1.addEventListener("submit",function(log){
	log.preventDefault();
	let user = document.getElementById("user").value;
	let password1 = document.getElementById("pwd1").value;
	let password2 = document.getElementById("pwd2").value;
	let span1 = document.getElementById("span1");
	let span2 = document.getElementById("span2");
	// let attri = document.getElementById("user").getAttribute("placeholder")
	// attri.style.color="green";
	
	if (user===""){
		span1.innerHTML="plz enter the user name";
		span1.style.color="red";
	}	
	else{
		span1.innerHTML = "*";
		span1.style.color="green";
	}


	if(password1==="" && password2===""){
		span2.innerHTML = "plz enter the password";
		span2.style.color="red";
	}
	else if(password1!=password2){
		span2.innerHTML = "plz enter the correct password";
		span2.style.color="red";
	}
	else{
		span2.innerHTML ="*";
		span2.style.color="green";
	}
	
})
	


