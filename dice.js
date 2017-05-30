// Write a program that takes a single parameter from the command line, a number, and rolls that many six-sided dice. For example, the following is a sample output of the program.
// node dice-roller.js 3
// Rolled 3 dice: 2, 6, 5
// To generate a random number, you'll have to use the built-in Math.random.

// When you've finished, don't forgot to save your work as a gist and to submit it.

//1. get input from command line
var number = Number(process.argv[2]);

//2. create an array with input places


//3. for each place, math.random - for
function die (min, max){
			return Math.floor(Math.random() * (max - min)) + min;
		}

//per die
function rolldice (num){
	var arr = [];
	for (var i=0; i<num; i++){
		arr.push(die(1, 6));
	}
	console.log ("Rolled "+num+ " dice: "+arr);
}

rolldice(number);

// 4. output like concepts console.log
// var concepts = listToString(conceptList);

// function listToString (list){
//   var string = list.join(', ')
//   return string;
// }

