
let array = [15, 10, 2, 20, 24, 1, ];
console.log(array)
console.log("Max element", Math.max(...array));
console.log("Min element", Math.min(...array));


var result = array.reduce(function(sum, current) {
    return sum + current;
  }, 0);
  console.log(result)



  var arr = [1,2,3,4,5,6,7,8,9,10];
// /* вернет индекс минимального элемента из массива arr. */
function getMinIndex(array)
{
var min = 0;
for(var i=1; i<array.length; i++) if (array[i]<array[min]) min = i;
return min;
}

// /* вернет индекс максимального элемента из массива arr. */
function getMaxIndex(array)
{
var max = 0;
for(var i=1; i<array.length; i++) if (array[i]>array[max]) max = i;
return max;
}

/* переставляет местами элементы массива arr, с индексами a и b. */
function exchange(array, a, b)
{
var tmp = array[a];
array[a] = array[b];
array[b] = tmp;
}

//пошла прога

console.log("Массив до манипуляций:\n"+array);
min = getMinIndex(array);
max = getMaxIndex(array);
exchange(array,min,max);
console.log("Массив после манипуляций:\n"+array);




function some_function(arg1, arg2, callback) {
    var my_number = Math.ceil(Math.random() * (arg1 - arg2) + arg2);
    callback(my_number);
}
// вызываем функцию
some_function(5, 15, function (num) {
    // эта анонимная функция выполнится после вызова callback-функции
    console.log("callback called! " + num);
});