// Go through the array, find the index of the lowest element
// swap the lowest element with the first element.
// Hence first element is the lowest element in the array.
// Now go through the rest of the array (excluding the first element)
// and find the index of the lowest and swap it with the second element.

function selectionSort(array) {
  var minIdx, temp,
      len = array.length;
  for(var i = 0; i < len; i++) {
    minIdx = i;
    for(var  j = i+1; j<len; j++) {
       if(array[j]<array[minIdx]) {
          minIdx = j;
       }
    }
    temp = array[i];
    array[i] = array[minIdx];
    array[minIdx] = temp;
  }
  return array;
}

// console.log(selectionSort([7,5,2,4,3,9])); //[2, 3, 4, 5, 7, 9]
// console.log(selectionSort([9,7,5,4,3,1])); //[1, 3, 4, 5, 7, 9]
// console.log(selectionSort([1,2,3,4,5,6])); //[1, 2, 3, 4, 5, 6]
