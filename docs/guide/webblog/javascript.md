# JavaScript 完全指南

## JavaScript 基础

### 简介

JavaScript 是一种轻量级的、解释型的、面向对象的编程语言。它是目前最流行的编程语言之一，主要用于:

- 网页交互效果
- 前端应用开发
- 服务器端开发 (Node.js)
- 移动应用开发

### 使用方式

在 HTML 中使用 JavaScript 有三种方式：

1. **内联方式**：
```html
<button onclick="alert('你好!')">点击我</button>
```

2. **内部脚本**：
```html
<script>
  // 在 HTML 文件中直接编写 JavaScript 代码
  console.log("Hello World!");
  
  function sayHello() {
    alert("你好!");
  }
</script>
```

3. **外部脚本**：
```html
<!-- 推荐：引入外部 JavaScript 文件 -->
<script src="./js/main.js"></script>
```

### 注释

JavaScript 支持单行注释和多行注释：

```javascript
// 这是单行注释

/* 
  这是多行注释
  可以写多行
  便于解释复杂的代码
*/

/**
 * 这是文档注释
 * @param {string} name - 姓名参数
 * @returns {string} 返回问候语
 */
function greet(name) {
  return `你好, ${name}!`;
}
```

### 输出调试

JavaScript 提供多种方式输出和调试信息：

```javascript
// 1. 控制台输出
console.log('普通信息');
console.info('提示信息');
console.warn('警告信息');
console.error('错误信息');

// 2. 格式化输出
console.log('用户名: %s, 年龄: %d', '张三', 18);

// 3. 分组输出
console.group('用户信息');
console.log('姓名: 张三');
console.log('年龄: 18');
console.groupEnd();

// 4. 表格输出
console.table([
  { name: '张三', age: 18 },
  { name: '李四', age: 20 }
]);

// 5. 计时功能
console.time('计时器');
// ... 一些操作
console.timeEnd('计时器');

// 6. 断言
console.assert(1 === 2, '断言失败信息');
```

## 数据类型

### 基本数据类型

JavaScript 有 8 种基本数据类型：

```javascript
// 1. Number - 数字
let age = 25;                  // 整数
let price = 99.99;            // 浮点数
let infinity = Infinity;       // 无穷大
let notANumber = NaN;         // 非数字

// 2. String - 字符串
let firstName = "张";          // 双引号
let lastName = '三';          // 单引号
let fullName = `${firstName}${lastName}`;  // 模板字符串

// 3. Boolean - 布尔值
let isActive = true;
let isLoggedIn = false;

// 4. Null - 空值
let empty = null;

// 5. Undefined - 未定义
let notDefined;

// 6. Symbol - 符号
const sym1 = Symbol('描述');
const sym2 = Symbol('描述');  // sym1 !== sym2

// 7. BigInt - 大整数
const bigNumber = 9007199254740991n;

// 8. Object - 对象
const person = {
  name: '张三',
  age: 25,
  hobbies: ['读书', '运动'],
  address: {
    city: '北京',
    street: '朝阳区'
  }
};
```

### 类型转换

```javascript
// 1. 转换为字符串
String(123);              // "123"
(123).toString();        // "123"
123 + '';                // "123"

// 2. 转换为数字
Number('123');           // 123
parseInt('123');         // 123
parseFloat('123.45');    // 123.45
+'123';                  // 123

// 3. 转换为布尔值
Boolean(123);            // true
Boolean('');            // false
Boolean(0);             // false
Boolean(null);          // false
Boolean(undefined);     // false
!!123;                  // true
```

### 类型判断

