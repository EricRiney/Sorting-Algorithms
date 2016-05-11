function insertionSort(array){
  var i, len = array.length, el, j;
  for(i = 1; i<len; i++){
    el = array[i];
    j = i;
    while(j>0 && array[j-1]>el){
      array[j] = array[j-1];
      j--;
   }
   array[j] = el;
  }
  return array;
}

console.log(insertionSort([7,5,2,4,3,9])); //[2, 3, 4, 5, 7, 9]
console.log(insertionSort([9,7,5,4,3,1])); //[1, 3, 4, 5, 7, 9]
console.log(insertionSort([1,2,3,4,5,6])); //[1, 2, 3, 4, 5, 6]