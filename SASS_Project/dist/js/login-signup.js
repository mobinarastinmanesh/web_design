var overl = document.getElementById("overlay");
function log_sign(){
    document.getElementById("overlay").style.display = "block";
    document.getElementById("header-home").style.display = "none";
}
function closeModal(){
    document.getElementById("overlay").style.display = "none";
    document.getElementById("header-home").style.display = "block";
}
//fas fa-eye-slash