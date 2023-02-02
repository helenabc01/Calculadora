const resultado = document.querySelector('.result');
const confirmar = document.querySelector('.igual')


function insert(valor){
    resultado.innerHTML += valor
}

function clean(){
    resultado.innerHTML = " "
}

function deletar(){
    if(resultado.textContent){
        let result = document.getElementById("resultado").innerHTML
        resultado.innerHTML = result.substring(0, result.length -1)
    } else {
        alert("sem numeros inseridos")
    }

}
function confirma(){
    if(resultado.textContent != 'Erro'){
        document.getElementById('resultado').innerHTML = eval(resultado.innerHTML)
    }

}