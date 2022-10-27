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
    '<li><a href="destinations.html">Destinations</a></li>' +
    '<li><a href="visiteVirtuelAudio.html">Visite virtuelle(audio)</a></li>'+
    '<li><a href="visiteVirtuelVideo.html">Visite virtuelle(vidéo)</a></li>' +
    '<li><a href="contact.html">Contact</a></li>' +
    '</ul>' +
    '</div>'

}

function afficheAcceuil() {
    document.getElementById("accueil").innerHTML = 
    '<br>'+ '<br>'+'<H1>Agence voyages Grenoble</H1>' + '<hr>'
    + '<h2>Accueil</h2>' + '<br>' 
    +'<div>' + '<h2 id="description">Description générale</h2>' 
    +'<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad libero inventore nulla. Laborum, deleniti nihil, consectetur unde accusamus quis adipisci dignissimos cupiditate, similique esse quia commodi quam obcaecati ullam dolores!</p>'
    + '<br>' + '<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad libero inventore nulla. Laborum, deleniti nihil, consectetur unde accusamus quis adipisci dignissimos cupiditate, similique esse quia commodi quam obcaecati ullam dolores!</p>'
    + '<hr>' + '</div>' + '<h3>Infos pratiques</h3>' + '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt atque autem ut porro ex aspernatur labore in nostrum ea minus, quisquam animi, harum odio vel iusto quis? Distinctio, corrupti sapiente.</p>' + '<hr>'
}
