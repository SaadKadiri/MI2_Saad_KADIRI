function afficheNav(){
    var nav = document.getElementById('nav');
    nav.innerHTML = '<ul>' + 
    '<li><a onclick="afficheAcceuil()" href="#">Accueil</a></li>'+
    '<li class="dropdown">'+
    '<a href="#" class="dropbtn">Menu</a>' +
    '<div class="dropdown-content">'+
    '<a href="#">Connexion</a>'+
    '<a href="#">Recherche</a>'+
    '<a href="#">Réservation</a>'+
    '<a href="#">Promotions</a>'+
    '</div>' +
    '</li>'+
    '<li class="dropdown">'+
    '<a href="#" class="dropbtn">Services</a>' +
    '<div class="dropdown-content">'+
    '<a href="#">Information</a>'+
    '<a href="#">Location</a>'+
    '<a href="#">Assistance</a>'+
    '</div>' +
    '</li>'+
    '<li><a onclick="afficheDestination()" href="#">Destinations</a></li>' +
    '<li><a onclick="afficheVisiteVirtuelAudio()" href="#">Visite virtuelle(audio)</a></li>'+
    '<li><a onclick="afficheVisiteVirtuelVideo()" href="#">Visite virtuelle(vidéo)</a></li>' +
    '<li><a onclick="afficheContact()" href="#">Contact</a></li>' +
    '</ul>' +
    '</div>'

}

function afficheAcceuil() {
    var body = document.getElementById("body");
     body.innerHTML = '<br>'+ '<br>'+'<H1>Agence voyages Grenoble</H1>' + '<hr>'
    + '<h2>Accueil</h2>' + '<br>' 
    +'<div>' + '<h2 id="description">Description générale</h2>' 
    +'<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad libero inventore nulla. Laborum, deleniti nihil, consectetur unde accusamus quis adipisci dignissimos cupiditate, similique esse quia commodi quam obcaecati ullam dolores!</p>'
    + '<br>' + '<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad libero inventore nulla. Laborum, deleniti nihil, consectetur unde accusamus quis adipisci dignissimos cupiditate, similique esse quia commodi quam obcaecati ullam dolores!</p>'
    + '<hr>' + '</div>' + '<h3>Infos pratiques</h3>' + '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt atque autem ut porro ex aspernatur labore in nostrum ea minus, quisquam animi, harum odio vel iusto quis? Distinctio, corrupti sapiente.</p>' + '<hr>'
}


function afficheDestination(){
const espagne = new Destinations("Espagne","../Media/imgEspagne","Circuit plage, hôtel 4*","Lorem ipsum dolor sit amet","800 €");
const maroc = new Destinations("Maroc","../Media/imgMaroc","Circuit Oasis, hôtel 4*","Lorem ipsum dolor sit amet","1000 €");
const bresil = new Destinations("Brésil","../Media/imgBresil","Circuit favellas, hôtel 4*","Lorem ipsum dolor sit amet","2000 €");

var destination = [espagne,maroc,bresil];
let dest = document.getElementById("dest_body")


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
    if(row != null){
    document.getElementById("body").append(table);
    }
    //var body = document.getElementById("body");
    //body.appendChild = table;
}

function afficheVisiteVirtuelAudio(){
    var body = document.getElementById("body");
    body.innerHTML = '<br>' + '<br> ' + '<br>'+'<h2> Visite virtuelle(AUDIO)</h2>' + '<br>' +   '<table>' + '<thead>' + '<tr>' + '<th>Pays</th>' +  '<th>Description</th>' + '<th>Audio</th>' + '</tr>' + '</thead>' +
    '<tbody>' + '<tr>' + '<td>Espagne</td>' + '<td>Visite audio de l\'hôtel en Espagne :</td>' + '<td>' +'<figure>' + '<audio controls autoplays src="../Media/cheers.mp3">' 
    + '<a href="../Media/cheers.mp3">' + '</a>' + '</audio>' + '</figure>' + '</td>' + '</tr>' + '<tr>' + '<td>Maroc</td>' + '<td>Visite audio de l\'hôtel au Maroc :</td>' + '<td>' +'<figure>' + '<audio controls autoplays src="../Media/cheers.mp3">' 
    + '<a href="../Media/cheers.mp3">' + '</a>' + '</audio>' + '</figure>' + '</td>' + '</tr>' + '<tr>' + '<td>Brésil</td>' + '<td>Visite audio de l\'hôtel au Brésil :</td>' + '<td>' +'<figure>' + '<audio controls autoplays src="../Media/cheers.mp3">' 
    + '<a href="../Media/cheers.mp3">' + '</a>' + '</audio>' + '</figure>' + '</td>'
}

function afficheVisiteVirtuelVideo(){
    var body = document.getElementById("body");
    body.innerHTML = '<br>' + '<br> ' + '<br>'+'<h2> Visite virtuelle(VIDEO)</h2>' + '<br>' +   '<table>' + '<thead>' + '<tr>' + '<th>Pays</th>' +  '<th>Description</th>' + '<th>Video</th>' + '</tr>' + '</thead>' +
    '<tbody>' + '<tr>' + '<td>Espagne</td>' + '<td>Visite video de l\'hôtel en Espagne :</td>' + '<td>' +'<figure>' + '<video controls width="250" src="../Media/file.mp4">' 
    + '<a href="../Media/file.mp4">' + '</a>' + '</video>' + '</figure>' + '</td>' + '</tr>' + '<tr>' + '<td>Maroc</td>' + '<td>Visite video de l\'hôtel au Maroc :</td>' + '<td>' +'<figure>' + '<video controls width="250" src="../Media/file.mp4">' 
    + '<a href="../Media/file.mp4">' + '</a>' + '</video>' + '</figure>' + '</td>' + '</tr>' + '<tr>' + '<td>Brésil</td>' + '<td>Visite video de l\'hôtel au Brésil :</td>' + '<td>' +'<figure>' + '<video controls width="250" src="../Media/file.mp4"">' 
    + '<a href="../Media/file.mp4">' + '</a>' + '</video>' + '</figure>' + '</td>'

}

function afficheContact(){
    var body = document.getElementById("body"); 
    body.innerHTML= '<br>' + '<br> ' + '<br>'+'<h2>Contact</h2>' +
    '<form action="/ma-page-de-traitement" method="post">' +
        '<div>' +
            '<label for="name">Nom :</label>' +
            '<input type="text" id="name" name="user_nom" placeholder="Nom"required>' +
            '<label for="prenom">Prenom :</label>' +
            '<input type="text" id="pren" name="user_prenom" placeholder="Prenom"required>' +
        '</div>' +
        '<div>' +
            '<label for="name">E-mail&nbsp;:</label>' +
            '<input type="email" id="mail" name="user_mail" placeholder="exemple@exemple.com"  required>' +
            '<label for="phone">Téléphone&nbsp;:</label>' + 
            '<input type="tel" id="phone" name="user_phone"placeholder="06 23 45 67 89" pattern="[0-9]{10}" required>' +
        '</div>' +
        '<div>'+
            '<label for="msg">Message :</label>' +
           ' <textarea id="msg" name="user_message" required></textarea > ' +
        '</div>' +
        '<input type="submit" value="Valider">' +
    '</form>' 
}

function start() {
    afficheNav();
    afficheAcceuil();
}
