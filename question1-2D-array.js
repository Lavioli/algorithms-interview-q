// Write an algorithm which searches through a 2D array, and whenever it finds a zero should set the entire row and column to zero.
var items = [
  [2, 2, 0, 6], //rowIndex = 0, columnIndex = 2
  [3, 4, 7, 8],
  [5, 0, 9, 1], //rowIndex = 2, columnIndex = 1
  [7, 4, 9, 2]
];

function twoDimArr(array, value){
	var newArr = array.slice(0);
	//if we have more than 1 locations of 0 in the 2D array, we must push the row and column index into an array
	var rowIndex = [0, 2];
	var columnArray = [2, 1];

	console.log('original array', array)

//identify the index to change column or row
// i represents the rows
// j represents the columns
	for (var i = 0; i < array.length; i++) {
		for(var j = 0; j < array[i].length; j++) {
			if(array[i].indexOf(0) === j) {
				rowIndex.push(i);
				columnArray.push(j);
			}
		}
	}
//change the row
		for (var i = 0; i < newArr.length; i++) {
			for (var j = 0; j < newArr[i].length; j++) {
				for(var row = 0; row < rowIndex.length; row++) {
					newArr[rowIndex[row]][j] = 0; 
				}
			}
		}	
//change the column
	for (var i = 0; i < newArr.length; i++) {
		for (var columnIndex = 0; columnIndex < columnArray.length; columnIndex++) {
			newArr[i][columnArray[columnIndex]] = 0; 
		}
	}

	return newArr;

}

twoDimArr(items, 0);