```javascript
// 1. typeof 操作符
typeof 123;              // "number"
typeof "123";           // "string"
typeof true;            // "boolean"
typeof undefined;       // "undefined"
typeof null;            // "object" (这是一个历史遗留bug)
typeof {};              // "object"
typeof [];              // "object"
typeof Symbol();        // "symbol"

// 2. instanceof 操作符
[] instanceof Array;     // true
{} instanceof Object;    // true

// 3. Object.prototype.toString.call()
Object.prototype.toString.call([]);        // "[object Array]"
Object.prototype.toString.call({});        // "[object Object]"
Object.prototype.toString.call(null);      // "[object Null]"

// 4. Array.isArray()
Array.isArray([]);      // true
Array.isArray({});      // false
```
## 变量与作用域

### 变量声明

JavaScript 提供三种声明变量的方式,每种都有其特定的用途和作用域规则：

```javascript
// 1. var 声明
var name = "张三";      // 函数作用域，可重复声明
var name = "李四";      // 允许重复声明

// 2. let 声明
let age = 25;          // 块级作用域，不可重复声明
// let age = 26;       // 错误：不能重复声明

// 3. const 声明
const PI = 3.14159;    // 常量，声明时必须初始化
// PI = 3.14;         // 错误：不能修改常量值

// const 声明的对象可以修改属性
const person = {
    name: "张三"
};
person.name = "李四";   // 允许修改属性
// person = {};        // 错误：不能重新赋值
```

### 变量提升

JavaScript 中的变量提升需要特别注意：

```javascript
// var 的变量提升
console.log(name);     // 输出: undefined
var name = "张三";

// 等价于：
var name;
console.log(name);
name = "张三";

// let 和 const 没有变量提升
// console.log(age);   // 错误：暂时性死区
let age = 25;

// 函数声明提升
sayHello();           // 正常工作
function sayHello() {
    console.log("你好");
}

// 函数表达式不会提升
// sayHi();           // 错误
const sayHi = function() {
    console.log("Hi");
};
```

### 作用域

JavaScript 有三种主要的作用域类型：

```javascript
// 1. 全局作用域
var globalVar = "我是全局变量";

// 2. 函数作用域
function test() {
    var functionVar = "我是函数作用域变量";
    console.log(functionVar);    // 正常访问
    console.log(globalVar);      // 可以访问全局变量
}
// console.log(functionVar);     // 错误：无法访问函数内部变量

// 3. 块级作用域
{
    let blockVar = "我是块级作用域变量";
    const blockConst = "我是常量";
    console.log(blockVar);       // 正常访问
}
// console.log(blockVar);        // 错误：无法访问块级变量
```

### 闭包

闭包是 JavaScript 中一个重要的概念：

```javascript
// 基本闭包示例
function createCounter() {
    let count = 0;
    
    return {
        increment() {
            count++;
            return count;
        },
        decrement() {
            count--;
            return count;
        },
        getCount() {
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount()); // 1

// 实际应用示例
function createPrivateVariable(initialValue) {
    let value = initialValue;
    
    return {
        getValue() {
            return value;
        },
        setValue(newValue) {
            value = newValue;
        }
    };
}

const privateVar = createPrivateVariable(100);
console.log(privateVar.getValue());  // 100
privateVar.setValue(200);
console.log(privateVar.getValue());  // 200
```

## 运算符

### 算术运算符

```javascript
// 基本算术运算
let a = 10;
let b = 3;

console.log(a + b);    // 加法：13
console.log(a - b);    // 减法：7
console.log(a * b);    // 乘法：30
console.log(a / b);    // 除法：3.3333...
console.log(a % b);    // 取余：1
console.log(a ** b);   // 幂运算：1000

// 自增和自减
let x = 5;
console.log(x++);      // 5 (先返回后加1)
console.log(++x);      // 7 (先加1后返回)
console.log(x--);      // 7 (先返回后减1)
console.log(--x);      // 5 (先减1后返回)

// 复合赋值运算符
let y = 10;
y += 5;               // 等同于 y = y + 5
y -= 3;               // 等同于 y = y - 3
y *= 2;               // 等同于 y = y * 2
y /= 4;               // 等同于 y = y / 4
y %= 3;               // 等同于 y = y % 3
```

### 比较运算符

