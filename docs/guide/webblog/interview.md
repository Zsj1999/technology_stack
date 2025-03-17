# 前端开发面试题集

## HTML 部分

### 1. 语义化标签的作用是什么？
语义化标签的主要作用：
1. 提升代码可读性和可维护性
2. 有利于SEO优化
3. 便于屏幕阅读器解析，提升无障碍访问
4. 有助于搜索引擎爬虫理解网页结构

常用语义化标签示例：
```html
<header>网站头部</header>
<nav>
    <ul>
        <li><a href="#home">首页</a></li>
        <li><a href="#about">关于</a></li>
    </ul>
</nav>
<main>
    <article>
        <h1>文章标题</h1>
        <section>第一部分</section>
        <section>第二部分</section>
    </article>
    <aside>相关推荐</aside>
</main>
<footer>版权信息</footer>
```

### 2. 说说HTML5新特性
主要新特性包括：

1. 新的语义化标签
2. 音频视频标签：
```html
<video src="movie.mp4" controls>
    <source src="movie.mp4" type="video/mp4">
    <source src="movie.ogg" type="video/ogg">
    您的浏览器不支持视频标签
</video>

<audio controls>
    <source src="music.mp3" type="audio/mpeg">
    <source src="music.ogg" type="audio/ogg">
    您的浏览器不支持音频标签
</audio>
```

3. Canvas绘图：
```html
<canvas id="myCanvas" width="200" height="100"></canvas>
<script>
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0, 0, 150, 75);
</script>
```

### 3. 浏览器存储方式有哪些？
```javascript
// localStorage - 永久存储
localStorage.setItem('user', JSON.stringify({name: '张三'}));
const user = JSON.parse(localStorage.getItem('user'));

// sessionStorage - 会话存储
sessionStorage.setItem('token', 'abc123');
const token = sessionStorage.getItem('token');

// Cookie - 可设置过期时间
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";

// IndexedDB - 大容量结构化存储
const request = indexedDB.open("MyDatabase", 1);
request.onupgradeneeded = function(event) {
    const db = event.target.result;
    const objectStore = db.createObjectStore("customers", { keyPath: "id" });
};
```

### 4. HTML5 表单验证
```html
<form>
    <!-- 必填验证 -->
    <input type="text" required>
    
    <!-- 正则验证 -->
    <input type="text" pattern="[A-Za-z]{3}">
    
    <!-- 自定义验证 -->
    <input type="text" oninvalid="this.setCustomValidity('请输入正确的值')">
</form>
```

### 5. HTML5 离线存储
```html
<!DOCTYPE html>
<html manifest="cache.manifest">
<head>
    <meta charset="UTF-8">
    <title>离线应用</title>
</head>
<body>
    <!-- 页面内容 -->
</body>
</html>

<!-- cache.manifest -->
CACHE MANIFEST
# version 1.0
CACHE:
index.html
style.css
script.js

NETWORK:
*

FALLBACK:
/ offline.html
```

## CSS 部分

### 1. CSS 盒模型相关

Q: 请解释标准盒模型和 IE 盒模型的区别？
```css
/* 标准盒模型 */
.box {
    box-sizing: content-box;  /* 默认值 */
    width: 200px;
    padding: 20px;
    border: 1px solid #000;
    /* 实际宽度 = 200px + 40px + 2px = 242px */
}

/* IE盒模型 */
.box {
    box-sizing: border-box;
    width: 200px;
    padding: 20px;
    border: 1px solid #000;
    /* 实际宽度 = 200px */
}
```
A: 
- 标准盒模型：width/height 只包含 content
- IE盒模型：width/height 包含 content + padding + border
- 可以通过 box-sizing 属性切换盒模型

### 2. CSS 选择器优先级

Q: CSS 选择器优先级是如何计算的？
A:
1. !important 最高优先级
2. 内联样式：1000
3. ID选择器：100 
4. 类选择器/属性选择器/伪类：10
5. 元素选择器/伪元素：1
6. 通配符：0

示例：
```css
#header .nav li { }  /* 100 + 10 + 1 = 111 */
.nav .list li { }    /* 10 + 10 + 1 = 21 */
```

### 3. BFC (Block Formatting Context)

