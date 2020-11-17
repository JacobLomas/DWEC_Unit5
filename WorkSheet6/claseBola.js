export class Bola{
    bola;
    incX;
    incY;
    radio;
    constructor(svgw, svgh){
        this.radio=getRandomR();
        this.bola=document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.bola.setAttribute("r",this.radio);
        this.bola.setAttribute("cx", getRandomPosX((svgw-this.radio), this.radio));
        this.bola.setAttribute("cy", getRandomPosY((svgh-this.radio), this.radio));
        this.bola.setAttribute("fill",'#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6));
        this.bola.setAttribute("stroke", "black");
        this.bola.setAttribute("stroke-width", "4");
        this.incX=Math.floor(Math.random() * (7 - (-7))) + (-7);
        this.incY=Math.floor(Math.random() * (7 - (-7))) + (-7);
    };

    dibujar(svg) {
        svg.appendChild(this.bola);
    };

    animar(svg){

        let posx=parseInt(this.bola.getAttribute("cx"));
        let posy=parseInt(this.bola.getAttribute("cy"));
        if((posx + this.radio)>=svg.getBoundingClientRect().width || (posx - this.radio)<=0)
            this.incX*=-1;
        if((posy + this.radio)>=svg.getBoundingClientRect().height || (posy - this.radio)<=0)
            this.incY*=-1;
        posx+=this.incX;
        posy+=this.incY;
        this.bola.setAttribute("cx", posx);
        this.bola.setAttribute("cy", posy);
        /*
        1.- Para cada bola hay que utilizar una lista con la distancia que hay desde 
            esa bola hasta cualquiera de las demás bolas.

        2.- Actualizar esa lista cada vez que alguna bola se mueve.

        3.- Comprobar si alguna distancia de la lista < (bola1.radio+bola2.radio)
            si es así se produce una colisión.
        
        4.- Cuando colisione, la direccion de la bola cambia (cx, cy).

        5.- La dirección ha de cambiar hasta que deje de colisionar, es decir hasta que
            distancia > (bola1.radio+bola2.radio).

        */
    }
}


function getRandomR() {
    return Math.floor(Math.random() * (120 - 10) + 10);//Radio max:120 - min:10
}
function getRandomPosX(svgw, radio) {
    return Math.floor(Math.random() * (svgw - radio) + radio);
}
function getRandomPosY(svgh, radio) {
    return Math.floor(Math.random() * (svgh - radio) + radio);
}