```javascript
// 相等性比较
console.log(5 == "5");     // true (值相等)
console.log(5 === "5");    // false (值和类型都要相等)
console.log(5 != "6");     // true
console.log(5 !== "5");    // true
console.log(null == undefined);   // true
console.log(null === undefined); // false

// 大小比较
console.log(5 > 3);        // true
console.log(5 >= 5);       // true
console.log(3 < 5);        // true
console.log(3 <= 3);       // true

// 特殊比较
console.log(NaN == NaN);   // false
console.log(Object.is(NaN, NaN)); // true
console.log(+0 === -0);    // true
console.log(Object.is(+0, -0));   // false
```

### 逻辑运算符

```javascript
// 基本逻辑运算
console.log(true && false);    // false (与)
console.log(true || false);    // true (或)
console.log(!true);            // false (非)

// 短路逻辑
console.log(true && "Hello");  // "Hello"
console.log(false && "Hello"); // false
console.log(true || "Hello");  // true
console.log(false || "Hello"); // "Hello"

// 空值合并运算符 (??)
const name = null;
console.log(name ?? "默认名称");  // "默认名称"

// 可选链运算符 (?.)
const user = {
    address: {
        street: "主街道"
    }
};
console.log(user?.address?.street);  // "主街道"
console.log(user?.contact?.phone);   // undefined
```
## 流程控制

### 条件语句

#### if...else 语句
```javascript
// 基本 if 语句
let age = 20;

if (age >= 18) {
    console.log("成年人");
} else if (age >= 12) {
    console.log("青少年");
} else {
    console.log("儿童");
}

// 条件表达式
let canVote = age >= 18 ? "可以投票" : "不能投票";

// 多重条件
let score = 85;
let grade;

if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else {
    grade = "D";
}
```

#### switch 语句
```javascript
let day = new Date().getDay();
let activity;

switch (day) {
    case 0:
        activity = "休息日";
        break;
    case 6:
        activity = "购物日";
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        activity = "工作日";
        break;
    default:
        activity = "未知日期";
}

// 使用 switch 判断类型
let value = "42";
switch (typeof value) {
    case "string":
        console.log("这是字符串");
        break;
    case "number":
        console.log("这是数字");
        break;
    default:
        console.log("其他类型");
}
```

### 循环语句

#### for 循环
```javascript
// 基本 for 循环
for (let i = 0; i < 5; i++) {
    console.log(`第 ${i + 1} 次循环`);
}

// 遍历数组
const fruits = ["苹果", "香蕉", "橙子"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// for...of 循环（用于可迭代对象）
for (const fruit of fruits) {
    console.log(fruit);
}

// for...in 循环（用于对象属性）
const person = {
    name: "张三",
    age: 25,
    city: "北京"
};

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}
```

#### while 和 do...while 循环
```javascript
// while 循环
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

// do...while 循环（至少执行一次）
let num = 0;
do {
    console.log(num);
    num++;
} while (num < 3);

// 带 break 的循环
let i = 0;
while (true) {
    if (i >= 5) break;
    console.log(i);
    i++;
}

// 带 continue 的循环
for (let i = 0; i < 5; i++) {
    if (i === 2) continue; // 跳过 2
    console.log(i);
}
```

## 函数

### 函数声明与表达式

```javascript
// 函数声明
function greet(name) {
    return `你好，${name}！`;
}

// 函数表达式
const sayHello = function(name) {
    return `Hello, ${name}!`;
};

// 箭头函数
const greetArrow = (name) => `嗨，${name}！`;

// 立即执行函数表达式（IIFE）
(function() {
    console.log("我会立即执行！");
})();

// 具名函数表达式
const factorial = function fact(n) {
    return n <= 1 ? 1 : n * fact(n - 1);
};
```

### 函数参数

