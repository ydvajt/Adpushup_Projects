var changedColorName = document.getElementById("changedColorName");
var btn = document.getElementById("btn");

btn.addEventListener("click", loadColor);
function loadColor(){
    var newColor = "#";
    for (var i=0; i<6; i++){
        var randomNumber = Math.floor(Math.random()*10);
        newColor += randomNumber;
    }
    changedColorName.innerHTML = newColor;
    document.body.style.background = newColor

}