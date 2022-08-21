//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAJz60wvDvODTdeoDYtcUcrytzL8Couai0",
    authDomain: "kwitterapp-a1a8c.firebaseapp.com",
    databaseURL: "https://kwitterapp-a1a8c-default-rtdb.firebaseio.com",
    projectId: "kwitterapp-a1a8c",
    storageBucket: "kwitterapp-a1a8c.appspot.com",
    messagingSenderId: "602418386490",
    appId: "1:602418386490:web:8c42831a2f0a77adb28703"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 function addUser()
 {
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name" , user_name);

    window.location = "kwitter_room.html";
 }
