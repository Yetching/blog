---
date: 2023-05-04
title: 【ES6 Proxy】
tags: 
	- 杂项
describe: ES6 Proxy
---

#### 引入 proxy

vue3 的响应式不同于 vue2

- vue2 使用 Object.defineProperty 遍历对象的每一个属性，把每一个属性变成一个 getter 和 setter 函数，读取属性时触发 getter，赋值时触发 setter

  - Observer: 把普通对象转换为响应式对象，对于数组，会修改操作方法
  - Dep: 记录依赖，派发更新
  - watcher: 记录谁使用了依赖，负责执行
  - Scheduler: 使用 nextTick 来调度 watcher 的执行

  ```javascript
  // vue2
  Object.defineProperty(obj, {});
  ```

- vue3 使用 Proxy 对于对象进行代理，对一个对象的一切访问会先通过这一层代理

  ```javascript
  // vue3
  reactiveObj = new Proxy(obj, {
    get: function () {},
    set: function () {},
  });
  ```