Q: 什么是 BFC？如何创建 BFC？
A: BFC 是一个独立的渲染区域，内部元素与外部元素互不影响。

创建 BFC 的方法：
```css
.bfc {
    /* 以下任意一种方式都可以创建 BFC */
    overflow: hidden;
    display: flex;
    display: inline-block;
    position: absolute;
    position: fixed;
    float: left/right;
}
```

BFC 的主要作用：
1. 防止 margin 重叠
2. 清除浮动
3. 自适应两栏布局

### 4. Flex 布局

Q: Flex 布局中，flex: 1 代表什么？
A: flex: 1 是以下三个属性的简写：
```css
.item {
    flex-grow: 1;    /* 放大比例 */
    flex-shrink: 1;  /* 缩小比例 */
    flex-basis: 0%;  /* 基准值 */
}
```

Q: 如何实现 Flex 布局的垂直居中？
```css
.parent {
    display: flex;
    justify-content: center;  /* 水平居中 */
    align-items: center;      /* 垂直居中 */
    height: 100vh;
}
```

### 5. Grid 布局

Q: Grid 布局和 Flex 布局的区别？
A:
- Flex 是一维布局，适合处理行或列
- Grid 是二维布局，适合处理行和列
- Flex 适合小规模布局
- Grid 适合大规模布局

示例：
```css
/* Grid 布局示例 */
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
}

/* Flex 布局示例 */
.flex-container {
    display: flex;
    justify-content: space-between;
}
```

### 6. 响应式设计

Q: 如何实现移动端适配？
A: 常用的移动端适配方案：

1. 媒体查询
```css
@media screen and (max-width: 768px) {
    .container {
        width: 100%;
    }
}
```

2. rem 适配
```css
/* 根元素基准值 */
html {
    font-size: calc(100vw / 375 * 10);
}

.element {
    width: 10rem;  /* 相对于根元素的字体大小 */
}
```

3. viewport 适配
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### 7. CSS 性能优化

Q: 有哪些 CSS 性能优化的方法？
A:
1. 选择器优化
```css
/* 避免深层嵌套 */
/* 不推荐 */
.header .nav .list .item { }

/* 推荐 */
.nav-item { }
```

2. 属性优化
```css
/* 使用简写属性 */
/* 不推荐 */
.element {
    margin-top: 10px;
    margin-right: 20px;
    margin-bottom: 10px;
    margin-left: 20px;
}

/* 推荐 */
.element {
    margin: 10px 20px;
}
```

3. 避免重排重绘
```css
/* 使用 transform 替代位置改变 */
.element {
    transform: translateX(100px);  /* 优于 left: 100px */
}
```

### 8. CSS 模块化

Q: 如何实现 CSS 的模块化？
A: 常用的 CSS 模块化方案：

1. BEM 命名规范
```css
.block { }
.block__element { }
.block--modifier { }
```

2. CSS Modules
```css
/* style.module.css */
.className {
    color: red;
}
```

3. CSS-in-JS
```javascript
const Button = styled.button`
    background: ${props => props.primary ? 'blue' : 'white'};
    color: ${props => props.primary ? 'white' : 'black'};
`;
```

### 9. 移动端问题

Q: 如何解决移动端 1px 问题？
A: 常用解决方案：

1. transform 缩放
```css
.border-1px {
    position: relative;
}
.border-1px::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #000;
    transform: scaleY(0.5);
}
```

2. viewport 缩放
```html
<meta name="viewport" content="width=device-width,initial-scale=0.5">
```

### 10. CSS 新特性

Q: 说说你了解的 CSS 新特性？
A: 一些重要的新特性：

1. CSS 变量
```css
:root {
    --primary-color: #007bff;
}

.element {
    color: var(--primary-color);
}
```

2. 滚动捕捉
```css
.container {
    scroll-snap-type: y mandatory;
}

.item {
    scroll-snap-align: start;
}
```

3. 容器查询
```css
@container (min-width: 400px) {
    .card {
        display: grid;
        grid-template-columns: 2fr 1fr;
    }
}
```

### 11. CSS 动画性能优化

Q: 如何优化 CSS 动画性能？
A: 主要优化方法：

