function myfunct(x){
    document.getElementById("value").value=document.getElementById("value").value+x;
}
function funceval(){
	var x=document.getElementById("value").value;
	var l=0;
		while(x.indexOf('sin',l)!=-1){
			l=x.indexOf('sin',l);
			var temp=Math.sin(x.substring(l+4,x.indexOf(')',l))/180*Math.PI);
			x=x.replace(x.substring(l,x.indexOf(')',l+1)+1),temp);
			l=0;
		}
		while(x.indexOf('tan',l)!=-1){
			l=x.indexOf('tan',l);
			var temp1=Math.tan(x.substring(l+4,x.indexOf(')',l))/180*Math.PI);
			x=x.replace(x.substring(l,x.indexOf(')',l+1)+1),temp1);
			l=0;
		}
		while(x.indexOf('cos',l)!=-1){
			l=x.indexOf('cos',l);
			var temp2=Math.cos(x.substring(l+4,x.indexOf(')',l))/180*Math.PI);
			x=x.replace(x.substring(l,x.indexOf(')',l+1)+1),temp2);
			l=0;
		}
		while(x.indexOf('ln',l)!=-1){
			l=x.indexOf('ln',l);
			var temp3=Math.log(x.substring(l+3,x.indexOf(')',l)));
			x=x.replace(x.substring(l,x.indexOf(')',l+1)+1),temp3);
			l=0;
		}
		while(x.indexOf('log',l)!=-1){
			l=x.indexOf('log',l);
			var temp4=Math.log(x.substring(l+4,x.indexOf(')',l)))/Math.log(10);
			x=x.replace(x.substring(l,x.indexOf(')',l+1)+1),temp4);
			l=0;
		}
		while(x.indexOf('e',l)!=-1){
			l=x.indexOf('e',l);
			var temp5=Math.E;
			x=x.replace('e',temp5);
			l=0;
		}
		while(x.indexOf('^',l)!=-1){
			l=x.indexOf('^',l);
			var lou=0;
			var b=/(\+|-|\(|\/|\*)/g;
			while(b.test(x.substring(0,l))){
				lou=b.lastIndex;
			}
			var temp6=Math.pow(x.substring(lou,l),x.substring(l+2,x.indexOf(')',l)));
			x=x.replace(x.substring(lou,x.indexOf(')',l)+1),temp6);
			l=0;
		}
		document.getElementById("value").value=eval(x);
}