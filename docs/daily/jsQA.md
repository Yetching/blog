---
date: 2023-05-04
title: 【javascript QA】
tags: 
	- 杂项
describe: js面试答题
---

### javascript interview

#### 1 What are the possible ways to create objects in JavaScript

```javascript
const obj = Object.create(null);

const obj = {}; // 字面量

const obj = new Object(); // 构造函数

function Person(name) {
  this.name = name;
  this.age = 23;
}
const obj = new Person('Liu');

class Person {
  constructor(name) {
    this.name = name;
  }
}
const obj = new Person('Liu');

const obj = new (function () {
  this.name = 'Liu';
})();
```

#### watchEffect

```javascript
export default {
  setup() {
    watchEffect((onInvalidate) => {
      // 异步 API 调用
      const apiCall = someAsyncMethod(props.songID);

      onInvalidate(() => {
        // 取消 API 调用
        apiCall.cancel();
      });
    });
  },
};
```