```css
/* 1. 使用 transform 和 opacity */
.good-animation {
    transform: translateX(100px);
    opacity: 0.5;
}

/* 避免使用 */
.bad-animation {
    left: 100px;
    background: rgba(0,0,0,0.5);
}

/* 2. 使用 will-change 提示浏览器 */
.optimized {
    will-change: transform;
}

/* 3. 使用 requestAnimationFrame */
function animate() {
    element.style.transform = `translateX(${x}px)`;
    requestAnimationFrame(animate);
}

/* 4. 开启 GPU 加速 */
.gpu-accelerated {
    transform: translateZ(0);
    backface-visibility: hidden;
}
```

### 12. CSS 预处理器

Q: 说说 CSS 预处理器的优势和区别？
A: 常见的预处理器特性：

```scss
// SCSS 示例
$primary-color: #007bff;
$spacing: 8px;

@mixin button($color) {
    background: $color;
    padding: $spacing * 2;
    border-radius: 4px;
    
    &:hover {
        background: darken($color, 10%);
    }
}

.button {
    @include button($primary-color);
}

// 嵌套规则
.card {
    &__header {
        padding: $spacing;
    }
    
    &__body {
        padding: $spacing * 2;
    }
}
```

## JavaScript 部分

### 1. 说说事件循环(Event Loop)
```javascript
console.log('1');  // 同步任务

setTimeout(() => {
    console.log('2');  // 宏任务
}, 0);

Promise.resolve().then(() => {
    console.log('3');  // 微任务
});

new Promise((resolve) => {
    console.log('4');  // 同步任务
    resolve();
}).then(() => {
    console.log('5');  // 微任务
});

console.log('6');  // 同步任务

// 输出顺序：1 4 6 3 5 2
```

### 2. 手写防抖和节流函数
```javascript
// 防抖：多次触发，只执行最后一次
function debounce(fn, delay) {
    let timer = null;
    return function(...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    }
}

// 节流：规定时间内只执行一次
function throttle(fn, delay) {
    let flag = true;
    return function(...args) {
        if (!flag) return;
        flag = false;
        setTimeout(() => {
            fn.apply(this, args);
            flag = true;
        }, delay);
    }
}

// 使用示例
const handleScroll = debounce(() => {
    console.log('页面滚动');
}, 200);

window.addEventListener('scroll', handleScroll);
```

### 3. 深拷贝实现
```javascript
function deepClone(obj, hash = new WeakMap()) {
    if (obj === null) return obj;
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);
    if (typeof obj !== 'object') return obj;
    if (hash.get(obj)) return hash.get(obj);

    const cloneObj = Array.isArray(obj) ? [] : {};
    hash.set(obj, cloneObj);

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloneObj[key] = deepClone(obj[key], hash);
        }
    }
    return cloneObj;
}

// 使用示例
const obj = {
    name: '张三',
    info: {
        age: 20,
        hobbies: ['读书', '运动']
    }
};
const newObj = deepClone(obj);
```

### 4. JavaScript 内存管理
```javascript
// 内存泄漏示例
function leakExample() {
    const leak = {};
    window.leakedObject = leak; // 全局引用，不会被回收
}

// 闭包导致的内存泄漏
function closure() {
    const data = new Array(1000000);
    return function() {
        return data[0];
    }
}

// 正确的内存管理
function properCleanup() {
    let heavyObject = new BigObject();
    
    // 使用完后解除引用
    heavyObject = null;
    
    // 或使用 WeakMap/WeakSet
    const cache = new WeakMap();
    cache.set(key, value);
}
```

## JavaScript 进阶面试题

### 5. Promise 相关
Q: 手写 Promise.all 和 Promise.race
```javascript
// 实现 Promise.all
Promise.myAll = function(promises) {
    return new Promise((resolve, reject) => {
        let results = [];
        let completed = 0;
        
        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(value => {
                results[index] = value;
                completed++;
                
                if (completed === promises.length) {
                    resolve(results);
                }
            }).catch(reject);
        });
    });
};

// 实现 Promise.race
Promise.myRace = function(promises) {
    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            Promise.resolve(promise).then(resolve).catch(reject);
        });
    });
};

// 使用示例
const p1 = Promise.resolve(1);
const p2 = new Promise(resolve => setTimeout(() => resolve(2), 1000));
const p3 = new Promise((resolve, reject) => setTimeout(() => reject('error'), 500));

Promise.myAll([p1, p2]).then(console.log); // [1, 2]
Promise.myRace([p1, p2, p3]).then(console.log); // 1
```

