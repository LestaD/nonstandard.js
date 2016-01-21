# Readme

 [![NPM](https://nodei.co/npm/nonstandard.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/nonstandard/)

 [![Build Status](https://travis-ci.org/LestaD/nonstandard.js.svg?branch=master)](https://travis-ci.org/LestaD/nonstandard.js)
 ![Dependencies](https://david-dm.org/lestad/nonstandard.js.svg)
 [![npm version](https://badge.fury.io/js/nonstandard.svg)](https://npmjs.com/nonstandard)
 [![Code Climate](https://codeclimate.com/github/LestaD/nonstandard.js/badges/gpa.svg)](https://codeclimate.com/github/LestaD/nonstandard.js)
 [![Test Coverage](https://codeclimate.com/github/LestaD/nonstandard.js/badges/coverage.svg)](https://codeclimate.com/github/LestaD/nonstandard.js/coverage)
 [![bitHound Overalll Score](https://www.bithound.io/github/LestaD/nonstandard.js/badges/score.svg)](https://www.bithound.io/github/LestaD/nonstandard.js)

Some non standard JavaScript features.

> from Node.js > 0.12.0


## console.pipe

Log value to console and pass value
First value was passed next.

```typescript
console.pipe(returnValue: Mixed, logValue1: Mixed, logValue2: Mixed, logValueN: Mixed) : returnValue;
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

```typescript
console.log.pipe();
console.info.pipe();
console.warn.pipe();
console.error.pipe();
```

```js
executeFunction(console.log.pipe({ some: 'data' })); // value was shown in console, and passed to function `executeFunction`

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


## Array.prototype.first

First element in array

```typescript
[].first
```

```js
var arr = [5, 9, 14];

arr.first // 5

arr.first = 2;

arr // [2, 9, 14]
```

## Array.prototype.second

Second element in array

```typescript
[].second
```

```js
var arr = [1, 8, 10];

arr.second // 8

[].second // undefined

[].second = 2 // equals:  [][1] = 2
```

## Array.prototype.last

Latest element in array


```typescript
[].last
```

```js
var arr = [12, 34, 56, 78, 90];

arr.last // 90

arr.last == arr[arr.length - 1] // true

[].last = 1; // nothing changed
```

## Array.prototype.clean

Clear array


```typescript
[].clear() : Array<Mixed>
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

## Array.prototype.includes

Check elements exists in array


```typescript
[].includes(Array<Mixed>) : Boolean
```

```js
var arr = ["a", "b", "c"];

arr.includes(['a', 'b']); // true

arr.includes('c'); // true

arr.includes('d'); // false
```

## Array.prototype.clone

Full clone array.

```typescript
[].clone() : Array<Mixed>
```

```js
var arr = [1, 5].clone();

// its simple
arr // [1, 5]
```

## Object.clone

Deep clone object

```typescript
Object.clone(target: Object) : Object;
```

```js
var oob = { name: "Foo", test: "bar", cool: { yeah: true } };

var wob = Object.clone(oob);
// Object `wob` is full copy of `oob` without links in memory
```

## Number.range

Create array of numbers

```typescript
Number.range(min: Number, max: Number, step: Number = 1) : Number[];
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

```typescript
(5).times(function(index: Number) { return index + 1; }) : Mixed[]
```

```js
var result = (5).times(function(index) { return ++index * 2; });
result // [ 2, 4, 6, 8, 10 ]
```

