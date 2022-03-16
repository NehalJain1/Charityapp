var firebaseConfig = {
    apiKey: "AIzaSyCbqOPLE_kVUQzi3dBIoCxv8kT-LFOMzjU",
    authDomain: "project-98-f0ec1.firebaseapp.com",
    databaseURL: "https://project-98-f0ec1-default-rtdb.firebaseio.com",
    projectId: "project-98-f0ec1",
    storageBucket: "project-98-f0ec1.appspot.com",
    messagingSenderId: "137578707064",
    appId: "1:137578707064:web:4126f419b00a06bd42558d",
    measurementId: "G-DHBVNDCR0H"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);




function Login() {
    Name_var = document.getElementById("Name_input").value ;
    City_name = document.getElementById("City_input").value ;
    Email_id = document.getElementById("Email_input").value ;
    Phone_no = document.getElementById("PhoneNo_input").value ;
    all = Name_var + City_name + Email_id + Phone_no ;
    localStorage.setItem("name",Name_var);
    localStorage.setItem("City",City_name);
    localStorage.setItem("Email",Email_id);
    localStorage.setItem("Phone_number",Phone_no);
    firebase.database().ref("/").child(all).update({"User_data":"storealldetails"});
    window.location = "Donate.html" ;
}