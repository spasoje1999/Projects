$(function () {
  
  // Navigacija - navbarNav
var meni = ["Početna", "Kriptovalute", "Cene", "Kontakt", "Autor"]
var meniHref = ["#", "#class", "#schedule", "#contact", "#autor"]
var output = "";
var barNav = document.getElementById("navbarNav");
output+="<ul class='navbar-nav'>";
for(let i = 0; i < meni.length; i++){
    output += `<li class="nav-item">
                    <a class="nav-link smoothScroll" href="${meniHref[i]}">${meni[i]}</a>
                </li>`
}
output+= "</ul>";
barNav.innerHTML+=output;

// Slajder
setInterval(Slider, 3000);
var slajderSlike = ["slajder1.jpg", "slajder2.jpg", "slajder3.jpg", "slajder4.jpg"];
var brojac = 0;
var slajder = document.getElementById("pozadinaSlajder");

function Slider(){
    if (brojac === slajderSlike.length) {
        brojac = 0;
      }


slajder.style.backgroundImage = "url('images/" + slajderSlike[brojac] + "')";
  brojac++;
}
// Kriptovalute
var kriptovaluteIme = ["Bitkoin", "Itirijum", "Lajtkoin", "Polkadot", "Kardano", "Ripl", "Fantom", "Šiba Inu"]
var kriptovaluteSlike = ["bitkoin.jpg", "itirijum.jpg", "lajtkoin.jpg", "dot.jpg", "ada.jpg", "ripl.jpg", "fantom.png", "shiba.jpg"]
var kriptovaluteOpis = ["Stvorila ju je 2009. osoba ili grupa ljudi pod pseudonimom Satoši Nakamoto.", "Projekat je zvanično objavljen u januaru 2014. godine, a osnivač je Vitalik Buterin.","Čarli Li izvršni je direktor Lajtkoina i osnivač samog 'novčića' – šeste najveće kriptovalute na svetu.","Gavin Vud je kreator ove kriptovalute. Prva prodaja izvršena je 27. oktobra 2017. godine.", "Stvorio ju je saosnivač Itirijuma Čarls Hoskinson. Platforma je pokrenuta 2017.", "Osnivač ove valute je Ripl Lab, Američka kompanija čiji je vlasnik Kris Larsen", "Izvršni direktor platforme je Michael Kong. Stvoren je 2018. godine, ali u prodaji je od decembra 2019. godine.","Kreirana je 2020. godine. Pokrenuta je od strane izvesnog 'Ryoshi'"]
var kriptovaluteDodatniTekst = ["To je decentralizovana digitalna valuta bez centralne banke ili jednog administratora koja može biti poslata od korisnika do korisnika na peer-to-peer bitkoin mreži bez potrebe za posrednicima To je digitalna i globalna valuta.","Preko pretprodaje tokena, tokom koje je iterijum prodat za bitkoine, tim je sakupio više od 31.000 bitkoina od zajednice okupljene oko kriptovaluta, što je, u to vreme, iznosilo oko 18 miliona dolara.","Radi po mehanizmu 'Proof of stake' – dokazivanje udela. Ovaj pristup funkcioniše na način da čvorovi na mreži ulažu određenu količinu kriptovalute da bi postali kandidati za potvrdu novog bloka i zaradu od njega. U prodaji je zvanično od 13. oktobra 2011. godine.","Polkadot radi na blokčejnu, koji je zamišljen kao jedan veliki lanac sastavljen od više lanaca. Ovakav lanac omogućuje da se sporedni lanci (side-chains) povezuju s javnim i glavnim lancem blokčejnom. Uz pomoć Polkadota različiti blokčejnovi mogu rezmenjivati informacije između sebe.","Platforma Kardano koristi svoj sopstveni blokčejn pod nazivom Cardano Settlement Layer (CSL). Platforma opcionalno može da uključi šifrovane metapodatke u blokčejn , što omogućava interakciju sa državnim regulatorima, zadržavajući u dovoljnoj meri privatnost vlasnika kriptovaluta.","Ripl je po tržišnoj kapitalizaciji premašio granicu od 70 milijardi dolara, i nakratko pretekao Itirijum na tržištu kriptovaluta. Dok su bitkoin i mnoge druge kriptovalute poznate po tome što su decentralizovane, vlasnici valute ripl su i te kako poznati i valuta je centralizovana.", "Zajedno sa internim tokenom FTM, Fantom ima za cilj da reši probleme povezane sa platformama za pametne ugovore, posebno brzinu transakcija, za koju programeri kažu da su smanjili na manje od dve sekunde.", "SHIB, ERC-20 token bazirana je na Itirijum blokčejn platformi. Odluka da se token zasnuje na Itirijumu donesena je zbog toga što je u pitanju već afirmisana i dobro zaštićena platforma. Ryoshi je, u međuvremenu, dao izjavu da ne poseduje ni jedan Shiba inu novčić (od ukupne ponude od 1 kvadriliona) i da je približno polovina ponude zaključana na decentralizovanoj berzi Uniswap."];

var ispisi = "";
var ispisKriptoDiv = document.getElementById("ispisKripto");
for(let i=0;i<kriptovaluteIme.length;i++){
  ispisKriptoDiv.innerHTML+=`<div class="col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay="400">
  <div class="class-thumb" id=blokKripto>
      <h3 class="mb-1" id="naslov">${kriptovaluteIme[i]}</h3>     
      <img src="images/${kriptovaluteSlike[i]}" class="img-fluid" alt="${kriptovaluteIme[i]}" id="slikaKripto" />
          <p class="mt-3" id="opisValute">${kriptovaluteOpis[i]}</p><p class='mt-3 dodatniTekst'></p> <a href="#"><p class="saznajVise" data-index="${i}">Saznaj više</p></a>
          
  </div>
  <a href='' class="btn btn-dark" id="dugmeKripto">Dodaj u novčanik</a>
</div>`;
}
ispisKriptoDiv.innerHTML+=ispisi;

// Saznaj vise/manje
$(document).on("click",".saznajVise", function (e) {
  e.preventDefault();
  var dodatniTekst = $(this).parent().prev();
  var idDodatnogTeksta = +$(this).attr("data-index");
  if($(this).attr("data-click") == "1"){
    $(this).attr("data-click","");
    dodatniTekst.fadeOut();
    $(this).text("Saznaj više");
  }
  else{
    $(this).text("↑");
    dodatniTekst.style="display: hidden";
    dodatniTekst.html(kriptovaluteDodatniTekst[idDodatnogTeksta]);
    $(dodatniTekst).fadeIn();
    $(this).attr("data-click", "1");
  }
  
});
  //plugin(Dodato..)
  $(document).on("click","#dugmeKripto", function (e) {
    e.preventDefault();
    $.toast('Dodato. Količinu odrediti nakon registracije.', 2000);
  });
  //sve za formu
  $(document).on("blur","#ime", function () {
    if($("#ime").val() == ""){
      $("#ime").addClass("crno");
    }
  });
  $(document).on("blur","#prezime", function () {
    if($("#prezime").val() == ""){
      $("#prezime").addClass("crno");
    }
  });
  $(document).on("blur","#broj", function () {
    if($("#broj").val() == ""){
      $("#broj").addClass("crno");
    }
  });
  $(document).on("blur","#email", function () {
    if($("#email").val() == ""){
      $("#email").addClass("crno");
    }
  });
  $(document).on("click", "#submit-button", function (e) {
    e.preventDefault();
    var errors = [];
    
    const PHONE_REGEX = /^[+][3][8][1]\s[0-9][\d]+$/;
    const PHONE_ERROR = 'Uneli ste broj telefona u pogrešnom formatu. (+381 651234789)';
    const NAMES_REGEX = /^[A-ZŠĆČŽĐ][a-zčćžšđ]{2,14}$/;
    const NAME_ERROR = 'Niste uneli ime na pravi način. (Marko, Jovan)';
    const SURNAME_ERROR = 'Niste uneli prezime na pravi način. (Ivanović, Perić)';
    const EMAIL_REGEX =  /^[a-z][\w\.\-]{2,25}\@[a-z0-9]{2,15}(\.[a-z]{2,4})?\.[a-z]{2,4}$/;
    const EMAIL_ERROR = 'Uneli ste mejl u pogrešnom formatu. (pera@gmail.com, joca1992@yaho.com)';

    var ime = document.getElementById("ime");
    var prezime = document.getElementById("prezime")
    var phone = document.getElementById("broj")
    var email = document.getElementById("email")

    var imeError = $("#nameError");
    var prezimeError = $("#surnameError");
    var phoneError = $("#phoneError");
    var emailError = $("#emailError");

    imeError.html("");
    prezimeError.html("");
    phoneError.html("");
    emailError.html("");      

    checkRegex(ime.value,NAMES_REGEX,NAME_ERROR, imeError, errors, ime);
    checkRegex(prezime.value,NAMES_REGEX,SURNAME_ERROR, prezimeError, errors, prezime);
    checkRegex(phone.value,PHONE_REGEX,PHONE_ERROR, phoneError, errors, phone);
    checkRegex(email.value,EMAIL_REGEX,EMAIL_ERROR, emailError, errors, email);
    if(errors.length == 0){
      document.getElementById("potvrda").innerHTML = "Uspešno ste se registrovali.";
    }
    else{
      document.getElementById("potvrda").innerHTML = "";
    }
  });
  
// ispis ikonica u futeru

  var futerHref = ["https://www.facebook.com", "https://www.instagram.com", "https://twitter.com"];
  var futerClass = ["fa fa-facebook", "fa fa-instagram", "fa fa-twitter"];

  var ispis  = `
        <ul>
    `;
    for(var i in futerHref){
      ispis += `
          <li><a class="ikonice" href="${futerHref[i]}"><i class="${futerClass[i]}"></i></a></li>
      `;
  }
  ispis += "</ul>";
  document.getElementById("futerIkone").innerHTML = ispis;

 

});
function checkRegex(value, regex, error, errorInput, array, element) {
  if (!regex.test(value)) {
    array.push(error);
    errorInput.html(error);
    element.classList.remove("zeleno");
    element.classList.remove("crno");
    element.classList.add("crveno");
  }
  else{
    element.classList.remove("crveno");
    element.classList.remove("crno");
    element.classList.add("zeleno");
  }
}