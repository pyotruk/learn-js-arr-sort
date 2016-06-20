
var generateArray = function (size){
	var testArr = [];
	for (var i = 0; i < size; i++){
		testArr.push(Math.round(Math.random() * 100));
	};
	return testArr;
};

var findMin = function(arr){
	var min = Number.MAX_SAFE_INTEGER;
	for(var i = 0; i < arr.length; i++){
		if(arr[i] < min){
			min = arr[i];
		};
	}; 
	return min;
};

var removeItem = function(arr, itemToRemove){
	var index = arr.indexOf(itemToRemove);
	if (index > -1){
		arr.splice(index,1);
	};
};

var simpleSort = function(arr){
	var sortedArr = [];

	while(arr.length > 0){
		var min = findMin(arr);
		sortedArr.push(min);
		removeItem(arr, min);
 	};
 	return sortedArr;
};

var bubbleSort = function (arr){
	for (var i = 0; i < arr.length; i++){

		for (var j = 0; j < arr.length; j++){

			if (arr[i] > arr[j]){
				var buff = arr[i];
				arr[i] = arr[j];
				arr[j] = buff;
			}
		};
	};
	return arr;
};
