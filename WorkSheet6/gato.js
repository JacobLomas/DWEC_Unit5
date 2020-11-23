window.onload=main;
function main(){
    var clicks=0; var clicks2=0;
    var contador = document.createElement("h2");
    contador.innerHTML='Bonny: '+clicks+' <br> To: '+clicks2;

    var bonny= document.createElement("img");
    bonny.src="./gato.jpg";
    bonny.width="436";
    bonny.height="264";
    document.body.appendChild(bonny);
    document.body.appendChild(contador);
    bonny.addEventListener("click", function(){
        clicks++;
        contador.innerHTML='Bonny: '+clicks+' <br> To: '+clicks2;
    })

    var to = document.createElement("img");
    to.src="./to.jpg";
    to.width="436";
    to.height="264";
    document.body.appendChild(to);
    to.addEventListener("click", function(){
        clicks2++;
        contador.innerHTML='Bonny: '+clicks+' <br> To: '+clicks2;
    });


    var imagenes=new Array(10);
    var bonny=0;
    for(imagen of imagenes){
        bonny++;
        imagen=document.createElement("img");
        imagen.src="./to.jpg";
        imagen.width="436";
        imagen.height="264";
        imagen.nombre="Bonny"+bonny;
        imagen.cont=0;
        document.body.appendChild(imagen);
        imagen.addEventListener("click", function(){
            imagen.cont++;
            contador.innerHTML+=imagen.nombre+': '+imagen.cont+'<br>';
        })
    }
    
}