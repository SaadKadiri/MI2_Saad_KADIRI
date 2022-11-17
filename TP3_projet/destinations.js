class Destinations {
    constructor (destination,image,promotion,offre,prix) {
        this.destination = destination;
        this.image = image;
        this.promotion = promotion;
        this.offre = offre;
        this.prix = prix;
    }

        /*
     afficheDest(){
        var tableau  = document.getElementById("body");
        
        var table = document.createElement("table");
        var thead = document.createElement("thead");
        var th = document.createElement("th");
        var th2 = document.createElement("th");
        var th3 = document.createElement("th");
        var th4 = document.createElement("th");
        var th5 = document.createElement("th");
        var tbody = document.createElement("tbody");
        var tr = document.createElement("tr");
        var td = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var td5 = document.createElement('td');
    
        var img = document.createElement('img');
        var btn = document.createElement('button')
        img.src = this.image;
        img.alt = this._nom;
    
    
    
        var destination = document.createTextNode(this.destination);
        var image = document.createTextNode(this.image);
        var promotion = document.createTextNode(this.promotion);
        var offre = document.createTextNode(this.offre);
        var prix = document.createTextNode(this.prix);
    
        td.appendChild(destination);
        td2.appendChild(image);
        td3.appendChild(promotion);
        td4.appendChild(offre);
        td4.appendChild(prix);
        td5.appendChild(btn);
    
        tr.appendChild(th);
        tr.appendChild(th2);
        tr.appendChild(th3);
        tr.appendChild(th4);
        tr.appendChild(th5);
    
        thead.appendChild(tr);
        table.appendChild(thead);
    
        tr.appendChild(td);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
    
        tbody.appendChild(tr);
        table.appendChild(tbody);
    
        tableau.appendChild(table);
    }
    */
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
        row.insertCell(5).innerHTML = "<button> Découvrir</button>"
        
    }

    var header = table.createTHead();
    var headerRow = header.insertRow(0);
    for(var i = 0; i < headers.length; i++) {
        headerRow.insertCell(i).innerHTML = headers[i];
    }
  
    //document.body.append(table);
    //document.getElementById("body").removeChild(body.children);
    //document.getElementById("body").replaceChildren(table);
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

