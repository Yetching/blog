---
date: 2023-07-13
title: 【vue3组合式api探索】
tags: 
	- 杂项
describe: 学习新颖的组合式api
---

> 2023-07-13

- watch,收集指定数据源的依赖进行更新,数据源可以是 ref,reactive,getter 等类型的数值,也可以是这种对象上的属性但需要使用函数包裹

  ```js
  watch(ref, (old, new) => {})

  watch(() => ref.name, (old, new) => {})
  ```

- watchEffect,传入的第一个参数为一个副作用函数,收集回调函数中用到的所有依赖,这个副作用函数的参数也是一个函数，用来注册清理回调。清理回调会在该副作用下一次执行前被调用，可以用来清理无效的副作用，第二个函数为 options 可传入相关配置，如{ flush: post }等
  ```js
  watchEffect((onCleanUp) => {
    ...
    onCleanUp(fn())
  }, {
    flush: 'pre'
  })
  ```
- watchPostEffect,等价于 watchEffect(..., {flush: 'post'}),副作用函数的执行发生在组件重新渲染后
- watchSyncEffect,等价于 watchEffect(..., {flush: 'sync'}),副作用函数的执行发生在依赖变更之时，此时的组件还未完成更新渲染
- 执行顺序上 watchSyncEffect 原则上于 watchEffect(默认)是一致的，都在 onBeforeUpdate 之前,而 watchPostEffect 发生在更新渲染之后
