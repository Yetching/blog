---
date: 2023-04-26
title: 【ES语法新特性】
tags: 
	- 杂项
describe: ES语法新特性
---

### ES2023

- 修改数组 Array 和 TypedArray 的方法返回副本，不直接修改
  - Array.toReversed
  - Array.toSorted
  - Array.toSpliced
  - Array.with(index, value) => Array
    ```javascript
    const array = [1, 2, 3];
    const newArray = array.with(1, 'change');
    // array [1,2,3]
    // newArray [1,'change',3]
    ```
- WeakMap 支持 Symbol 作为 key
- 尾部查找

  - Array.findLast
  - Array.findLastIndex

- 异常链
  ```javascript
  function willThrowError() {}
  ```
