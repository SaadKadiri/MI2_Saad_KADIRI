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


//}



function afficheVisiteVirtuelAudio(){
    var body = document.getElementById("body");
    body.innerHTML = '<br>' + '<br> ' + '<br>'+'<h2> Visite virtuelle(AUDIO)</h2>' + '<br>' +   '<table>' + '<thead>' + '<tr>' + '<th>Pays</th>' +  '<th>Description</th>' + '<th>Audio</th>' + '</tr>' + '</thead>' +
    '<tbody>' + '<tr>' + '<td>Espagne</td>' + '<td>Visite audio de l\'hôtel en Espagne :</td>' + '<td>' +'<figure>' + '<audio controls autoplays src="../Media/cheers.mp3">' 
    + '<a href="../Media/cheers.mp3">' + '</a>' + '</audio>' + '</figure>' + '</td>' + '</tr>' + '<tr>' + '<td>Maroc</td>' + '<td>Visite audio de l\'hôtel au Maroc :</td>' + '<td>' +'<figure>' + '<audio controls autoplays src="../Media/cheers.mp3">' 
    + '<a href="../Media/cheers.mp3">' + '</a>' + '</audio>' + '</figure>' + '</td>' + '</tr>' + '<tr>' + '<td>Brésil</td>' + '<td>Visite audio de l\'hôtel au Brésil :</td>' + '<td>' +'<figure>' + '<audio controls autoplays src="../Media/cheers.mp3">' 
    + '<a href="../Media/cheers.mp3">' + '</a>' + '</audio>' + '</figure>' + '</td>' + '</table>'
}

function afficheVisiteVirtuelVideo(){
    var body = document.getElementById("body");
    body.innerHTML = '<br>' + '<br> ' + '<br>'+'<h2> Visite virtuelle(VIDEO)</h2>' + '<br>' +   '<table>' + '<thead>' + '<tr>' + '<th>Pays</th>' +  '<th>Description</th>' + '<th>Video</th>' + '</tr>' + '</thead>' +
    '<tbody>' + '<tr>' + '<td>Espagne</td>' + '<td>Visite video de l\'hôtel en Espagne :</td>' + '<td>' +'<figure>' + '<video controls width="250" src="../Media/file.mp4">' 
    + '<a href="../Media/file.mp4">' + '</a>' + '</video>' + '</figure>' + '</td>' + '</tr>' + '<tr>' + '<td>Maroc</td>' + '<td>Visite video de l\'hôtel au Maroc :</td>' + '<td>' +'<figure>' + '<video controls width="250" src="../Media/file.mp4">' 
    + '<a href="../Media/file.mp4">' + '</a>' + '</video>' + '</figure>' + '</td>' + '</tr>' + '<tr>' + '<td>Brésil</td>' + '<td>Visite video de l\'hôtel au Brésil :</td>' + '<td>' +'<figure>' + '<video controls width="250" src="../Media/file.mp4"">' 
    + '<a href="../Media/file.mp4">' + '</a>' + '</video>' + '</figure>' + '</td>' + '</table>'

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