### 6. 手写 call、apply、bind
```javascript
// 实现 call
Function.prototype.myCall = function(context, ...args) {
    context = context || window;
    const fn = Symbol('fn');
    context[fn] = this;
    
    const result = context[fn](...args);
    delete context[fn];
    return result;
};

// 实现 apply
Function.prototype.myApply = function(context, args = []) {
    context = context || window;
    const fn = Symbol('fn');
    context[fn] = this;
    
    const result = context[fn](...args);
    delete context[fn];
    return result;
};

// 实现 bind
Function.prototype.myBind = function(context, ...args1) {
    const fn = this;
    return function(...args2) {
        return fn.apply(context, [...args1, ...args2]);
    };
};

// 使用示例
const obj = { name: '张三' };
function greet(age) {
    console.log(`我是${this.name}，今年${age}岁`);
}

greet.myCall(obj, 20); // 我是张三，今年20岁
greet.myApply(obj, [20]); // 我是张三，今年20岁
const boundGreet = greet.myBind(obj);
boundGreet(20); // 我是张三，今年20岁
```

### 7. 手写 new 操作符
```javascript
function myNew(Constructor, ...args) {
    // 1. 创建空对象，并链接到构造函数的原型
    const obj = Object.create(Constructor.prototype);
    
    // 2. 执行构造函数，并绑定 this
    const result = Constructor.apply(obj, args);
    
    // 3. 返回结果（如果构造函数返回对象则使用该对象，否则返回创建的实例）
    return result instanceof Object ? result : obj;
}

// 使用示例
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person = myNew(Person, '张三', 20);
console.log(person); // Person { name: '张三', age: 20 }
```

### 8. 事件委托实现
```javascript
function delegate(parent, selector, type, handler) {
    parent.addEventListener(type, function(event) {
        const target = event.target;
        const matches = parent.querySelectorAll(selector);
        
        if (Array.from(matches).includes(target)) {
            handler.call(target, event);
        }
    });
}

// 使用示例
const ul = document.querySelector('ul');
delegate(ul, 'li', 'click', function(event) {
    console.log('点击了:', this.textContent);
});
```

### 9. 虚拟 DOM 和 Diff 算法
```javascript
// 简单的虚拟 DOM 结构
class VNode {
    constructor(tag, props, children) {
        this.tag = tag;
        this.props = props;
        this.children = children;
    }
}

// 简单的 Diff 算法实现
function diff(oldVNode, newVNode) {
    // 1. 类型不同，直接替换
    if (oldVNode.tag !== newVNode.tag) {
        return {
            type: 'REPLACE',
            node: newVNode
        };
    }
    
    // 2. 属性比较
    const propsPatches = {};
    for (const key in newVNode.props) {
        if (oldVNode.props[key] !== newVNode.props[key]) {
            propsPatches[key] = newVNode.props[key];
        }
    }
    
    // 3. 子节点比较（简化版）
    const childrenPatches = [];
    const minLen = Math.min(oldVNode.children.length, newVNode.children.length);
    
    for (let i = 0; i < minLen; i++) {
        childrenPatches.push(diff(oldVNode.children[i], newVNode.children[i]));
    }
    
    return {
        type: 'PATCH',
        props: propsPatches,
        children: childrenPatches
    };
}
```

### 10. 手写发布订阅模式
```javascript
class EventEmitter {
    constructor() {
        this.events = {};
    }
    
    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
        return this;
    }
    
    off(event, callback) {
        if (!this.events[event]) return this;
        if (!callback) {
            delete this.events[event];
        } else {
            this.events[event] = this.events[event].filter(cb => cb !== callback);
        }
        return this;
    }
    
    emit(event, ...args) {
        if (!this.events[event]) return this;
        this.events[event].forEach(callback => {
            callback.apply(this, args);
        });
        return this;
    }
    
    once(event, callback) {
        const wrapper = (...args) => {
            callback.apply(this, args);
            this.off(event, wrapper);
        };
        this.on(event, wrapper);
        return this;
    }
}

// 使用示例
const emitter = new EventEmitter();

emitter.on('message', data => {
    console.log('收到消息:', data);
});

emitter.once('once', data => {
    console.log('只触发一次:', data);
});

emitter.emit('message', 'hello'); // 收到消息: hello
emitter.emit('once', 'world'); // 只触发一次: world
emitter.emit('once', 'world'); // 不会触发
```

