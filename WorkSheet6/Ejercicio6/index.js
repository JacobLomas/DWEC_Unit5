window.onload=main;
function main(){
    document.getElementById("izq").addEventListener("click", function(){
        var img = document.querySelector("img");
        var id=parseInt(img.id);
        if(id<4 && id>0){
            img.src="imagenes/gato"+(id-1)+".jpg";
            img.id=id-1;
        }
        else{
            img.src="imagenes/gato3.jpg";
            img.id="3";
        }
            
    })
    document.getElementById("dcha").addEventListener("click", function(){
        var img = document.querySelector("img");
        var id=parseInt(img.id);
        if(id<3 && id>=0){
            img.src="imagenes/gato"+(id+1)+".jpg";
            img.id=id+1;
            }
        else{
            img.src="imagenes/gato0.jpg";
            img.id="0";
        }
            
    })
}