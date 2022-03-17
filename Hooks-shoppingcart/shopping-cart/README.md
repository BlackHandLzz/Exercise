# MVC

1. V -> view 视图 模板
2. C -> controller 控制器  后端逻辑部分 视图和数据模型搭桥
     -> 面向客户端的接口
3. M -> model 数据模型 -> 操作数据库

models -> 数据请求
services -> 数据服务

Vuex

component -> store.commit -> mutation method -> state

component -> store.dispatch -> action -> ctx.commit -> mutation method -> state

Redux

component -> store.dispatch -> action -> ctx.commit -> reducer method -> state

事件 ->  不响应 -> 纯函数（工具函数）


