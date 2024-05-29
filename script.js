// დავალება 1

let array2 = [14, 150, "css", null, "javascript", 25];

let newArray2 = array2.map((item) =>
  typeof item === "number"
    ? item ** 2
    : typeof item === "string"
    ? item.toUpperCase()
    : item
);
console.log(newArray2);

// დავალება 2

let question = "საქართველოს დედაქალაქი?";
let repondre = "tbilisi";
repondre.toLowerCase() === question.prompt;
repondre === "tbilisi"
  ? console.log("პასუხი სწორია")
  : console.log("პასუხი არასწორია");

// დავალება 3

let array5 = [12, 25, 3, 6, 8, 14, 7, 23].map((item) => item / 3);
console.log(array5);

// დავალება 4

let array1 = ["hello1", 14, 24, "hello2"];
let arrNumbers = array1.filter((item) => Number(item));
console.log(arrNumbers);

// დავალება 5

let languages = ["html", "css", "javascript", "python", "php"];

let languages2 = languages.filter((item) => item.length > 3);
console.log(languages2);

// დავალება 6

let words = ["Madrid", "rome", "Milan", "berlin"].filter(
  (item) => item.includes("m") || item.includes("M")
);
console.log(words);
// დავალება 7

let link = "https://google.com";

function link2(string) {
  string.includes("https://")
    ? console.log("მოიცავს")
    : console.log("არ მოიცავს");
}
link2(link);

// დავალება 8

let array6 = [-1, -2, -3, 4].some((numbers) => numbers > 0);
console.log(array6);

// დავალება 9

let numbersStr = "12345";
let sum = numbersStr
  .split("")
  .map((item) => Number(item))
  .reduce((x, y) => x + y);

console.log(sum);

// დავალება 10

let numbers = [24, 56, 87, 99, 43, 11, 27, 12];

let egalNumbers = (sum) => sum.reduce((x, y) => x + y);
console.log(egalNumbers(numbers));

// დავალება 11

let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

let arr12 = arr1.concat(arr2);
let arrtout = arr12.concat(arr3);
console.log(arrtout);