```javascript
// 默认参数
function createUser(name = "匿名", age = 0) {
    return {
        name,
        age
    };
}

// 剩余参数
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// 参数解构
function printUserInfo({ name, age, address = "未知" }) {
    console.log(`姓名：${name}，年龄：${age}，地址：${address}`);
}

// 回调函数
function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: "测试数据" };
        callback(data);
    }, 1000);
}

fetchData((data) => {
    console.log("获取到数据：", data);
});
```

### 高阶函数

```javascript
// 函数作为参数
function operate(x, y, operation) {
    return operation(x, y);
}

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

console.log(operate(5, 3, add));      // 8
console.log(operate(5, 3, multiply)); // 15

// 函数返回函数
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15

// 函数组合
function compose(...functions) {
    return function(x) {
        return functions.reduceRight((value, fn) => fn(value), x);
    };
}

const addOne = x => x + 1;
const double = x => x * 2;
const addOneAndDouble = compose(double, addOne);

console.log(addOneAndDouble(3));  // 8 ((3 + 1) * 2)
```

### 纯函数与副作用

```javascript
// 纯函数示例
function add(a, b) {
    return a + b;
}

// 带副作用的函数
let total = 0;
function addToTotal(value) {
    total += value;  // 副作用：修改外部变量
    return total;
}

// 纯函数版本
function createCounter(initialValue = 0) {
    return {
        increment: (value = 1) => initialValue + value,
        decrement: (value = 1) => initialValue - value,
        getValue: () => initialValue
    };
}

const counter = createCounter(10);
console.log(counter.increment());  // 11
console.log(counter.decrement(2)); // 8
```
## 对象与类

### 对象基础

```javascript
// 对象字面量
const person = {
    // 基本属性
    name: "张三",
    age: 25,
    
    // 方法
    sayHello() {
        console.log(`你好，我是 ${this.name}`);
    },
    
    // 计算属性
    get birthYear() {
        return new Date().getFullYear() - this.age;
    },
    
    // setter
    set nickName(value) {
        this.name = value;
    }
};

// 访问属性
console.log(person.name);          // 点号表示法
console.log(person["age"]);        // 方括号表示法

// 动态添加属性
person.gender = "男";
person["hobby"] = "读书";

// 删除属性
delete person.hobby;

// 检查属性是否存在
console.log("name" in person);     // true
console.log(person.hasOwnProperty("age")); // true
```

### 对象方法

```javascript
// Object.keys() - 获取所有可枚举属性名
const keys = Object.keys(person);
console.log(keys); // ["name", "age", "gender"]

// Object.values() - 获取所有可枚举属性值
const values = Object.values(person);
console.log(values); // ["张三", 25, "男"]

// Object.entries() - 获取所有可枚举属性的键值对
const entries = Object.entries(person);
console.log(entries); // [["name", "张三"], ["age", 25], ["gender", "男"]]

// Object.assign() - 合并对象
const defaults = { language: "中文", theme: "light" };
const userPreferences = { theme: "dark" };
const settings = Object.assign({}, defaults, userPreferences);
console.log(settings); // { language: "中文", theme: "dark" }

// Object.freeze() - 冻结对象
const frozenObj = Object.freeze({ x: 1 });
// frozenObj.x = 2; // 错误：无法修改冻结对象

// Object.seal() - 密封对象
const sealedObj = Object.seal({ x: 1 });
sealedObj.x = 2;    // 允许修改现有属性
// sealedObj.y = 3; // 错误：无法添加新属性
```

### 类

```javascript
// 类声明
class Animal {
    // 构造函数
    constructor(name) {
        this.name = name;
    }
    
    // 实例方法
    speak() {
        console.log(`${this.name} 发出声音`);
    }
    
    // 静态方法
    static isAnimal(obj) {
        return obj instanceof Animal;
    }
    
    // getter
    get species() {
        return this._species;
    }
    
    // setter
    set species(value) {
        this._species = value;
    }
}

// 类继承
class Dog extends Animal {
    constructor(name, breed) {
        super(name);  // 调用父类构造函数
        this.breed = breed;
    }
    
    speak() {
        console.log(`${this.name} 汪汪叫`);
    }
    
    // 额外方法
    fetch() {
        console.log(`${this.name} 去捡球`);
    }
}

// 使用类
const dog = new Dog("旺财", "柴犬");
dog.speak();     // 旺财 汪汪叫
dog.fetch();     // 旺财 去捡球
console.log(Dog.isAnimal(dog)); // true
```

