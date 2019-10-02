import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8eRsSA2_3Wx6qnVghl1e93LLmEAHNr7E",
    authDomain: "eventos-b813c.firebaseapp.com",
    databaseURL: "https://eventos-b813c.firebaseio.com",
    projectId: "eventos-b813c",
    storageBucket: "eventos-b813c.appspot.com",
    messagingSenderId: "965289191412",
    appId: "1:965289191412:web:b4dcd29343f224364fbba1"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);