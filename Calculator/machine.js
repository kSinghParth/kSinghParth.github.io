var button = document.getElementsByTagName("input");
	for(var i=1;i<button.length;i++){
  		button[i].addEventListener("click", function() {
    	console.log("Button clicked.");
    	if(this.value=="="){
    		document.Calc.Numbers.value=eval(Calc.Numbers.value);
    		}
    	else if(this.value=="AC"){
    		document.Calc.Numbers.value ="";
    		}
    	else
    		document.Calc.Numbers.value += this.value;
  		});
  	}
