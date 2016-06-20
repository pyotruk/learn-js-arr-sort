
var sizes = [100, 500, 1000, 5000, 1e+4, 2.5e+4, 5e+4];

for(var i in sizes) {

	var size = sizes[i];
	var arr = generateArray(size);

	var t0 = new Date();

	var sortedArr = bubbleSort(arr);

	var diff = new Date() - t0;
	console.log('BubbleSort: size = ' + size + ', time = ' + diff + ' msec.');

	t0 = new Date();

	sortedArr = simpleSort(arr);

	diff = new Date() - t0;
	console.log('SimpleSort: size = ' + size + ', time = ' + diff + ' msec.');
}
