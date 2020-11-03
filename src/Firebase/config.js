import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDWs6eZsE_cu9djpJurQvA1ouxIsx5CJIg",
    authDomain: "capstone-leaguechat-app.firebaseapp.com",
    databaseURL: "https://capstone-leaguechat-app.firebaseio.com",
    projectId: "capstone-leaguechat-app",
    storageBucket: "capstone-leaguechat-app.appspot.com",
    messagingSenderId: "177537118971",
    appId: "1:177537118971:web:8ff06c95e74151ffd8365e"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebaseConfig
