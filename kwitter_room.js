
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAt63uYEauxC1z9o6WhA7NFR3fUrtDFxZM",
    authDomain: "kwitter-22db4.firebaseapp.com",
    databaseURL: "https://kwitter-22db4-default-rtdb.firebaseio.com",
    projectId: "kwitter-22db4",
    storageBucket: "kwitter-22db4.appspot.com",
    messagingSenderId: "275188046333",
    appId: "1:275188046333:web:1a2ce8f80f90875a60e194"
  };
  
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    
    //End code
    });});}
getData();
