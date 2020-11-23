export class Bola{
    bola;
    radio;
    cx;
    cy;
    fill;
    incX;
    incY;
    svg;
    distancias;
    speed;
    constructor(radio, cx, cy, fill, svg){
        this.radio=parseInt(radio);
        this.cx=parseInt(cx);
        this.cy=parseInt(cy);
        this.fill=fill;
        this.svg=svg;
        this.distancias=[];
        this.speed=2;
        this.incX = -this.speed + (Math.random() * this.speed*2);
        this.incY = -this.speed + (Math.random()* this.speed*2);
        
        this.bola=document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.bola.setAttribute("r", radio);
        this.bola.setAttribute("cx", cx);
        this.bola.setAttribute("cy", cy);
        this.bola.setAttribute("fill", fill);
        this.bola.setAttribute("stroke", "black");
        this.bola.setAttribute("stroke-width", "4");
        this.incX=Math.floor(Math.random() * (7 - (-7))) + (-7);
        this.incY=Math.floor(Math.random() * (7 - (-7))) + (-7);
    };

    dibujar() {
        this.svg.appendChild(this.bola);
    };

    animar(){
        if((this.cx + this.radio)>=this.svg.getBoundingClientRect().width || (this.cx - this.radio)<=0)
            this.incX*=-1;
        if((this.cy + this.radio)>=this.svg.getBoundingClientRect().height || (this.cy - this.radio)<=0)
            this.incY*=-1;
        this.cx+=this.incX;
        this.cy+=this.incY;
        this.bola.setAttribute("cx", this.cx);
        this.bola.setAttribute("cy", this.cy);
    }
    haChocado(bola, i){
        let dx = this.cx - bola.cx;
        let dy = this.cy - bola.cy;
        let distancia = Math.sqrt(dx * dx + dy * dy);
        distancia=distancia-this.radio-bola.radio;
        this.distancias[i]=distancia;
        if(distancia<=0)
            return true;
        else
            return false;
        
    }
    randomDeg(){
        var d= 0;
        while((d == 0) || (d == 90) || (d == 180) || (d == 360)) {
            d = Math.floor(Math.random() * 360);
          }
        
          var r = (d * 180)/Math.PI;
          this.incX = Math.sin(r) * this.speed;
          this.incY = Math.cos(r) * this.speed;
        
        }

    cambioDireccion(){
        this.incX*=-1;
        this.incY*=-1;
    }
}


