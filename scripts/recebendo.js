function valorDigitado() {
    butao.addEventListener('click', () => {
        if(email.value.includes('@')){
        senhaFinal = senha.value
        emailFinal = email.value
        formulario.style.width = '80%'
        butao2.innerHTML = 'Fazer login'
        butao2.style.backgroundColor = '#02e702'
        }else{
            alert('Você digitou dados inválidos')
        }
    })
}
valorDigitado()

butao2.onclick = ()=>{
    window.open('http://127.0.0.1:5500/html/login.html')
}