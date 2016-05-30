// compare the first item with the second.
// if the first item is bigger than the second item.
// you swap them so that the bigger one stays in the second position.
// then compare second with third item. if second item is bigger than the third, we swap them.
// otherwise, they stayed in their position.
// Hence, the biggest among first three is in the third position.


function bubbleSort(array) {
   var length = array.length;
   for (var i = length-1; i>=0; i--) {
     for (var j = 1; j<=i; j++) {
       if(array[j-1]>array[j]) {
           var temp = array[j-1];
           array[j-1] = array[j];
           array[j] = temp;
        }
     }
   }
   return array;
}
// console.log(bubbleSort([7,5,2,4,3,9])); //[2, 3, 4, 5, 7, 9]
// console.log(bubbleSort([9,7,5,4,3,1])); //[1, 3, 4, 5, 7, 9]
// console.log(bubbleSort([1,2,3,4,5,6])); //[1, 2, 3, 4, 5, 6]
