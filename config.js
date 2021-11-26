const firebaseConfig = {
    apiKey: "AIzaSyAt6UyWnqvZQGEKQC--LusRSFCOM2X0h3I",
    authDomain: "storyteller-7c98a.firebaseapp.com",
    databaseURL: "https://storyteller-7c98a-default-rtdb.firebaseio.com",
    projectId: "storyteller-7c98a",
    storageBucket: "storyteller-7c98a.appspot.com",
    messagingSenderId: "401961481180",
    appId: "1:401961481180:web:ed29100236d9099f9b1519",
    measurementId: "G-524JGRX93J"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  export default firebaseConfig