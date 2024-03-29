---
date: 2023-05-10
title: 【SSE & Websockets】
tags: 
	- 杂项
describe: learning for SSE
---

### 什么是 SSE

Server-Sent Events 即服务器推送事件，是一种服务器实时主动向浏览器推送消息的技术，简称 SSE。
在最新的 html5 中，提供对应供浏览器和服务端通信的协议 HTTP 以及可供前端开发者使用的 JavaScript API EventSource 对象

### 对比 WebSockets

| Server-Sent Events                               | WebSockets                                     |
| ------------------------------------------------ | ---------------------------------------------- |
| 基于 HTTP 协议，不需要特殊的协议和服务器即可工作 | 基于 Tcp 协议，需要单独的服务器来处理协议      |
| 单工，只能由服务端单向发送消息                   | 全双工，服务端和客户端都可以同时发送和接收消息 |
| 轻量级，使用简单                                 | 相对复杂，功能强大                             |
| 默认支持断线重连                                 | 需要自己实现                                   |

| 消息类型只支持文本或者使用 Base64 编码和 gzip 压缩后的二进制消息| 类型广泛，默认支持二进制数据 |
|......|
