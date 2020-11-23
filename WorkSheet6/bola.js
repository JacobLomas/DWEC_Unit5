import {Bola} from "./claseBola.js";
window.onload=main; 
var svg;
var bolas=[];
function main(){
    svg=document.querySelector("svg");
    crearBolas();
    setInterval(anima,10);
}

function crearBolas(){
    for(let i=0; i<4;i++){
        let radio=getRandomR();
        let cx= getRandomPosX((svg.getBoundingClientRect().width-radio), radio);
        let cy= getRandomPosY((svg.getBoundingClientRect().height-radio), radio);
        let fill= '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
        let bola=new Bola(25, cx, cy, fill, svg);
        bolas.push(bola);
        bola.dibujar();
    }
}

function anima(){
    for(let j=0; j<=bolas.length-1; j++){
        bolas[j].animar(svg);
        for(let i=0; i<bolas.length; i++){
            
            if(bolas[j].haChocado(bolas[i], i) && j!=i){
                bolas[j].randomDeg();
                bolas[i].randomDeg();
            }
        }
            
    };
}



//Randoms para generación de la bola
function getRandomR() {
    return Math.floor(Math.random() * (50 - 10) + 10);//Radio max:120 - min:10
}
function getRandomPosX(svgw, radio) {
    return Math.floor(Math.random() * (svgw - radio) + radio);
}
function getRandomPosY(svgh, radio) {
    return Math.floor(Math.random() * (svgh - radio) + radio);
}