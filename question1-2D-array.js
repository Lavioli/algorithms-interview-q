// Write an algorithm which searches through a 2D array, and whenever it finds a zero should set the entire row and column to zero.
/*
2D array: [[0,1],[2,0]]
*/
//write a for loop to run through the rows
//write a for loop to run through the columns
//search through the arrays for 0. if array[i][j] = 0, turn array[i][j + 1 || j - 1] to 0 IF the index exists
//turn array[i + 1][j] || [i + 2...][j] to 0 until i < array.length 
var items = [
  [0, 2],
  [3, 4],
  [5, 0]
];

function twoDimArr(array, value){
	for (var i = 0; i < array.length; i++){
		console.log("i before:", array[i]);
		for(var j = 0; j < array[i].length; j++){
			console.log("j before:", array[i][j]);
			if(array[i][j] === 0 && array[i][j + 1]){
				array[i][j + 1] = 0;
					console.log("j after:", array[i][j + 1]);
			} else if (array[i][j] === 0 && array[i][j - 1]){
				array[i][j - 1] = 0;
			}
			console.log("i after:", array[i]);
		}
	}
}


twoDimArr(items, 0);