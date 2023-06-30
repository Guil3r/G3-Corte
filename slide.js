let quant = document.querySelectorAll('.slides .images')
let atual = 0
let imagem = document.getElementById('atual')
let next = document.getElementById('next')
let voltar = document.getElementById('voltar')
let rolar = true

voltar.addEventListener('click', ()=>{
    atual--
    rolar = false
    slide()
})

next.addEventListener('click',()=>{
    atual++
    rolar = false
    slide()
})

function slide() {
    if(atual >= quant.length){
        atual = 0
    } else if(atual < 0) {
        atual = quant.length-1
    }
    
    imagem.style.marginLeft = -100*atual+'px';
}
setInterval(()=>{
   if(rolar){
        atual++
        slide()
    } else{
        rolar = true
    }
},2000)