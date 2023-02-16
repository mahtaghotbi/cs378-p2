const subtotal = 0;
const itemMap = new Map();


    var addClicks = document.getElementsByClassName('inc-button');
    var subClicks = document.getElementsByClassName('dec-button');



    //increment
    for (var i = 0; i <  addClicks.length ; i++) {
        var button = addClicks[i];
        button.addEventListener('click',addFunc);
    }
    
    //decrement
    for (var i = 0; i < subClicks.length ; i++) {
        var button = subClicks[i];
        button.addEventListener('click',subFunc);
    }




function addFunc() {
var foodItem = event.target;
var itemAtHand =foodItem.parentElement.children[1];
var currPrice = parseInt(itemAtHand.innerText) + 1;
itemAtHand.innerText = currPrice;




}

function subFunc(){
var foodItem = event.target;
var itemAtHand =foodItem.parentElement.children[1];
var value = parseInt(itemAtHand.innerText) - 1;
if (value >= 0) {
    itemAtHand.innerText = value;
} else {
    itemAtHand.innerText = 0;
}


}




