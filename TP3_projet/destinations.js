class Destinations {
    constructor (destination,image,promotion,offre,prix) {
        this.destination = destination;
        this.image = image;
        this.promotion = promotion;
        this.offre = offre;
        this.prix = prix;
    }

}

var espagne = new Destinations("Espagne","../Media/imgEspagne","Circuit plage, hôtel 4*","Lorem ipsum dolor sit amet","800 €");
var maroc = new Destinations("Maroc","../Media/imgMaroc","Circuit Oasis, hôtel 4*","Lorem ipsum dolor sit amet","1000 €");
var bresil = new Destinations("Brésil","../Media/imgBresil","Circuit favellas, hôtel 4*","Lorem ipsum dolor sit amet","2000 €");

let destination = [espagne,maroc,bresil];

function afficheDest(dest){
if(document.getElementsByTagName('thead').length <= 1) {


    var table = document.createElement('table');
    var headers = ["Destination", "Image","Promotions","Offre","Prix"];

    for (var i = 0; i < destination.length ; i++) {
        var row = table.insertRow(i);
        row.insertCell(0).innerHTML = destination[i].destination; 
        row.insertCell(1).innerHTML = "<img src=" + destination[i].image+ ".jpeg>"; 
        row.insertCell(2).innerHTML = destination[i].promotion;
        row.insertCell(3).innerHTML = destination[i].offre;
        row.insertCell(4).innerHTML = destination[i].prix; 
        row.insertCell(5).innerHTML = "<button id= 'btnn' onclick='onclickSupprimer(this)'> Supprimer</button>" + "<button id='modif' onclick='onclickModifier(this)'> Modifier</button>" + "<button id='modifierTab' onclick='onclickValiderModif(this)'> Valider</button> "

        
    }

    var header = table.createTHead();
    var headerRow = header.insertRow(0);
    for(var i = 0; i < headers.length; i++) {
        headerRow.insertCell(i).innerHTML = headers[i];
    }
  

    document.getElementById("body").remove();
    var g = document.createElement('div');
    g.setAttribute("id", "body");
    document.body.append(g);
    var body = document.getElementById("body");
    body.innerHTML = '<br>' + '<br>' + '<br> ' + '<br>'
    body.append(table);
    
    var btn = document.createElement('button');
    btn.setAttribute("id", "btn");
    btn.setAttribute("onclick", "onclickAjout()");

    btn.innerHTML="Ajouter Destination " 
    //document.getElementById("modifierTab").hidden= true;

    body.appendChild(btn) 


    //document.getElementById("body").replaceChildren(table);

    
    //var body = document.getElementById("body");
    //body.appendChild = table;
    dest = destination


}
}


function afficheDestination(){
   
        afficheDest(destination) ;
    
}

function onclickValider(values) {
    console.log(values);

    
const test = new Destinations(...values);
destination.push(test)

afficheDest(destination);

}

function onclickSupprimer(values) {
    var p = values.parentNode.parentNode;
    console.log(p.rowIndex-1,1);
    destination.splice(p.rowIndex-1,1);
//const btnn = document.getElementById('btnn');
//const table = btnn.getElementsByTagName('tr');
//destination.splice(table,1);

afficheDest(destination);

}


function onclickModifier(values) {
    if(document.getElementsByTagName('input').length <= 1) {
    var p = values.parentNode.parentNode;
    var modif = document.getElementById('modif');
    var input = document.createElement("input");
    var input2 = document.createElement("input");
    var input3 = document.createElement("input");
    var input4 = document.createElement("input");
    var input5 = document.createElement("input");
   
    input.setAttribute('placeholder', 'Destination');
    input2.setAttribute('placeholder', '../Media/imgEspagne.jpeg');
    input3.setAttribute('placeholder', 'Promotion');
    input4.setAttribute('placeholder', 'Offre');
    input5.setAttribute('placeholder', 'Prix');

    input.setAttribute('id', 'destination');
    input2.setAttribute('id', 'image');
    input3.setAttribute('id', 'promotion');
    input4.setAttribute('id', 'offre');
    input5.setAttribute('id', 'prix');


    p.appendChild(input);
    p.appendChild(input2);
    p.appendChild(input3);
    p.appendChild(input4);
    p.appendChild(input5);
   
    

    var validerModif = document.getElementById('modifierTab');
    validerModif.setAttribute('type', 'submit');
    validerModif.setAttribute('value', 'valider');
    //validerModif.style.visibility = null;
    console.log(destination);
    
    }
    else {
        var destination = document.getElementById("destination");
var image = document.getElementById("image");
var promotion = document.getElementById("promotion");
var offre = document.getElementById("offre");
var prix = document.getElementById("prix");
destination.remove();
image.remove();
promotion.remove();
offre.remove();
prix.remove();

    }}



function newDestination(){
var destination = document.getElementById("destination").value;
var image = document.getElementById("image").value;
var promotion = document.getElementById("promotion").value;
var offre = document.getElementById("offre").value;
var prix = document.getElementById("prix").value;
return new Destinations(destination,image,promotion,offre,prix);

}
function test(target) {
    dest = newDestination();
    var p = target.parentNode.parentNode;
    console.log(p.cells[0].firstChild);
    console.log(dest.destination);
    var newTdPays = p.cells[0];
    newTdPays.innerHTML = dest.destination;


}

//edit array when click on valider
function onclickValiderModif(values){
dest = newDestination();

let p = values.parentNode.parentNode;
console.log(p.cells[0].firstChild);




var newTdPays = p.cells[0];
newTdPays.innerHTML = dest.destination;

var newTdImg = p.cells[1].firstChild;
newTdImg.setAttribute("src",dest.image);

var newTdCircuit = p.cells[2];
newTdCircuit.innerHTML = dest.promotion;

var newTdHotel = p.cells[3];
newTdHotel.innerHTML = dest.offre;

var newTdTarif = p.cells[4];
newTdTarif.innerHTML = dest.prix; 



console.log(destination);

console.log(p);

//destination[p.rowIndex-1].image = img;

//destination.splice(p.rowIndex-1,1);




}

/*
<table>
<thead>
    <tr>
        <th>Destination</th>
        <th>Image</th>
        <th>Promotions</th>
        <th>Offre</th>
        <th>Prix</th>
    </tr>
</thead>
<tbody id="dest_body">
    <tr>
        <td>Espagne</td>
        <td><img src="../Media/imgEspagne.jpeg"></td>
        <td>Circuit plage, hôtel 4*</td>
        <td>Lorem ipsum dolor sit amet</td>
        <td>800 € </td>
        <td class="button"><button > Découvrir</button></td>

    </tr>
    <tr>
        <td>Maroc</td>
        <td><img src="../Media/imgMaroc.jpeg"></td>
        <td>Circuit Oasis, hôtel 4*</td>
        <td>Lorem ipsum dolor sit amet</td>
        <td>1000 €</td>
        <td class="button"><button> Découvrir</button></td>

    <tr>
        <td>Brésil</td>
        <td> <img src="../Media/imgBresil.jpeg"></td>
        <td>Circuit favellas, hôtel 4*</td>
        <td>Lorem ipsum dolor sit amet</td>
        <td>2000 €</td>
        <td class="button"><button> Découvrir</button></td>
    </tr>
    </tr>
</tbody>

</table>

*/


// class menuicheDest()

