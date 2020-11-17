import {Bola} from "./claseBola.js";
window.onload=main; 
var svg;
var bolas=[];
function main(){
    svg=document.querySelector("svg");
    crearBolas();
    setInterval(anima,30);
}

function crearBolas(){
    for(let i=0; i<11;i++){
        let bola=new Bola(svg.getBoundingClientRect().width, svg.getBoundingClientRect().height);
        bolas.push(bola);
        bola.dibujar(svg);
    }
}

function anima(){
    for(let bola of bolas){
        bola.animar(svg);
    };
}