### 私有字段和方法

```javascript
class BankAccount {
    // 私有字段（以 # 开头）
    #balance = 0;
    #transactions = [];
    
    constructor(initialBalance) {
        this.#balance = initialBalance;
    }
    
    // 私有方法
    #validateAmount(amount) {
        return amount > 0 && Number.isFinite(amount);
    }
    
    deposit(amount) {
        if (this.#validateAmount(amount)) {
            this.#balance += amount;
            this.#transactions.push({ type: 'deposit', amount });
            return true;
        }
        return false;
    }
    
    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // 1500
// console.log(account.#balance);  // 错误：无法访问私有字段
```

## 数组

### 数组基础操作

```javascript
// 创建数组
const fruits = ["苹果", "香蕉", "橙子"];
const numbers = new Array(1, 2, 3, 4, 5);
const fixed = Array(3).fill(0);  // [0, 0, 0]

// 访问元素
console.log(fruits[0]);          // 第一个元素
console.log(fruits[fruits.length - 1]); // 最后一个元素

// 修改元素
fruits[1] = "梨子";

// 数组长度
console.log(fruits.length);

// 检查数组
console.log(Array.isArray(fruits)); // true
```

### 数组方法

```javascript
const arr = [1, 2, 3, 4, 5];

// 添加和删除元素
arr.push(6);         // 末尾添加
arr.pop();           // 末尾删除
arr.unshift(0);      // 开头添加
arr.shift();         // 开头删除
arr.splice(2, 1);    // 从索引2开始删除1个元素

// 查找元素
const index = arr.indexOf(3);    // 查找元素索引
const found = arr.includes(4);   // 检查是否包含
const foundObj = arr.find(x => x > 3);  // 查找符合条件的第一个元素

// 数组转换
const doubled = arr.map(x => x * 2);    // 映射
const filtered = arr.filter(x => x > 2); // 过滤
const sum = arr.reduce((a, b) => a + b, 0); // 归约

// 数组排序
arr.sort((a, b) => a - b);      // 升序排序
arr.reverse();                   // 反转数组

// 数组切片
const sliced = arr.slice(1, 3);  // 提取部分数组

// 数组连接
const combined = arr.concat([6, 7, 8]);
// 或使用展开运算符
const combined2 = [...arr, 6, 7, 8];
```

### 数组高级操作

```javascript
// 数组去重
const unique = [...new Set([1, 2, 2, 3, 3, 4])];
console.log(unique); // [1, 2, 3, 4]

// 数组扁平化
const nested = [1, [2, 3], [4, [5, 6]]];
const flattened = nested.flat(2);  // [1, 2, 3, 4, 5, 6]

// 数组分组
const people = [
    { name: "张三", age: 25 },
    { name: "李四", age: 30 },
    { name: "王五", age: 25 }
];

const groupByAge = people.reduce((groups, person) => {
    const age = person.age;
    groups[age] = groups[age] || [];
    groups[age].push(person);
    return groups;
}, {});

// 数组交集
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
const intersection = arr1.filter(x => arr2.includes(x));

// 数组差集
const difference = arr1.filter(x => !arr2.includes(x));
```
## DOM 操作

### 选择元素

```javascript
// 通过 ID 选择单个元素
const header = document.getElementById('header');

// 通过类名选择元素集合
const buttons = document.getElementsByClassName('btn');

// 通过标签名选择元素集合
const paragraphs = document.getElementsByTagName('p');

// 使用 CSS 选择器选择单个元素
const container = document.querySelector('.container');

// 使用 CSS 选择器选择多个元素
const links = document.querySelectorAll('a');

// 选择表单元素
const form = document.forms['myForm'];
const username = form.elements['username'];
```

