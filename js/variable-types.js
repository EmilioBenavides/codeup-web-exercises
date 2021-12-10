var a = 1;
var b = a++;
var c = ++a;
console.log(a)
console.log(b)
console.log(c)

var d = "hello";
var e = false;

d++;
e++;
console.log(d)
console.log(e)
console.log(d++)
console.log(e++)

var perplexed;
perplexed + 2;
console.log(perplexed + 2)

var price = 2.7;
price.toFixed(2);
console.log(price)
//console.log(price.tofixed(2)) //throws an error

console.log(isNaN(0));
console.log(isNaN(1));
console.log(isNaN(""));
console.log(isNaN("string"));
console.log(isNaN("0"));
console.log(isNaN("1"));
console.log(isNaN("3.145"));
console.log(isNaN(Number.Max_VALUE));
console.log(isNaN(Infinity));
console.log(isNaN("true"));
console.log(isNaN(true));
console.log(isNaN("false"));
console.log(isNaN("false"));
console.log(!true);
console.log(!false);
console.log(!!true);
console.log(!!false);
console.log(!!0);
console.log(!!-0);
console.log(!!1);
console.log(!!-1);
console.log(!!0.1);
console.log(!!"hello");
console.log(!!"");
console.log(!!'');
console.log(!!"false");
console.log(!!"0");


var sample = "Hello Codeup";
console.log(sample.length);
console.log(sample.toUpperCase());
console.log(sample = sample + " Students");
console.log(sample);
console.log(sample = sample.replace("Students", "Class"));
console.log(sample.indexOf('c'));
console.log(sample.indexOf('C'));
























