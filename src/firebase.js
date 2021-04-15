import firebase from 'firebase';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBXmLvbRBKAQqVa0-Pu3AxhaRxunGGjMv0",
    authDomain: "clone-38eb1.firebaseapp.com",
    projectId: "clone-38eb1",
    storageBucket: "clone-38eb1.appspot.com",
    messagingSenderId: "870783398912",
    appId: "1:870783398912:web:2d99ca2922f0533ae8d4e5",
    measurementId: "G-M8Y751K649"
  });




  const db= firebase.firestore();
   const auth =firebase.auth();
   const provider =new firebase.auth.GoogleAuthProvider();



  export {db,auth,provider};