### 操作 DOM 元素

```javascript
// 创建新元素
const div = document.createElement('div');
const text = document.createTextNode('Hello World');

// 添加元素
div.appendChild(text);
document.body.appendChild(div);

// 插入元素
const parent = document.querySelector('.parent');
const reference = document.querySelector('.reference');
parent.insertBefore(div, reference);

// 移除元素
const elementToRemove = document.querySelector('.remove-me');
elementToRemove.parentNode.removeChild(elementToRemove);
// 或者使用新方法
elementToRemove.remove();

// 替换元素
const oldElement = document.querySelector('.old');
const newElement = document.createElement('div');
oldElement.parentNode.replaceChild(newElement, oldElement);
```

### 修改元素内容和属性

```javascript
// 修改文本内容
element.textContent = '新文本内容';
element.innerText = '新文本内容';

// 修改 HTML 内容
element.innerHTML = '<span>新的 HTML 内容</span>';

// 修改属性
element.setAttribute('class', 'new-class');
element.id = 'new-id';
element.title = '新标题';

// 修改样式
element.style.color = 'red';
element.style.backgroundColor = '#f0f0f0';
element.style.fontSize = '16px';

// 操作类名
element.classList.add('new-class');
element.classList.remove('old-class');
element.classList.toggle('active');
element.classList.replace('old', 'new');
```

### DOM 遍历

```javascript
// 遍历子节点
const parent = document.querySelector('.parent');

// 所有子节点（包括文本节点）
for (const node of parent.childNodes) {
    console.log(node);
}

// 仅元素节点
for (const element of parent.children) {
    console.log(element);
}

// 获取特定的亲属节点
const firstChild = parent.firstElementChild;
const lastChild = parent.lastElementChild;
const nextSibling = element.nextElementSibling;
const previousSibling = element.previousElementSibling;
const parentElement = element.parentElement;
```

## 事件处理

### 添加事件监听器

```javascript
// 基本事件监听
const button = document.querySelector('button');

button.addEventListener('click', function(event) {
    console.log('按钮被点击了！');
    console.log('事件对象：', event);
});

// 使用箭头函数
button.addEventListener('click', (event) => {
    console.log('使用箭头函数处理点击事件');
});

// 添加多个监听器
function handler1() { console.log('处理器 1'); }
function handler2() { console.log('处理器 2'); }

button.addEventListener('click', handler1);
button.addEventListener('click', handler2);

// 移除事件监听器
button.removeEventListener('click', handler1);
```

### 常见事件类型

```javascript
// 鼠标事件
element.addEventListener('click', () => {});      // 点击
element.addEventListener('dblclick', () => {});   // 双击
element.addEventListener('mouseenter', () => {}); // 鼠标进入
element.addEventListener('mouseleave', () => {}); // 鼠标离开
element.addEventListener('mousemove', () => {});  // 鼠标移动

// 键盘事件
document.addEventListener('keydown', (event) => {
    console.log('按下的键：', event.key);
});
document.addEventListener('keyup', () => {});
document.addEventListener('keypress', () => {});

// 表单事件
form.addEventListener('submit', (event) => {
    event.preventDefault(); // 阻止表单默认提交
    console.log('表单提交');
});

input.addEventListener('change', () => {});  // 值改变时
input.addEventListener('input', () => {});   // 输入时
input.addEventListener('focus', () => {});   // 获得焦点
input.addEventListener('blur', () => {});    // 失去焦点

// 文档事件
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM 完全加载');
});

window.addEventListener('load', () => {
    console.log('页面完全加载');
});
```

### 事件委托

