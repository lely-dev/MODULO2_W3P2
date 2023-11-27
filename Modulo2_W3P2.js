// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun 
//prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio
// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; 
// questa classe deve modificare la visibilità/invisibilità dell'immagine

// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, 
// ogni volta che viene invocata


function modificaH1(){
    let myShop = document.getElementById("name_shop");
    myShop.innerText = "Art and Design";
}

function changeBackgound(){
    document.body.style.backgroundColor = "lightgreen";
}


function changeAddress(){
    let myNewAddress = document.getElementById("address");
    myNewAddress.innerText = "Via Giordano 15, Cremona";
}

    

let myAmazon = document.getElementsByTagName("a");

function amzLink(){
    for(let i = 0; i < myAmazon.length; i++){
        myAmazon[i] = myAmazon[i].classList.add("amazon_link")
    }
    console.log(myAmazon);
}

amzLink();

let myImage = document.querySelectorAll("img");

function imageProduct(){
    for(let i = 0; i < myImage.length; i++){
        myImage[i] = myImage[i].classList.toggle("hide_image")
    }
}


let myPrice = document.getElementsByClassName("price");

function priceChange(){
    for(let i = 0; i < myPrice.length; i++){
        myPrice[i] = myPrice[i].classList.toggle("color_price")
    }
}