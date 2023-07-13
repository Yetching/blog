---
date: 2023-06-06
title: 【Css按钮】
tags: 
	- 杂项
describe: 动态按钮
---

<style>
.button {
  background-color: black;
  color: white;
  padding: 10px 20px;
  border: 2px solid black;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  position: relative;
  overflow: hidden;
}

@keyframes move {
  0% {
    left: 0;
    top: 0;
  }
  25% {
    left: 100%;
    top: 0;
  }
  50% {
    left: 100%;
    top: 100%;
  }
  75% {
    left: 0;
    top: 100%;
  }
  100% {
    left: 0;
    top: 0;
  }
}

.button:before {
  content: "";
  position: absolute;
  width: 20px;
  height: 2px;
  background: linear-gradient(to right, green, lightgreen);
  animation: move 4s linear infinite;
}

.button:hover:before {
  background: linear-gradient(to right, lightgreen, green);
}
</style>
