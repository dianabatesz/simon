console.log("loaded");
$(document).ready(function(){

	const $button = $('<button class="button">Computer Turn</button><br>');
	$button.click(function() {
		computerTurn(computerArray);
	})
	$('body').append($button);

	const $button2 = $('<button class="button">Player Turn</button><br>');
    $button2.click(function(){
        playerTurn();
    })
    $('body').append($button2);

  	const $button3 = $('<button class="button">Reset</button>');
    $button3.click(function(){
        reset();
    })
    $('body').append($button3);

let counter=0; 
let computerArray = ["firstId", "secondId", "thirdId", "fourthId"];

const shuffle = function(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

const computerTurn = function(arr) {
	$('#firstId').hide();
	$('#secondId').hide();
	$('#thirdId').hide();
	$('#fourthId').hide();
	shuffle(arr); 
	console.log(arr);

	arr.forEach(function(thing, el) {
    console.log(el);
    const newThing = $('#'+thing);
    if ($('#'+thing).is(':hidden')) {
        setTimeout(function () {
           // newThing.fadeIn(300).fadeOut(300);
             newThing.fadeIn(300).fadeOut(300);
        }, 1000 * el);
        }
        });
}

const playerTurn = function(){
	const arr=[]; 
	console.log('player');
            $('.box').show();
            $('.box').click(function(e){
            e.preventDefault();
            const thing = ($(this).attr('id'));
            arr.push(thing);
            // console.log(arr);
            checkWin(arr);
        })    
}
const checkWin = function(arr){
    console.log(arr);
        const a = arr.toString();
        const b = computerArray.toString();
        console.log(a);
        console.log(b);
        if(a===b){
            alert('winner');
            addArray()
        } 
    }

const addArray = function(){
    const newThing = computerArray[Math.floor(Math.random()* computerArray.length + 0)];
        console.log(newThing);
        computerArray.push(newThing);
}
const reset = function(){
	computerArray = ["firstId", "secondId", "thirdId", "fourthId"];
}

});