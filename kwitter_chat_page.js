var firebaseConfig = {
    apiKey: "AIzaSyC5vvcTP_z2aDbolRUeX-6D2VRpB9maSCM",
    authDomain: "social-m-media.firebaseapp.com",
    databaseURL: "https://social-m-media-default-rtdb.firebaseio.com",
    projectId: "social-m-media",
    storageBucket: "social-m-media.appspot.com",
    messagingSenderId: "891269247116",
    appId: "1:891269247116:web:651d03ec156c897f1d8ba9"
};
firebase.initializeApp(firebaseConfig);

var room_name=localStorage.getItem("room_name")
var user_name=localStorage.getItem("user_name")

function send(){
    message=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:message,
        likes:0
    })
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="kwitter_login.html";
}