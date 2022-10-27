const espagne = new Destinations("Espagne","../Media/imgEspagne","Circuit plage, hôtel 4*","Lorem ipsum dolor sit amet","800 €");
const maroc = new Destinations("Maroc","../Media/imgMaroc","Circuit Oasis, hôtel 4*","Lorem ipsum dolor sit amet","1000 €");
const bresil = new Destinations("Brésil","../Media/imgBresil","Circuit favellas, hôtel 4*","Lorem ipsum dolor sit amet","2000 €");

var destination = [espagne,maroc,bresil];
let dest = document.getElementById("dest_body")

function afficheTable(){
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
  
    document.body.append(table);
}
afficheTable();