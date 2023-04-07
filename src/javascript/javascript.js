let $Result_number = document.querySelector("#result_number");

let $Reaction_contador = document.querySelector("#reaction_contador");
let $Memory_contador = document.querySelector("#memory_contador");
let $Verbal_contador = document.querySelector("#verbal_contador");
let $Visual_contador = document.querySelector("#visual_contador");

let $Footer_score = document.querySelector('#footer_score');

$Footer_score.style.display = 'none';
//contadores
//result
let contadorIndex = 0;
let contador = setInterval(()=>{
contadorIndex++;

    $Result_number.innerHTML = `${contadorIndex}`

    if(contadorIndex === 67){
        clearInterval(contador)
        $Footer_score.style.display = '';
    }
},20);

let ReactionIndex = 0;
let contador_Reaction = setInterval(()=>{
ReactionIndex++;

    $Reaction_contador.innerHTML = `${ReactionIndex}`

    if(ReactionIndex === 80){
        clearInterval(contador_Reaction)
    }
},20);

let memoryIndex = 0;
let contador_Memory = setInterval(()=>{
memoryIndex++;

    $Memory_contador.innerHTML = `${memoryIndex}`

    if(memoryIndex === 92){
        clearInterval(contador_Memory)
    }
},20);

let verbalIndex = 0;
let contador_Verbal = setInterval(()=>{
verbalIndex++;

    $Verbal_contador.innerHTML = `${verbalIndex}`

    if(verbalIndex === 61){
        clearInterval(contador_Verbal)
    }
},20);

let visualIndex = 0;
let contador_Visual = setInterval(()=>{
visualIndex++;

    $Visual_contador.innerHTML = `${visualIndex}`

    if(visualIndex === 72){
        clearInterval(contador_Visual)
    }
},20);
