
let comidas = "";
let bebidas = "";
let sobremesas = "";
const url ='https://wa.me/5521988293388/?text='

let bebidaPrec = Number();
let comidaPrec = Number();
let sobremesaPrec= Number();

let nomeComida = "";
let nomeBebida = "";
let nomeSobremesa = "";
let TotaL =""; 



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

    
 
    const comidaselecionadoAntes = document.querySelector(".prato-principal .selecionado");
   
    if(comidaselecionadoAntes !== null){
        
        comidaselecionadoAntes.classList.remove("selecionado");

    }
    
    comida.classList.add("selecionado");

    if (comida === praTo){
        const prato = document.querySelector(".pratoEsc");
        prato.innerHTML= `${pratofinal.innerHTML}: R$ ${pratoprecfinal.innerHTML}`;
        comidaPrec = pratoprecfinal.innerHTML;
        nomeComida = pratofinal.innerHTML;
        
    }

    if ( comida == praTo2 ){
        const prato = document.querySelector(".pratoEsc");
        prato.innerHTML= `${pratofinal2.innerHTML}: R$ ${pratoprecfinal2.innerHTML}`;
        comidaPrec = document.querySelector (".pratoprecfinal2")
        comidaPrec = pratoprecfinal2.innerHTML;
        nomeComida = pratofinal2.innerHTML;
     
     
    }
    
    if (comida == praTo3 ){
        const prato = document.querySelector(".pratoEsc");
        prato.innerHTML= `${pratofinal3.innerHTML}: R$ ${pratoprecfinal3.innerHTML}`;
        comidaPrec = pratoprecfinal3.innerHTML;
        nomeComida = pratofinal3.innerHTML;
    
       
        
    }

  
       console.log(nomeComida);

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
        bebidaPrec = bebidaprecfinal.innerHTML;
        nomeBebida = bebidafinal.innerHTML;
     
    }


    if ( bebida == bebiDa2 ){

        const bebida = document.querySelector(".bebidaEsc");
        bebida.innerHTML= `${bebidafinal2.innerHTML}: R$ ${bebidaprecfinal2.innerHTML}`;
        bebidaPrec = bebidaprecfinal2.innerHTML;
        nomeBebida = bebidafinal2.innerHTML;
        
        
    }
        
    
    if ( bebida == bebiDa3){

        const bebida = document.querySelector(".bebidaEsc");
        bebida.innerHTML= `${bebidafinal3.innerHTML}: R$ ${bebidaprecfinal3.innerHTML}`;
        bebidaPrec = bebidaprecfinal3.innerHTML;
        nomeBebida = bebidafinal3.innerHTML;
        
    }
 
   
    console.log(nomeBebida);
  
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
        sobremesaPrec = sobremesaprecfinal.innerHTML;
        nomeSobremesa = sobremesafinal.innerHTML;
    }
    
    if (sobremesa == sobreMesa2 ){
        
        const sobremesa = document.querySelector(".sobremesaEsc");
        sobremesa.innerHTML= `${sobremesafinal2.innerHTML}: R$ ${sobremesaprecfinal2.innerHTML}`;
        sobremesaPrec = sobremesaprecfinal2.innerHTML;
        nomeSobremesa = sobremesafinal2.innerHTML;
    }
    
    if ( sobremesa == sobreMesa3 ){
        
        const sobremesa = document.querySelector(".sobremesaEsc");
        sobremesa.innerHTML= `${sobremesafinal3.innerHTML}: R$ ${sobremesaprecfinal3.innerHTML}`;
        sobremesaPrec = sobremesaprecfinal3.innerHTML;
        nomeSobremesa = sobremesafinal3.innerHTML;
    }

    console.log(nomeSobremesa);

  
}


function calcPedido(){

    let resultado = parseFloat(comidaPrec) + parseFloat(bebidaPrec) + parseFloat(sobremesaPrec);
    let totaL = resultado.toFixed(2)

    const Total = document.querySelector(".total");
    Total.innerHTML = `TOTAL: R$ ${totaL}`;

    TotaL = totaL; 
    
    

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
    
    if(comidas !== "") {
        if(bebidas !== "") {
            if(sobremesas !== ""){

                const fechPedido = document.querySelector (".fimPedido");
                fechPedido.classList.remove('escondido'); 

               
            }
        }
    }  
       
} 

function fimPedido(){
    const mensagem = `Olá, gostaria de fazer o pedido:
         - Prato: ${nomeComida}
         - Bebida: ${nomeBebida}
         - Sobremesa: ${nomeSobremesa}
           Total: ${TotaL} `
 
            window.open(url + encodeURIComponent(mensagem))
     
 }


function cancelarPedido(){
    
    const cancelPedido = document.querySelector (".fimPedido");
    cancelPedido.classList.add('escondido');

}




    




 