## Vue3 面试题

### 1. Vue3 和 Vue2 的主要区别
Q: Vue3 相比 Vue2 有哪些重大改变？
A:
1. 响应式系统改变
```javascript
// Vue2 - Object.defineProperty
Object.defineProperty(obj, 'key', {
    get() { /* ... */ },
    set(newValue) { /* ... */ }
});

// Vue3 - Proxy
const proxy = new Proxy(target, {
    get(target, key) { /* ... */ },
    set(target, key, value) { /* ... */ }
});
```

2. Composition API
```javascript
// Vue3 组合式 API
import { ref, computed, onMounted } from 'vue';

export default {
    setup() {
        const count = ref(0);
        const double = computed(() => count.value * 2);

        onMounted(() => {
            console.log('组件已挂载');
        });

        return { count, double };
    }
}
```

3. 生命周期变化
```javascript
// Vue2
export default {
    beforeCreate() {},
    created() {},
    beforeMount() {},
    mounted() {}
}

// Vue3
import { onBeforeMount, onMounted } from 'vue';

export default {
    setup() {
        onBeforeMount(() => {});
        onMounted(() => {});
    }
}
```

### 2. Vue3 性能优化
Q: Vue3 在性能方面做了哪些优化？
A:
1. 静态树提升
```javascript
// 模板
<template>
    <div class="static">静态内容</div>
    <div>{{ dynamic }}</div>
</template>

// 编译后
const _hoisted_1 = /*#__PURE__*/createVNode("div", { class: "static" }, "静态内容")

export function render() {
    return (_hoisted_1, createVNode("div", null, dynamic.value))
}
```

2. Patch Flag 优化
```javascript
// 模板
<div :id="id" class="title">{{ text }}</div>

// 编译后
createVNode("div", {
    id: id,
    class: "title"
}, text, 8 /* PROPS */, ["id"])
```

3. 按需编译
```javascript
// 只引入需要的功能
import { ref, computed } from 'vue';
// 而不是
import Vue from 'vue';
```

## 工程化与性能优化

### 1. 构建优化
```javascript
// 1. webpack 分包策略
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
};

// 2. Tree Shaking 优化
// package.json
{
  "sideEffects": [
    "*.css",
    "*.scss"
  ]
}

// 3. 动态导入
const MyComponent = () => {
  return import(/* webpackChunkName: "my-component" */ './MyComponent');
};
```

### 2. 首屏优化
```javascript
// 1. 关键CSS提取
const critical = require('critical');

critical.generate({
  base: 'dist/',
  src: 'index.html',
  target: {
    css: 'critical.css',
    html: 'index-critical.html',
  },
  width: 1300,
  height: 900,
});

// 2. 预加载关键资源
<link rel="preload" href="font.woff2" as="font" crossorigin>
<link rel="preload" href="main.js" as="script">
<link rel="prefetch" href="non-critical.js">

// 3. 图片优化
function optimizeImage() {
  return {
    // 使用 webp
    '<img src="image.jpg" alt="图片">'
    `<picture>
      <source srcset="image.webp" type="image/webp">
      <img src="image.jpg" alt="图片">
    </picture>`,
    
    // 响应式图片
    '<img srcset="small.jpg 300w,
                  medium.jpg 600w,
                  large.jpg 900w"
          sizes="(max-width: 300px) 300px,
                 (max-width: 600px) 600px,
                 900px"
          src="fallback.jpg"
          alt="响应式图片">'
  }
}
```