```javascript
// 事件委托示例
const list = document.querySelector('ul');

list.addEventListener('click', (event) => {
    // 检查点击的是否为列表项
    if (event.target.tagName === 'LI') {
        console.log('点击的列表项：', event.target.textContent);
    }
});

// 复杂的事件委托
document.addEventListener('click', (event) => {
    // 使用 closest 方法查找最近的匹配元素
    const button = event.target.closest('.btn');
    if (button) {
        const action = button.dataset.action;
        console.log('执行动作：', action);
    }
});
```

## 异步编程

### Promise

```javascript
// 创建 Promise
const myPromise = new Promise((resolve, reject) => {
    // 异步操作
    setTimeout(() => {
        const random = Math.random();
        if (random > 0.5) {
            resolve('成功！随机数：' + random);
        } else {
            reject('失败！随机数太小：' + random);
        }
    }, 1000);
});

// 使用 Promise
myPromise
    .then(result => {
        console.log('成功：', result);
    })
    .catch(error => {
        console.log('错误：', error);
    })
    .finally(() => {
        console.log('无论成功失败都会执行');
    });

// Promise 链式调用
function step1() {
    return new Promise(resolve => {
        setTimeout(() => resolve('步骤1完成'), 1000);
    });
}

function step2(result) {
    return new Promise(resolve => {
        setTimeout(() => resolve(result + ' -> 步骤2完成'), 1000);
    });
}

step1()
    .then(step2)
    .then(result => console.log(result));
```

### Async/Await

```javascript
// 基本用法
async function fetchUser() {
    try {
        const response = await fetch('https://api.example.com/user');
        const user = await response.json();
        console.log('用户数据：', user);
    } catch (error) {
        console.error('获取用户数据失败：', error);
    }
}

// 并行执行多个异步操作
async function fetchMultipleData() {
    try {
        const [users, posts] = await Promise.all([
            fetch('https://api.example.com/users').then(r => r.json()),
            fetch('https://api.example.com/posts').then(r => r.json())
        ]);
        
        console.log('用户数据：', users);
        console.log('文章数据：', posts);
    } catch (error) {
        console.error('获取数据失败：', error);
    }
}

// 实际应用示例
class DataService {
    async fetchData() {
        const cache = await this.checkCache();
        if (cache) {
            return cache;
        }
        
        const data = await this.fetchFromAPI();
        await this.saveToCache(data);
        return data;
    }
    
    async checkCache() {
        // 检查缓存逻辑
    }
    
    async fetchFromAPI() {
        // API 请求逻辑
    }
    
    async saveToCache(data) {
        // 保存到缓存逻辑
    }
}
```
## 错误处理

### try...catch 语句

```javascript
// 基本错误处理
try {
    // 可能会抛出错误的代码
    throw new Error('发生了一个错误');
} catch (error) {
    console.error('捕获到错误：', error.message);
} finally {
    console.log('总是会执行的代码');
}

// 自定义错误类
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

// 使用自定义错误
function validateUser(user) {
    try {
        if (!user.name) {
            throw new ValidationError('用户名不能为空');
        }
        if (user.age < 0) {
            throw new ValidationError('年龄不能为负数');
        }
    } catch (error) {
        if (error instanceof ValidationError) {
            console.error('验证错误：', error.message);
        } else {
            console.error('未知错误：', error);
        }
    }
}
```

### 异步错误处理

```javascript
// Promise 错误处理
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('获取数据失败：', error);
        // 可以选择重新抛出错误
        throw error;
    }
}

// 全局错误处理
window.onerror = function(message, source, lineno, colno, error) {
    console.error('全局错误：', {
        message,
        source,
        lineno,
        colno,
        error
    });
    return true; // 防止默认错误处理
};

// Promise 未捕获错误处理
window.onunhandledrejection = function(event) {
    console.error('未处理的 Promise 错误：', event.reason);
    event.preventDefault();
};
```

## 模块化

### ES6 模块

