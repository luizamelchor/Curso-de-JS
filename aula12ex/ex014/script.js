function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var fala = window.document.getElementById('fala')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.png'
        document.body.style.background = '#a9ad8a'
        fala.innerHTML = '<p>Bom dia!</p>'
    } else if (hora >= 12 && hora <= 18){
        img.src = 'fototarde.png'
        document.body.style.background = '#96604c'
        fala.innerHTML = '<p>Boa tarde!</p>'
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#1b3855'
        fala.innerHTML = '<p>Boa noite!</p>'
    }
}