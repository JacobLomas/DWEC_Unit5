window.onload=main;
function main(){
    var div = document.querySelector("div");
    document.getElementById("otro").addEventListener("click", function(){
        if(document.querySelectorAll("input")[document.querySelectorAll("input").length-1].value=="")
            alert("Debes seleccionar un archivo para poder añadir otro")
        else{
            var label=document.createElement("label");
            label.innerText="Seleccionar Archivo";
            var input=document.createElement("input");
            input.setAttribute("type", "file");
            input.style="position: relative; left: 10px; border: solid black 1px;";
            div.appendChild(document.createElement("br"));div.appendChild(document.createElement("br"));
            div.appendChild(label);
            div.appendChild(input);
        }
    })
    

}