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
h4.innerHTML = " Ajout d'un element dans le tableau : " + '<br>'
valider.setAttribute("id", "btn");

valider.setAttribute("onclick", "onclickValider()");
valider.innerHTML = " Valider"

//div.innerHTML= '<br>'
label.setAttribute("for", "Destination",);
label.textContent = "Destination : ";
label.appendChild(input);

label2.setAttribute("for", "Image",);
label2.textContent = "Image : ";
label2.appendChild(input2);

label3.setAttribute("for", "Promotion",);
label3.textContent = "Promotion : ";
label3.appendChild(input3);

label4.setAttribute("for", "Offre",);
label4.textContent = "Offre : ";
label4.appendChild(input4);

label5.setAttribute("for", "Prix",);
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




