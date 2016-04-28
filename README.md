
# Readme

 [![NPM](https://nodei.co/npm/nonstandard.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/nonstandard/)

 [![Build Status](https://travis-ci.org/LestaD/nonstandard.js.svg?branch=master)](https://travis-ci.org/LestaD/nonstandard.js)
 ![Dependencies](https://david-dm.org/lestad/nonstandard.js.svg)
 [![npm version](https://badge.fury.io/js/nonstandard.svg?new)](https://npmjs.com/nonstandard)
 [![Code Climate](https://codeclimate.com/github/LestaD/nonstandard.js/badges/gpa.svg)](https://codeclimate.com/github/LestaD/nonstandard.js)
 [![Test Coverage](https://codeclimate.com/github/LestaD/nonstandard.js/badges/coverage.svg)](https://codeclimate.com/github/LestaD/nonstandard.js/coverage)
 [![bitHound Overalll Score](https://www.bithound.io/github/LestaD/nonstandard.js/badges/score.svg)](https://www.bithound.io/github/LestaD/nonstandard.js)

Some non standard JavaScript features.

> from Node.js > 0.12.0

### Usage

```js
require('nonstandard'); // Install all features

// install specified function
require('nonstandard/src/array/contains').Install();
[1, 2, 3].contains(2); // true

// Install some module
require('nonstandard/src/array').Install();
require('nonstandard/src/console').Install();
require('nonstandard/src/number').Install();
require('nonstandard/src/object').Install();
require('nonstandard/src/string').Install();
```


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Contents**

- [console.pipe](#consolepipe)
- [console.[log, info, warn, error].pipe](#consolelog-info-warn-errorpipe)
- [Array.empty](#arrayempty)
- [Array.present](#arraypresent)
- [Array.prototype.first](#arrayprototypefirst)
- [Array.prototype.second](#arrayprototypesecond)
- [Array.prototype.last](#arrayprototypelast)
- [Array.prototype.clean](#arrayprototypeclean)
- [Array.prototype.contains](#arrayprototypecontains)
- [Array.prototype.clone](#arrayprototypeclone)
- [Object.clone](#objectclone)
- [Object.empty](#objectempty)
- [Object.present](#objectpresent)
- [Number.range](#numberrange)
- [Number.prototype.times](#numberprototypetimes)
- [String.random](#stringrandom)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## console.pipe

Log value to console and pass value
First value was passed next.

```ts
console.pipe(returnValue: any, logValue1: any, logValue2: any, logValueN: any) : any;
```

Install:

```js
require('nonstandard/src/console').Install();
```

```js
// write `123` to console with `console.log`
var a = console.pipe(123);

// write:
// hello world
// hello
//
console.log(console.pipe('hello', 'world'));
```



## console.[log, info, warn, error].pipe

```ts
console.log.pipe(value: any, ...values: any[]) : any;
console.info.pipe(value: any, ...values: any[]) : any;
console.warn.pipe(value: any, ...values: any[]) : any;
console.error.pipe(value: any, ...values: any[]) : any;
```

Install:

```js
require('nonstandard/src/console').Install();
```

```js
executeFunction(console.log.pipe({ some: 'data' }, "that string has been logged only")); // value was shown in console, and passed to function `executeFunction`

function actionLogin(user) {
  return login(user.credentials)
  .then(function(resp) {
    return console.info.pipe(resp.data);
  })
  .catch(function(error) {
    throw console.error.pipe(error); // in promise throwns was catched by next then/catch pair
  });
}
```

## Array.empty

Check if array has not elements

```ts
Array.empty(target: array) : boolean;
```

Install:

```js
require('nonstandard/src/array/empty').Install();
```

```js
Array.empty([]) // true
Array.empty([1, 2, 3]) // false
```


## Array.present

Check if array has some elements

```ts
Array.present(target: array) : boolean;
```

Install:

```js
require('nonstandard/src/array/present').Install();
```

```js
Array.present([]) // false
Array.present([1, 2, 3]) // true
```


## Array.prototype.first

First element in array

```ts
[].first
```

Install:

```js
require('nonstandard/src/array/properties').Install();
```

```js
var arr = [5, 9, 14];

arr.first // 5

arr.first = 2;

arr // [2, 9, 14]
```

## Array.prototype.second

Second element in array

```ts
[].second
```

Install:

```js
require('nonstandard/src/array/properties').Install();
```

```js
var arr = [1, 8, 10];

arr.second // 8

[].second // undefined

[].second = 2 // equals:  [][1] = 2
```

## Array.prototype.last

Latest element in array


```ts
[].last
```

Install:

```js
require('nonstandard/src/array/properties').Install();
```

```js
var arr = [12, 34, 56, 78, 90];

arr.last // 90

arr.last == arr[arr.length - 1] // true

[].last = 1; // nothing changed
```

## Array.prototype.clean

Clear array


```ts
[].clean()
```

Install:

```js
require('nonstandard/src/array/clean').Install();
```

```js
var arr = [1, 2, 3, 45, 67];

arr.clean();

arr // now `[]`
```

If as argument function passed, `.clean` call it on every value and clean if callback return not false, 0, null or undefined

```js
var arr = [1, 2, 3, 4, 5, 6];
arr.clean(function(e){
  return e % 2;
});
arr; // [2, 4, 6]
```

## Array.prototype.contains

Check elements exists in array


```ts
[].contains(any[]) : boolean
```

Install:

```js
require('nonstandard/src/array/contains').Install();
const contains = require('nonstandard/src/array/contains').Feature;
```

```js
var arr = ["a", "b", "c"];

arr.contains(['a', 'b']); // true

arr.contains('c'); // true

arr.contains('d'); // false
```

## Array.prototype.clone

Full clone array.

```ts
[].clone() : any[]
```

Install:

```js
require('nonstandard/src/array/clone').Install();
```

```js
var arr = [1, 5].clone();

// its simple
arr // [1, 5]
```

## Object.clone

Deep clone object

```ts
Object.clone(target: object) : object;
```

Install:

```js
require('nonstandard/src/object/clone').Install();
```

```js
var oob = { name: "Foo", test: "bar", cool: { yeah: true } };

var wob = Object.clone(oob);
// Object `wob` is full copy of `oob` without links in memory
```


## Object.empty

Check if object has not keys

```ts
Object.empty(target: object) : boolean;
```

Install:

```js
require('nonstandard/src/object/empty').Install();
```

```js
Object.empty({}) // true
Object.empty({ a: 2 }) // false
Object.empty(window) // false
```

## Object.present

Check if object has keys

```ts
Object.present(target: object) : boolean;
```

Install:

```js
require('nonstandard/src/object/present').Install();
```

```js
Object.present({}) // false
Object.present({ a: 2 }) // true
Object.present(window) // true
```


## Number.range

Create array of numbers

```ts
Number.range(min: number, max: number, step: number = 1) : number[];
```

Install:

```js
require('nonstandard/src/number/present').Install();
```

```js
console.log(Number.range(1, 10))
/*
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
*/

console.log(Number.range(2, 8, 2))
/*
  [2, 4, 6, 8]
*/
```

## Number.prototype.times

Run callback n times

```ts
(5).times(function(index: number) { return index + 1; }) : any[]
```

Install:

```js
require('nonstandard/src/number/times').Install();
```

```js
var result = (5).times(function(index) { return ++index * 2; });
result // [ 2, 4, 6, 8, 10 ]
```

## String.random

Generate random string with custom length

```ts
String.random(length: string = 10) : string;
```

Install:

```js
require('nonstandard/src/string/random').Install();
```

```js
String.random() // "778fx0hmc0"
String.random(5) // "u5ojh"
String.random(64) // "ww5z8kar8m6l4ichouw221n307xiec1wt6584qf4bib2rbsa4b379hoblsd42h3e"
```
