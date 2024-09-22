
let comidas = "";
let bebidas = "";
let sobremesas = "";
let total = 0; 



let praTo = document.querySelector(".prato1");
let praTo2 = document.querySelector(".prato2");
let praTo3 = document.querySelector(".prato3");

let bebiDa = document.querySelector(".bebidas1");
let bebiDa2 = document.querySelector(".bebidas2");
let bebiDa3 = document.querySelector(".bebidas3");

let sobreMesa = document.querySelector(".sobremesa1");
let sobreMesa2 = document.querySelector(".sobremesa2");
let sobreMesa3 = document.querySelector(".sobremesa3");



//Prato-principal
const pratofinal = document.querySelector (".prato1 p");
const pratoprecfinal = document.querySelector (".prato1 .precPrato");

const pratofinal2 = document.querySelector (".prato2 p");
const pratoprecfinal2 = document.querySelector (".prato2 .precPrato");

const pratofinal3 = document.querySelector (".prato3 p");
const pratoprecfinal3 = document.querySelector (".prato3 .precPrato");

//Bebidas
const bebidafinal = document.querySelector (".bebidas1 p");
const bebidaprecfinal = document.querySelector (".bebidas1 .precBebida");

const bebidafinal2 = document.querySelector (".bebidas2 p");
const bebidaprecfinal2 = document.querySelector (".bebidas2 .precBebida");


const bebidafinal3 = document.querySelector (".bebidas3 p");
const bebidaprecfinal3 = document.querySelector (".bebidas3 .precBebida");


//sobremesa
const sobremesafinal = document.querySelector (".sobremesa p");
const sobremesaprecfinal = document.querySelector (".sobremesa .precSobremesa");

const sobremesafinal2 = document.querySelector (".sobremesa2 p");
const sobremesaprecfinal2 = document.querySelector (".sobremesa2 .precSobremesa");

const sobremesafinal3 = document.querySelector (".sobremesa3 p");
const sobremesaprecfinal3 = document.querySelector (".sobremesa3 .precSobremesa");






//Parte que é para selecionar a comida 




function selecionarPrato(comida){
   
    comidas = comida.innerHTML;

    const pratofinal = document.querySelector (".prato1 p");

    const pratoprecfinal = document.querySelector (".prato1 .precPrato");

    console.log(pratofinal.innerhtml)
 
    const comidaselecionadoAntes = document.querySelector(".prato-principal .selecionado");
   
    if(comidaselecionadoAntes !== null){
        
        comidaselecionadoAntes.classList.remove("selecionado");

    }
    
    comida.classList.add("selecionado");

    if (comida === praTo){
        const prato = document.querySelector(".pratoEsc");
        prato.innerHTML= `${pratofinal.innerHTML}: R$ ${pratoprecfinal.innerHTML}`;
    }

    if ( comida == praTo2 ){
        const prato = document.querySelector(".pratoEsc");
        prato.innerHTML= `${pratofinal2.innerHTML}: R$ ${pratoprecfinal2.innerHTML}`;
        
    }
    
    if (comida == praTo3 ){
        const prato = document.querySelector(".pratoEsc");
        prato.innerHTML= `${pratofinal3.innerHTML}: R$ ${pratoprecfinal3.innerHTML}`;
    }


       

}

    
function selecionarBebida(bebida){

    bebidas = bebida.innerHTML;

    
    
    const bebidaselecionarAntes = document.querySelector(".bebida .selecionado");

    if(bebidaselecionarAntes !== null){

        bebidaselecionarAntes.classList.remove("selecionado");

    }

    bebida.classList.add ("selecionado");


    if ( bebida == bebiDa ){

        const bebida1 = document.querySelector(".bebidaEsc");
        bebida1.innerHTML= `${bebidafinal.innerHTML}: R$ ${bebidaprecfinal.innerHTML}`;
    }


    if ( bebida == bebiDa2 ){

        const bebida = document.querySelector(".bebidaEsc");
        bebida.innerHTML= `${bebidafinal2.innerHTML}: R$ ${bebidaprecfinal2.innerHTML}`;
        
    }
        
    
    if ( bebida == bebiDa3){

        const bebida = document.querySelector(".bebidaEsc");
        bebida.innerHTML= `${bebidafinal3.innerHTML}: R$ ${bebidaprecfinal3.innerHTML}`;
    }
 

    
  
}


function selecionarSobremesa(sobremesa) {

    sobremesas = sobremesa.innerHTML;

    const sobremesaselecioneAntes = document.querySelector(".sobremesa .selecionado")

    if( sobremesaselecioneAntes !== null){
        
        sobremesaselecioneAntes.classList.remove("selecionado");
    }

    sobremesa.classList.add("selecionado")

    if ( sobremesa == sobreMesa ){

        const sobremesa = document.querySelector(".sobremesaEsc");
        sobremesa.innerHTML= `${sobremesafinal.innerHTML}: R$ ${sobremesaprecfinal.innerHTML}`;
    }
    
    if (sobremesa == sobreMesa2 ){
        
        const sobremesa = document.querySelector(".sobremesaEsc");
        sobremesa.innerHTML= `${sobremesafinal2.innerHTML}: R$ ${sobremesaprecfinal2.innerHTML}`;
    }
    
    if ( sobremesa == sobreMesa3 ){
        
        const sobremesa = document.querySelector(".sobremesaEsc");
        sobremesa.innerHTML= `${sobremesafinal3.innerHTML}: R$ ${sobremesaprecfinal3.innerHTML}`;
    }

  
}


function calcPedido(){



    const pratoprecfinal = document.querySelector (".prato1 .precPrato");
    const pratoprecfinal2 = document.querySelector (".prato2 .precPrato");
    const pratoprecfinal3 = document.querySelector (".prato3 .precPrato");
    const bebidaprecfinal = document.querySelector (".bebidas1 .precBebida");
    const bebidaprecfinal2 = document.querySelector (".bebidas2 .precBebida");
    const bebidaprecfinal3 = document.querySelector (".bebidas3 .precBebida");
    const sobremesaprecfinal = document.querySelector (".sobremesa .precSobremesa");
    const sobremesaprecfinal2 = document.querySelector (".sobremesa2 .precSobremesa");
    const sobremesaprecfinal3 = document.querySelector (".sobremesa3 .precSobremesa");
    
    
    
    if (comidas == praTo){

    }
}


function continuar(){
    if(comidas !== "") {
        if(bebidas !== "") {
            if(sobremesas !== ""){

                document.querySelector(".botaoFinal").classList.add("fechPedido");
                const texto = "Fechar Pedido";
                document.querySelector(".botaoFinal").innerHTML = texto;


                
                
             

            }
        }
    }
}


function fecharPedido(){  
    const fechPedido = document.querySelector (".fimPedido");
    fechPedido.classList.remove('escondido');      
} 


function cancelarPedido(){
    
    const cancelPedido = document.querySelector (".fimPedido");
    cancelPedido.classList.add('escondido');
}








