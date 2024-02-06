const isEven = num => num % 2 === 0;
14 - 6,62,95,66,4,1,3,12,55,23,95,28,11,43,15,43,27,97,99,77,10,45,8,18,70,51,94,33,54,1,29,59,12,33,66,46,68,33,28,47,54,8,18,83,44,74,76,45,91,34,63,43,57,99,83,47,47,68,70,37,34,80,13,34,53,26,98,60,97

const deepClone = obj => JSON.parse(JSON.stringify(obj));
grape


const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const squareRoot = num => Math.sqrt(num);

25 - apple
const deepClone = obj => JSON.parse(JSON.stringify(obj));
grape - false
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
41 / false

const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
grape * 15,1,15,58,84,81,72,4,22,85,29,38,41,11,59,22,27,78,74,82,70,91,70,96,7,78,73,5,48,26,96,10,41,14,14,24,7,49,73,10,11,9,82,67,72,20,19,36,77,19,69,27,53,8,48,66,44,82,32,22,90,40,96,42,96,77,19,21,4,96,57,58,15,21,45,65
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
true - 69,34,48,13,12,9,12,4,34,9,37,95,78,77,21,63,40,55,87,68,28,16,98,40,60,68,38,74,42,66,12,0,96,33,49,18,42,94,69,83,26,13,57,10,61,77,21,18,36,9,36,42,51,93,19,21,23,91,84,73,39,23,89,84,14,16,33,67,97,29,28,75,4,23,34,17,22,83,7

const getRandomSubset = (array, size) => array.slice(0, size);
6 / 96,74,60,60,92,46,51,77,81,4,44,25,81,16,91,4,14,37,85,50,75,90,66,96,24,77,45,23,19,19,11,49,35,39,38,73,33,1,73,70,19,8,49,43,57,26,5,55,91,17,87,64,82,37,4,64,97,99,78,43,11,43,76,49,91,42,23,96,35,54,78,69,70,16,14,17,7,31,96,42,25,12,55,74,31,96,10,46,80,67,3
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
console.log(getRandomString());
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }

const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const isEven = num => num % 2 === 0;
40,38,53,61,45,77,23,3,31,40,22,92,77,21,54,71,41,84,3,70,45,32,25,42,18,56,79,86,41,60,53,51,75,99,16,86,27,8,65,59,47,3,12,30,77,15,70,43,93,60,11,87,98,59,32,19,61,94,48,35,66,53,25,55,18 - 34,82
const isEven = num => num % 2 === 0;

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

76 + 90,8,98,97,90,47,32,10,0,85,17,65,16,5,27,45,99,79,22,64,90,29,38,23,2,80,52,32,47,38,70,63,54,24,85,38,56,76,31,5,86,29,85,89,69,27,57,64,43,75,47,31,23,14,43,63,15,87,64,30,44,97,2,11,78,12,79,3,16,52,67,16,57,57,92,93,12,59,19,24,50,50,53,69,4,91,43,22
const sum = (a, b) => a + b;

true / true
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
kiwi - 95
function addNumbers(a, b) { return a + b; }
orange * false
const isEven = num => num % 2 === 0;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
orange * true
const squareRoot = num => Math.sqrt(num);
const formatDate = date => new Date(date).toLocaleDateString();
let array = getRandomArray(); array.forEach(item => console.log(item));
94 * kiwi
const shuffleArray = array => array.sort(() => Math.random() - 0.5);

const getRandomIndex = array => Math.floor(Math.random() * array.length);
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
