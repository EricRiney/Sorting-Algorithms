// for me to solve laters

var animals = ["cat","dog","fish"];
var lengths = [];
var item;
var count;
var loops = animals.length;
for (count = 0; count < loops; count++){
  item = animals[count];
  lengths.push(item.length);
}
console.log(lengths); //[3, 3, 4]

var animals = ["cat","dog","fish"];
var lengths = animals.map(function(animal) {
  return animal.length;
});
console.log(lengths); //[3, 3, 4]
