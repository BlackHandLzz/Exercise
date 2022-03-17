## Promise
- 为什么需要？
    依次加载3个请求， index.tex > name.txt > age.txt
- 解决无限嵌套

## 三个状态
- pending  等待
- fulfilled   成功
- rejected  失败

## 装换状态
- 开始状态 pending , resolve()可转变为成功态 ，reject() 转变为失败状态
- 一旦状态改变则不可再变
- resolve(xxx)数据会转给then(成功，失败)
- reject(xxx) 数据会转给then中失败回调方法
- 是成功状态调成功的回调， 失败状态就调失败的回调
- 需要把then中的成功失败回调保存
