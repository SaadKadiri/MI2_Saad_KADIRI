function onclickAjout() {
var body = document.getElementById("body");
var btn = document.getElementById("btn");
btn.remove();
var form = document.createElement("form");
var div = document.createElement("div");
var h4 = document.createElement("h4");

var label = document.createElement("label");
var label2 = document.createElement("label");
var label3 = document.createElement("label");
var label4 = document.createElement("label");
var label5 = document.createElement("label");

var input = document.createElement("input");
var input2 = document.createElement("input");
var input3 = document.createElement("input");
var input4 = document.createElement("input");
var input5 = document.createElement("input");

var valider = document.createElement("button");


const inputs = document.getElementsByTagName('input')

/*
for(let i; i<= inputs.length; i++ ) {
    inputs[i].setAttribute('required' ," ");
}
*/

//input.setAttribute('required','');
//form.setAttribute("onsubmit", "onclickValider(e)");
form.addEventListener("submit", (e)=>{onclickValider([...(new FormData(e.target)).values()] ) 
e.preventDefault();
});


valider.setAttribute('type', 'submit');
valider.setAttribute('value', 'valider');

h4.innerHTML = " Ajout d'un element dans le tableau : " + '<br>'
valider.setAttribute("id", "btn");

//valider.setAttribute("onclick", "onclickValider()");
valider.innerHTML = " Valider"

input2.setAttribute('placeholder', 'Exemple : ../Media/imgEspagne');

input.setAttribute("type","text");
input2.setAttribute("type","text");
input3.setAttribute("type","text");
input4.setAttribute("type","text");
input5.setAttribute("type","text");  

input.setAttribute("name","destination");
input2.setAttribute("name","image");
input3.setAttribute("name","promotion");
input4.setAttribute("name","offre");
input5.setAttribute("name","prix"); 


input.setAttribute("id","destination");
input2.setAttribute("id","image");
input3.setAttribute("id","promotion");
input4.setAttribute("id","offre");
input5.setAttribute("id","prix"); 

//div.innerHTML= '<br>'
label.setAttribute("for", "destination",);
label.textContent = "Destination : ";
label.appendChild(input);

label2.setAttribute("for", "image",);
label2.textContent = "Image : ";
label2.appendChild(input2);

label3.setAttribute("for", "promotion",);
label3.textContent = "Promotion : ";
label3.appendChild(input3);

label4.setAttribute("for", "offre",);
label4.textContent = "Offre : ";
label4.appendChild(input4);

label5.setAttribute("for", "prix",);
label5.textContent = "Prix : ";
label5.appendChild(input5);

div.appendChild(h4);
div.appendChild(label);
div.appendChild(label2)
div.appendChild(label3)
div.appendChild(label4)
div.appendChild(label5)
div.appendChild(valider);


form.appendChild(div);

body.appendChild(form);

//input.value;
}