### 3. 运行时优化
```javascript
// 1. 虚拟列表实现
class VirtualList {
  constructor(options) {
    this.options = {
      itemHeight: 50,
      containerHeight: 500,
      ...options
    };
    
    this.state = {
      startIndex: 0,
      endIndex: 0,
      scrollTop: 0,
      visibleCount: Math.ceil(this.options.containerHeight / this.options.itemHeight)
    };
    
    this.init();
  }
  
  init() {
    this.container = document.querySelector(this.options.container);
    this.content = document.createElement('div');
    this.container.appendChild(this.content);
    
    this.container.addEventListener('scroll', this.onScroll.bind(this));
    this.render();
  }
  
  onScroll(e) {
    const scrollTop = e.target.scrollTop;
    this.setState({ scrollTop });
  }
  
  setState(newState) {
    Object.assign(this.state, newState);
    this.render();
  }
  
  render() {
    const { scrollTop, visibleCount } = this.state;
    const startIndex = Math.floor(scrollTop / this.options.itemHeight);
    const endIndex = startIndex + visibleCount;
    
    this.content.style.height = `${this.options.data.length * this.options.itemHeight}px`;
    this.content.style.paddingTop = `${startIndex * this.options.itemHeight}px`;
    
    const visibleItems = this.options.data.slice(startIndex, endIndex);
    this.content.innerHTML = visibleItems.map(this.options.itemRender).join('');
  }
}

// 2. 防抖节流优化
class PerformanceOptimizer {
  // 防抖
  static debounce(fn, delay) {
    let timer = null;
    return function(...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };
  }
  
  // 节流
  static throttle(fn, delay) {
    let last = 0;
    return function(...args) {
      const now = Date.now();
      if (now - last >= delay) {
        fn.apply(this, args);
        last = now;
      }
    };
  }
  
  // RAF节流
  static rafThrottle(fn) {
    let locked = false;
    return function(...args) {
      if (locked) return;
      locked = true;
      requestAnimationFrame(() => {
        fn.apply(this, args);
        locked = false;
      });
        };
    }
}
```

### 4. 网络优化
```javascript
// 1. 请求合并
class RequestQueue {
  constructor(delay = 300) {
    this.queue = new Map();
    this.delay = delay;
  }
  
  request(key, requestFn) {
    return new Promise((resolve, reject) => {
      if (!this.queue.has(key)) {
        this.queue.set(key, {
          timer: setTimeout(() => this.flush(key), this.delay),
          callbacks: []
        });
      }
      
      this.queue.get(key).callbacks.push({ resolve, reject });
    });
  }
  
  async flush(key) {
    const { callbacks } = this.queue.get(key);
    this.queue.delete(key);
    
    try {
      const result = await requestFn();
      callbacks.forEach(({ resolve }) => resolve(result));
    } catch (error) {
      callbacks.forEach(({ reject }) => reject(error));
    }
  }
}

// 2. 资源缓存
class ResourceCache {
  constructor() {
    this.cache = new Map();
  }
  
  async load(url, options = {}) {
    const key = this.getCacheKey(url, options);
    
    if (this.cache.has(key)) {
      return this.cache.get(key);
    }
    
    const resource = await this.fetchResource(url, options);
    this.cache.set(key, resource);
    return resource;
  }
  
  getCacheKey(url, options) {
    return `${url}-${JSON.stringify(options)}`;
  }
  
  async fetchResource(url, options) {
    const response = await fetch(url, options);
    return response.json();
  }
}
```

### 5. 安全优化
```javascript
// 1. XSS防御
class SecurityUtil {
  static escapeHtml(str) {
    const escapeMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      '/': '&#x2F;'
    };
    return str.replace(/[&<>"'/]/g, char => escapeMap[char]);
  }
  
  // CSP配置
  static setupCSP() {
    return {
      'Content-Security-Policy': [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
        "style-src 'self' 'unsafe-inline'",
        "img-src 'self' data: https:",
        "connect-src 'self' https://api.example.com"
      ].join('; ')
    };
  }
  
  // CSRF Token
  static generateCSRFToken() {
    return crypto.randomBytes(16).toString('hex');
  }
}

// 2. 输入验证
class Validator {
  static rules = {
    email: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,
    phone: /^1[3-9]\d{9}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/
  };
  
  static validate(value, type) {
    if (!this.rules[type]) {
      throw new Error(`Unknown validation type: ${type}`);
    }
    return this.rules[type].test(value);
  }
  
  static sanitize(input) {
    return input.trim().replace(/[<>]/g, '');
  }
}
```

