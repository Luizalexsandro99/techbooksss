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


butao.onclick = () => {
    auth.createUserWithEmailAndPassword(emailFinal, senhaFinal).then(user => {
        console.log(user)
    })
}