
function change (event) {
     let like =document.getElementsByClassName("numberOflike").innerText;
     console.log(like);
     if(event.classList.contains("far")){
          event.classList.remove("far");
          event.classList.add("fas")
          event.style.color = "red" ;
     }
     else if(event.classList.contains("fas")){
          event.classList.remove("fas");
          event.classList.add("far")

     }

}
// document.getElementById("MyElement").classList.add('MyClass');
//
// document.getElementById("MyElement").classList.remove('MyClass');