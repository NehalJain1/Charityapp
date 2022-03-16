function next_page() {
  address = document.getElementById("address").value ;
  time = document.getElementById("time").value ;
  localStorage.setItem("PickUpAdress",address);
  localStorage.setItem("PickUpTime",time);
  window.location = "Thanks.html";
}