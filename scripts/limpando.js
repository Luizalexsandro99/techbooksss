function limpar(){
    butao.addEventListener('click', ()=>{
        if(email.value.includes('@')){
            setTimeout(()=>{
                senha.value = ''
                email.value = ''
            }, 3000)
        }else{
            console.log('error')
        }
    })
}

limpar()