var countNumberField = document.getElementById("countNumber");
var decreaseBtn = document.getElementById("decrease-btn");
var resetBtn = document.getElementById("reset-btn");
var increaseBtn = document.getElementById("increase-btn");

var currentValue = 0;



increaseBtn.addEventListener("click", increaseCount);
function increaseCount(){
    currentValue = currentValue + 1;
    countNumberField.innerHTML= currentValue;
    document.body.style.background = "green";
}

resetBtn.addEventListener("click", resetCount);
function resetCount(){
    currentValue = 0;
    countNumberField.innerHTML= currentValue;
    document.body.style.background = "white";

}

decreaseBtn.addEventListener("click",decreaseCount);
function decreaseCount(){
        currentValue = currentValue - 1 ;
        countNumberField.innerHTML= currentValue;
        document.body.style.background = "red";
        
}

