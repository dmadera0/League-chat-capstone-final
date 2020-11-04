// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React from 'react';
import Providers from './src/navigation';
import firebase from 'firebase/app';
// import '@firebase/auth';
// import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDWs6eZsE_cu9djpJurQvA1ouxIsx5CJIg",
    authDomain: "capstone-leaguechat-app.firebaseapp.com",
    databaseURL: "https://capstone-leaguechat-app.firebaseio.com",
    projectId: "capstone-leaguechat-app",
    storageBucket: "capstone-leaguechat-app.appspot.com",
    messagingSenderId: "177537118971",
    appId: "1:177537118971:web:8ff06c95e74151ffd8365e"
  };

  firebase.initializeApp(firebaseConfig)

export default function App() {
  return <Providers />;
}