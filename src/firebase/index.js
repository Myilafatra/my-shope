import firebase from 'firebase/app'
import 'firebase/storage';

var config = {
    apiKey: "AIzaSyBZ2jVciPSisU05KHjILQYv0QbDvXP0rUY",
    authDomain: "react-drawer-e2b0c.firebaseapp.com",
    databaseURL: "https://react-drawer-e2b0c.firebaseio.com",
    projectId: "react-drawer-e2b0c",
    storageBucket: "react-drawer-e2b0c.appspot.com",
    messagingSenderId: "790840390503"
  };
  firebase.initializeApp(config);

  const storage = firebase.storage();

  export {
      storage, firebase as default
  }