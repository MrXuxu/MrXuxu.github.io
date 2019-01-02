
## 1. js堆栈与深浅拷贝
### 1. 数据类型
1. 基本类型：
5种：Undefined、Null、Boolean、Number 和 String
特点：值直接存放在栈中，可以直接访问
2. 引用类型：
常用3种：数组，函数，对象
特点：值存放在堆中，变量存放的是一个指针，数据间接访问
### 2. 传值和传址
基本类型复制传值
引用类型复制传址
### 3. 深拷贝和浅拷贝
**浅拷贝：**
```js
var arr = [1, 2, 3, 4];
var b = arr;
console.log(b);
```
因为数组是引用类型，所以直接赋值给b，赋给的是一个地址，当arr发生改变时，b也会发生改变

**深拷贝：**
```js
var arr = [1, 2, 3, 4];
// var b = arr;  浅拷贝
var b = [];
for(let i=0; i<arr.length; i++){
    b.push(arr[i]);  将arr的每项push到b中
}
console.log(b);  //此时b已经是一个单独的数组
```