```javascript
// math.js - 导出模块
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// 默认导出
export default class Calculator {
    add(a, b) {
        return a + b;
    }
}

// main.js - 导入模块
import Calculator, { add, subtract } from './math.js';
import * as mathUtils from './math.js';

// 使用导入的功能
console.log(add(5, 3));         // 8
console.log(subtract(5, 3));    // 2

const calc = new Calculator();
console.log(calc.add(5, 3));    // 8
```

### 动态导入

```javascript
// 动态导入模块
async function loadModule() {
    try {
        const module = await import('./dynamic-module.js');
        module.default();  // 使用默认导出
        module.someFunction();  // 使用具名导出
    } catch (error) {
        console.error('模块加载失败：', error);
    }
}

// 条件导入
if (condition) {
    import('./feature.js')
        .then(module => {
            module.enableFeature();
        })
        .catch(error => {
            console.error('特性加载失败：', error);
        });
}
```

## 高级特性

### 代理和反射

```javascript
// 使用 Proxy 创建代理对象
const target = {
    name: '张三',
    age: 25
};

const handler = {
    get(target, property) {
        console.log(`访问属性：${property}`);
        return target[property];
    },
    set(target, property, value) {
        console.log(`设置属性：${property} = ${value}`);
        target[property] = value;
        return true;
    }
};

const proxy = new Proxy(target, handler);

// 使用代理对象
console.log(proxy.name);  // 访问属性：name
proxy.age = 26;          // 设置属性：age = 26

// 使用 Reflect
console.log(Reflect.get(target, 'name'));
Reflect.set(target, 'age', 27);
```

### 装饰器（Stage 3 提案）

```javascript
// 类装饰器
function logged(target) {
    return class extends target {
        constructor(...args) {
            console.log('创建实例');
            super(...args);
        }
    };
}

// 方法装饰器
function measure(target, name, descriptor) {
    const original = descriptor.value;
    descriptor.value = function(...args) {
        console.time(name);
        const result = original.apply(this, args);
        console.timeEnd(name);
        return result;
    };
    return descriptor;
}

// 使用装饰器
@logged
class Example {
    @measure
    doSomething() {
        // 一些耗时操作
    }
}
```

### WeakMap 和 WeakSet

```javascript
// WeakMap 示例
const weakMap = new WeakMap();

let obj = { data: '一些数据' };
weakMap.set(obj, '与对象关联的数据');

console.log(weakMap.get(obj));  // '与对象关联的数据'
obj = null;  // 对象可以被垃圾回收

// WeakSet 示例
const weakSet = new WeakSet();
let obj2 = { name: '测试对象' };
weakSet.add(obj2);

console.log(weakSet.has(obj2));  // true
obj2 = null;  // 对象可以被垃圾回收
```

### 生成器和迭代器

```javascript
// 生成器函数
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

// 使用生成器
const gen = numberGenerator();
console.log(gen.next().value);  // 1
console.log(gen.next().value);  // 2
console.log(gen.next().value);  // 3

// 自定义迭代器
const customIterator = {
    *[Symbol.iterator]() {
        yield 'A';
        yield 'B';
        yield 'C';
    }
};

// 使用 for...of 循环迭代
for (const item of customIterator) {
    console.log(item);  // 'A', 'B', 'C'
}
```

### Web Workers

```javascript
// main.js
const worker = new Worker('worker.js');

worker.postMessage({
    type: 'CALCULATE',
    data: [1, 2, 3, 4, 5]
});

worker.onmessage = function(event) {
    console.log('从 Worker 收到结果：', event.data);
};

// worker.js
self.onmessage = function(event) {
    if (event.data.type === 'CALCULATE') {
        const result = event.data.data.reduce((a, b) => a + b, 0);
        self.postMessage(result);
    }
};
```
这就是 JavaScript 完整指南的最后一部分。这个指南涵盖了从基础到高级的所有主要特性和概念。建议根据需要逐步学习和实践，并在实际项目中运用这些知识。如果您有任何特定主题需要更详细的解释，请随时询问。
