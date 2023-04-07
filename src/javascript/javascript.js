let $Result_number = document.querySelector("#result_number");

let $Reaction_contador = document.querySelector("#reaction_contador")
let $Memory_contador = document.querySelector("#memory_contador")
let $Verbal_contador = document.querySelector("#Verbal_contador")
let $Visual_contador = document.querySelector("#visual_contador")

//contadores
//result
let contadorIndex = 0;
let contador = setInterval(()=>{
contadorIndex++;

    $Result_number.innerHTML = `${contadorIndex}`

    if(contadorIndex === 67){
        clearInterval(contador)
    }
},20);



