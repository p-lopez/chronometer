"use strict"


// Variables____________
let misMilisegundos = 0;
let misSegundos = 0;
let misMinutos = 0;
let misHoras = 0;
let timer;
let miLista = document.createElement("ul");

//DOM Selectors_______________
let nodoBtnInicio = document.querySelector("#inicio");
let nodoBtnFin = document.querySelector("#fin");
let nodoBtnGuardar = document.querySelector("#guardar");
let nodoBtnBorrar = document.querySelector("#borrar");
let nodoGuardado = document.querySelector(".guardado");
let nodoMilisec = document.querySelector(".milisegundos .numeros");
let nodoSec = document.querySelector(".segundos .numeros");
let nodoMin = document.querySelector(".minutos .numeros");
let nodoHoras = document.querySelector(".horas .numeros");

// Start function____________
function start(){
    nodoBtnInicio.disabled = true;
    clearInterval(timer);
    timer = setInterval(function(){
        misMilisegundos ++;
        if(misMilisegundos == 99){ 
            misMilisegundos = 0;
            misSegundos = misSegundos +1;
            if(misMilisegundos <10){
                nodoMilisec.innerHTML = "<h3>0"+misMilisegundos+"</h3>";
            }else{
                nodoMilisec.innerHTML = "<h3>"+misMilisegundos+"</h3>";
            };
            if(misSegundos == 59){   
                misSegundos = 0;
                misMinutos = misMinutos+1;
                console.clear();
                if(misMinutos ==60){
                    misMinutos = 0;    
                    misHoras = misHoras +1;
                    console.clear();
                };
            };
        };
         
        if(misMilisegundos < 10){
            nodoMilisec.innerHTML = "<h3>0"+misMilisegundos+"</h3>";         
        }else{
            nodoMilisec.innerHTML = "<h3>"+misMilisegundos+"</h3>";     
        };
        if(misSegundos < 10){     
            nodoSec.innerHTML = "<h3>0"+misSegundos+"</h3>"; 
        }else{       
            nodoSec.innerHTML = "<h3>"+misSegundos+"</h3>";        
        };
        if(misMinutos < 10){       
            nodoMin.innerHTML = "<h3>0"+misMinutos+"</h3>";        
        }else{       
            nodoMin.innerHTML = "<h3>"+misMinutos+"</h3>";
        };
        if(misHoras < 10){       
            nodoHoras.innerHTML = "<h3>0"+misHoras+"</h3>";        
        }else{               
            nodoHoras.innerHTML = "<h3>"+misHoras+"</h3>";
        };
    
    }, 10 );

};

// Button functions__________

//Empezar - Start button
 nodoBtnInicio.addEventListener("click", function(){
    nodoBtnFin.disabled= false;
    nodoBtnInicio.disabled= true;
    nodoBtnGuardar.disabled= false;
    nodoBtnBorrar.disabled= true;
    misMilisegundos = 0;
    misSegundos = 0;
    misMinutos = 0;
    misHoras = 0;
    start();
});

//Parar - Stop button
nodoBtnFin.addEventListener("click", function(){
    nodoBtnInicio.disabled= false;
    nodoBtnFin.disabled= true;
    nodoBtnGuardar.disabled= false;
    nodoBtnBorrar.disabled= false;
    clearInterval(timer);
});

//Guardar - Save button
nodoBtnGuardar.addEventListener("click", function(){
    let strHTML;
    let miItem = document.createElement("li");
    let miP = document.createElement("p");
    if(misHoras < 10){
        strHTML = "0"+misHoras;
        miP.innerHTML = strHTML;    
    }else{
        strHTML = misHoras+" : ";
        miP.innerHTML = strHTML; 
    };
    if(misMinutos < 10){     
        strHTML = strHTML + " : 0" + misMinutos;
        miP.innerHTML = strHTML;    
    }else{       
        strHTML = strHTML + " : "+misMinutos;
        miP.innerHTML = strHTML; 
    };
    if(misSegundos < 10){       
        strHTML = strHTML + " : 0" + misSegundos;
        miP.innerHTML = strHTML;        
    }else{       
        strHTML = strHTML + " : "+misSegundos;
        miP.innerHTML = strHTML;
    };
    if(misMilisegundos < 10){       
        strHTML = strHTML + " : 0" + misMilisegundos;
        miP.innerHTML = strHTML;     
    }else{               
        strHTML = strHTML +" : "+misMilisegundos;
        miP.innerHTML = strHTML;
    };
    
    let nodoSpan = document.createElement("span");
    nodoSpan.innerHTML = "X";
    nodoSpan.classList.add("cierre");

    nodoSpan.addEventListener("click", function(){
        miItem.style.display = "none";
    });

    miItem.append(miP);
    miItem.append(nodoSpan);
    miLista.append(miItem);
    nodoGuardado.append(miLista);

});

//Borrar - Reset all button
nodoBtnBorrar.addEventListener("click", function(){
    nodoBtnInicio.disabled= false;
    nodoBtnFin.disabled= true;
    nodoBtnGuardar.disabled= true;
    nodoBtnBorrar.disabled= true;
    nodoHoras.innerHTML = "<h3>00</h3>";
    nodoMin.innerHTML = "<h3>00</h3>";
    nodoSec.innerHTML = "<h3>00</h3>";
    nodoMilisec.innerHTML = "<h3>00</h3>";
    miLista.innerHTML ="";
});















