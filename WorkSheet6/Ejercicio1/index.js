window.onload=main;
function main(){
    enlaces=document.querySelectorAll("a").length;
    penultimoEnlace=document.querySelectorAll("a")[enlaces-2].href;
    enlacesGoogle=0;
    document.querySelectorAll("a").forEach(function(a){
        if(a.href=="https://www.google.es/")
        enlacesGoogle++;
    });
    enlaces3Parrafo=document.querySelectorAll("p")[2].querySelectorAll("a").length;
    
    document.body.appendChild(document.createElement("p")).innerHTML=`Número de enlaces de la página: ${enlaces} <br>
    Dirección a la que enlaza el penúltimo enlace: ${penultimoEnlace} <br>
    Numero de enlaces que enlazan a google: ${enlacesGoogle} <br>
    Número de enlaces del tercer párrafo: ${enlaces3Parrafo}`;
 }