const firebaseConfig = {
    apiKey: "AIzaSyC8z4biKJ7UE9eJYpmvA9obbTZ1vH6GkiY",
    authDomain: "colegio-95f06.firebaseapp.com",
    projectId: "colegio-95f06",
    storageBucket: "colegio-95f06.appspot.com",
    messagingSenderId: "720745435027",
    appId: "1:720745435027:web:33754fcc958fcfec916266",
    measurementId: "G-JCSZKKNR5Z"
};


firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
let auth = firebase.auth()

botaoEntrar.onclick = function login(){
    let userEmail = emailLogin.value
    let userSenha = senhaLogin.value

    auth.signInWithEmailAndPassword(userEmail, userSenha)
    .then(()=>{
        setTimeout(()=>{
            create375.classList.add('mudandoVerde')
            window.open('http://127.0.0.1:5500/html/principal.html')
        }, 1000)
    }).catch(() =>{
        setTimeout(()=>{
            create375.classList.add('mudandoVermelho')
            formulario.classList.add('sumindoErrorForm')
            botaoEntrar.style.display ='none'
            butaoLoginDnv.style.display = 'block'
        }, 100)
    })
}

butaoLoginDnv.onclick = function reset(){
    window.open('http://127.0.0.1:5500/html/login.html')
}
