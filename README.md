# Readme

Some non standard JavaScript features.

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
[].clear() : Array<any>
```

```js
var arr = [1, 2, 3, 45, 67];

arr.clean();

arr // now `[]`
```

## Array.prototype.includes

Check elements exists in array


```typescript
[].includes(Array<any>) : boolean
```

```js
var arr = ["a", "b", "c"];

arr.includes(['a', 'b']); // true

arr.includes('c'); // true

arr.includes('d'); // false
```

## Array.prototype.every

> Standard polyfill

The every() method tests whether all elements in the array pass the test implemented by the provided function.

[Array.prototype.every()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/every)


## Array.prototype.clone

Full clone array.

```typescript
[].clone() : Array<any>
```

```js
var arr = [1, 5].clone();

// its simple
arr // [1, 5]
```

## Object.clone

Deep clone object

```typescript
Object.clone(target: object) : object;
```

```js
var oob = { name: "Foo", test: "bar", cool: { yeah: true } };

var wob = Object.clone(oob);
// Object `wob` is full copy of `oob` without links in memory
```

## Number.range

Creates iterable range

```typescript
Number.range(min: number, max: number, step: number = 1) : iterable;
```

```js

for (var num of Number.range(1, 10)) {
  console.log(num);
}
/*
  1
  2
  3
  4
  5
  6
  7
  8
  9
  10
*/

for (var i of Number.range(2, 6, 2)) {
  console.log(i);
}
/*
  2
  4
  6
*/
```


## Number.rangeInside

Create iterable for range inside only.

```typescript
Number.rangeInside(min: number, max: number, step: number = 1) : iterable;
```

```js
for (var num of Number.rangeInside(1, 5)) {
  console.log(num);
}
/*
  2
  3
  4
*/
```

