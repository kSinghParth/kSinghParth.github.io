var xmlhttp = new XMLHttpRequest();
var myOBJ;
var myOBJ2;
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myOBJ = JSON.parse(this.responseText);
    }
};
xmlhttp.open("GET", "data.json",false);
xmlhttp.send();
// console.log(cht);


// var htmlpage = new XMLHttpRequest();
// htmlpage.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         myObj2 = this.responseText;
//     }
// };
// htmlpage.open("GET", "pagehtml.php", true);
// htmlpage.send();

var myOBJ2="<p>sasf</p>. <p>sasf</p>";

var i=0;
var ch=myOBJ2.indexOf("<p>");
var ch2=myOBJ2.indexOf("</p>");
while(ch>=0){
	var cht=myOBJ[i].name;
myOBJ2=myOBJ2.substring(0,ch+3)+cht+myOBJ2.substring(ch2);
var ch=myOBJ2.indexOf("<p>",ch2);
var ch2=myOBJ2.indexOf("</p>",ch);
i++;
    }
    console.log(myOBJ2);