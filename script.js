const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector("#mensaje2");

/*
    Las "llaves" de encriptación que utilizaremos son las siguientes:

`La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat"`
*/
function encriptar(stringEncriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptar = stringEncriptar.toLowerCase();
    
    for(let i=0; i<matrizCodigo.length; i++){
        if(stringEncriptar.includes(matrizCodigo[i][0])){
            stringEncriptar = stringEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncriptar;
}

function btnEncriptar(){
        const textoEncriptado = encriptar(inputTexto.value);
        mensaje.value = textoEncriptado;
        mensaje.style.backgroundImage = "none";
        inputTexto.value = "";
}
function desencriptar(stringDesencriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptar = stringDesencriptar.toLowerCase();
    
    for(let i=0; i<matrizCodigo.length; i++){
        if(stringDesencriptar.includes(matrizCodigo[i][1])){
            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringDesencriptar;
}

function btnDesncriptar(){
        const textoEncriptado = desencriptar(inputTexto.value);
        mensaje.value = textoEncriptado;
        mensaje.style.backgroundImage = "none";
        inputTexto.value = "";
}
function btnCopiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    alert("Texto copiado");
}