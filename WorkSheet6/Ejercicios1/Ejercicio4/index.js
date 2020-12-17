window.onload=main;
function main(){
    document.querySelector("button").addEventListener("click", function(){
        if(document.getElementById("nuevoHeroe").value!=""){
            li=document.createElement("li");
            li.innerText=document.getElementById("nuevoHeroe").value;
            document.getElementsByTagName("ul")[0].appendChild(li);
            document.getElementById("nuevoHeroe").value="";
        }
        else
            alert("Introduce el nombre de un heroe para añadir");
    });
    
}