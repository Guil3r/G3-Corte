function rendimento(){
    let qtecido = document.getElementById('qtecido')
    let cmatriz = document.getElementById('cmatriz')
    let quantidade = document.getElementById('qtn')

    if ( qtecido.value == 0 || cmatriz.value == 0 || quantidade.value == 0) {
        window.alert('[ERRO] Faltam dados !')
    } else {
        let metros = Number(qtecido.value)
        let comp = Number(cmatriz.value)
        let qt = Number(quantidade.value)

        let divisao = ( metros / (comp * 2 )) -1
        let res = Math.trunc(divisao)* qt

        resultado.innerHTML = '<font size="5"> Total:  ' + Math.trunc(`${res}`) + ' peças aproximadamente </font>'
        
    }
}
