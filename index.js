const borrarTodo = document.getElementById('borrarTodo');
const flecha = document.getElementById('flecha');
const dividir = document.getElementById('dividir');
const siete = document.getElementById('siete');
const ocho = document.getElementById('ocho');
const nueve = document.getElementById('nueve');
const multiplicar = document.getElementById('multiplicar');
const cuatro = document.getElementById('cuatro');
const cinco = document.getElementById('cinco');
const seis = document.getElementById('seis');
const restar = document.getElementById('restar');
const uno = document.getElementById('uno');
const dos = document.getElementById('dos');
const tres = document.getElementById('tres');
const sumar = document.getElementById('sumar');
const cero = document.getElementById('cero');
const punto = document.getElementById('punto');
const igual = document.getElementById('igual');
let valorAnterior = document.getElementById('valorAnterior');
let valorActual = document.getElementById('valorActual');

const calculadora = () =>{

    
    punto.onclick = () =>{
        valorActual.textContent = valorActual.textContent + '.'; }
    cero.onclick = () =>{
        valorActual.textContent = valorActual.textContent + '0'; }
    uno.onclick = () =>{
        valorActual.textContent = valorActual.textContent + '1'; }
    dos.onclick = () =>{
        valorActual.textContent = valorActual.textContent + '2';}
    tres.onclick = () =>{
        valorActual.textContent = valorActual.textContent + '3'; }
    cuatro.onclick = () =>{
        valorActual.textContent = valorActual.textContent + '4';}
    cinco.onclick = () =>{
        valorActual.textContent = valorActual.textContent + '5'; }
    seis.onclick = () =>{
        valorActual.textContent = valorActual.textContent + '6';}
     siete.onclick = () =>{
        valorActual.textContent = valorActual.textContent + '7'; }
    ocho.onclick = () =>{
        valorActual.textContent = valorActual.textContent + '8'; }
    nueve.onclick = () =>{
        valorActual.textContent = valorActual.textContent + '9'; }

    let primerNumero;
    let segundoNumero;
    let operacion;

    sumar.onclick = () =>{
        primerNumero = valorActual.textContent;
        operacion = 'sumar';
        subeNumero();
    }
    restar.onclick = () =>{
        primerNumero = valorActual.textContent;
        operacion = 'restar';
        subeNumero();
    }
    multiplicar.onclick = () =>{
        primerNumero = valorActual.textContent;
        operacion = 'multiplicar';
        subeNumero();
    }
    dividir.onclick = () =>{
        primerNumero = valorActual.textContent;
        operacion = 'dividir';
        subeNumero();
    }
    const borrarTodoC =  borrarTodo.onclick = () =>{
        valorActual.textContent = "";
        valorAnterior.textContent = "";
         primerNumero = 0;
         segundoNumero = 0;
         operacion = "";
     }
 
    const borrarUno = flecha.onclick = () =>{
        valorActual.textContent = valorActual.textContent.slice(0,-1);
    }

    igual.onclick = () =>{
        primerNumero = valorAnterior.textContent;
        segundoNumero = valorActual.textContent;
        let calculo;
        if( operacion === "sumar"){
            calculo = parseFloat(primerNumero) + parseFloat(segundoNumero);
        }
        if( operacion === "restar"){
            calculo = parseFloat(primerNumero) - parseFloat(segundoNumero);
        }
        if( operacion === "multiplicar"){
            calculo = parseFloat(primerNumero) * parseFloat(segundoNumero);
        }
        if( operacion === "dividir"){
            calculo = parseFloat(primerNumero) / parseFloat(segundoNumero);
        }  
        borrarTodoC();
        valorAnterior.textContent = calculo;
    }
    
    const subeNumero = () =>{
    valorAnterior.textContent = primerNumero;
    segundoNumero = valorActual.textContent;
    valorActual.textContent = "";
    }

}

calculadora();



