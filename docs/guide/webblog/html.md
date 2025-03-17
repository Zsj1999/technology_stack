# HTML 完整指南

## 1. HTML 基础

### 1.1 文档结构
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>网页标题</title>
    <meta name="description" content="页面描述">
    <meta name="keywords" content="关键词1,关键词2">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- 页面内容 -->
</body>
</html>
```

### 1.2 基础标签
```html
<!-- 标题标签 -->
<h1>一级标题</h1>
<h2>二级标题</h2>
<h3>三级标题</h3>

<!-- 段落和文本 -->
<p>这是一个段落</p>
<span>行内文本</span>
<br> <!-- 换行 -->
<hr> <!-- 水平线 -->

<!-- 文本格式化 -->
<strong>加粗文本</strong>
<em>斜体文本</em>
<mark>高亮文本</mark>
<del>删除线</del>
<ins>下划线</ins>
<sub>下标</sub>
<sup>上标</sup>
```

### 1.3 链接和图片
```html
<!-- 链接 -->
<a href="https://example.com" target="_blank" rel="noopener noreferrer">外部链接</a>
<a href="#section">内部锚点链接</a>
<a href="mailto:example@email.com">邮件链接</a>
<a href="tel:+1234567890">电话链接</a>

<!-- 图片 -->
<img src="image.jpg" alt="图片描述" width="300" height="200">
<picture>
    <source media="(min-width: 800px)" srcset="large.jpg">
    <source media="(min-width: 400px)" srcset="medium.jpg">
    <img src="small.jpg" alt="响应式图片">
</picture>
```

## 2. 列表和表格

### 2.1 列表
```html
<!-- 无序列表 -->
<ul>
    <li>项目1</li>
    <li>项目2</li>
</ul>

<!-- 有序列表 -->
<ol>
    <li>第一项</li>
    <li>第二项</li>
</ol>

<!-- 定义列表 -->
<dl>
    <dt>术语</dt>
    <dd>术语描述</dd>
</dl>
```

### 2.2 表格
```html
<table>
    <caption>表格标题</caption>
    <thead>
        <tr>
            <th>表头1</th>
            <th>表头2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>数据1</td>
            <td>数据2</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="2">表格脚注</td>
        </tr>
    </tfoot>
</table>
```

## 3. 表单元素

### 3.1 基础表单
```html
<form action="/submit" method="post">
    <!-- 文本输入 -->
    <input type="text" name="username" placeholder="用户名">
    
    <!-- 密码输入 -->
    <input type="password" name="password">
    
    <!-- 单选按钮 -->
    <input type="radio" name="gender" value="male" id="male">
    <label for="male">男</label>
    
    <!-- 复选框 -->
    <input type="checkbox" name="hobby" value="reading">
    
    <!-- 下拉选择 -->
    <select name="city">
        <option value="beijing">北京</option>
        <option value="shanghai">上海</option>
    </select>
    
    <!-- 文本域 -->
    <textarea name="message" rows="4" cols="50"></textarea>
    
    <!-- 提交按钮 -->
    <button type="submit">提交</button>
</form>
```

### 3.2 HTML5 表单增强
```html
<form>
    <!-- 邮箱输入 -->
    <input type="email" required>
    
    <!-- 数字输入 -->
    <input type="number" min="0" max="100" step="1">
    
    <!-- 范围滑块 -->
    <input type="range" min="0" max="100">
    
    <!-- 日期选择 -->
    <input type="date">
    <input type="time">
    <input type="datetime-local">
    
    <!-- 颜色选择 -->
    <input type="color">
    
    <!-- 文件上传 -->
    <input type="file" accept="image/*" multiple>
    
    <!-- 搜索框 -->
    <input type="search">
    
    <!-- URL输入 -->
    <input type="url">
    
    <!-- 电话号码 -->
    <input type="tel">
</form>
```

## 4. 语义化标签

### 4.1 页面结构
```html
<header>
    <nav>
        <ul>
            <li><a href="#home">首页</a></li>
            <li><a href="#about">关于</a></li>
        </ul>
    </nav>
</header>

<main>
    <article>
        <header>
            <h1>文章标题</h1>
            <time datetime="2024-01-20">2024年1月20日</time>
        </header>
        
        <section>
            <h2>第一部分</h2>
            <p>内容...</p>
        </section>
        
        <footer>
            <p>作者：张三</p>
        </footer>
    </article>
    
    <aside>
        <h2>相关文章</h2>
        <ul>
            <li><a href="#">推荐阅读1</a></li>
            <li><a href="#">推荐阅读2</a></li>
        </ul>
    </aside>
</main>

<footer>
    <p>&copy; 2024 网站名称</p>
</footer>
```

### 4.2 文本语义
```html
<address>
    联系方式：<a href="mailto:example@email.com">发送邮件</a>
</address>

<blockquote cite="https://source.com">
    这是一段引用的文本
</blockquote>

<pre><code>
    // 这是一段代码
    function example() {
        return true;
    }
</code></pre>

<figure>
    <img src="image.jpg" alt="示例图片">
    <figcaption>图片说明文字</figcaption>
</figure>
```

## 5. 多媒体元素

### 5.1 音频和视频
```html
<!-- 视频播放器 -->
<video controls width="500" poster="thumbnail.jpg">
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    <track kind="subtitles" src="subtitles.vtt" srclang="zh">
    您的浏览器不支持视频标签
</video>

<!-- 音频播放器 -->
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    您的浏览器不支持音频标签
</audio>
```

### 5.2 Canvas 和 SVG
```html
<!-- Canvas 绘图 -->
<canvas id="myCanvas" width="200" height="100"></canvas>
<script>
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0, 0, 150, 75);
</script>

<!-- SVG 矢量图 -->
<svg width="100" height="100">
    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>
```

## 6. HTML5 高级特性

### 6.1 数据存储
```html
<!-- Web Storage -->
<script>
    // localStorage
    localStorage.setItem('key', 'value');
    
    // sessionStorage
    sessionStorage.setItem('key', 'value');
</script>

<!-- IndexedDB -->
<script>
    const request = indexedDB.open("MyDatabase", 1);
    request.onupgradeneeded = function(event) {
        const db = event.target.result;
        const objectStore = db.createObjectStore("customers");
    };
</script>
```

### 6.2 离线应用
```html
<!-- 应用缓存（已废弃，建议使用 Service Worker） -->
<html manifest="cache.manifest">

<!-- Service Worker 注册 -->
<script>
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js');
    }
</script>
```

### 6.3 Web Components
```html
<!-- 自定义元素 -->
<template id="my-template">
    <style>
        .container { padding: 20px; }
    </style>
    <div class="container">
        <slot name="header"></slot>
        <slot></slot>
    </div>
</template>

<script>
    class MyComponent extends HTMLElement {
        constructor() {
            super();
            const template = document.getElementById('my-template');
            const shadowRoot = this.attachShadow({mode: 'open'});
            shadowRoot.appendChild(template.content.cloneNode(true));
        }
    }
    customElements.define('my-component', MyComponent);
</script>
```

## 7. 最佳实践

### 7.1 SEO优化
```html
<!-- Meta 标签优化 -->
<meta name="description" content="页面描述，150字以内">
<meta name="keywords" content="关键词1,关键词2">
<meta name="author" content="作者名">
<meta name="robots" content="index,follow">

<!-- Open Graph 协议 -->
<meta property="og:title" content="页面标题">
<meta property="og:description" content="页面描述">
<meta property="og:image" content="缩略图URL">

<!-- 结构化数据 -->
<script type="application/ld+json">
{
    "@context": "http://schema.org",
    "@type": "Article",
    "name": "文章标题",
    "author": "作者名"
}
</script>
```

### 7.2 性能优化
```html
<!-- 资源预加载 -->
<link rel="preload" href="style.css" as="style">
<link rel="preload" href="main.js" as="script">

<!-- 资源预连接 -->
<link rel="preconnect" href="https://example.com">

<!-- 异步加载脚本 -->
<script async src="analytics.js"></script>
<script defer src="non-critical.js"></script>

<!-- 图片懒加载 -->
<img loading="lazy" src="image.jpg" alt="延迟加载的图片">
```

### 7.3 无障碍优化
```html
<!-- ARIA 标签 -->
<button aria-label="关闭" aria-expanded="false">
    <span class="icon">X</span>
</button>

<div role="alert" aria-live="polite">
    这是一条重要通知
</div>

<!-- 跳转链接 -->
<a href="#main-content" class="skip-link">
    跳到主要内容
</a>

<!-- 表单无障碍 -->
<label for="username">用户名</label>
<input type="text" id="username" aria-required="true">
```

这些是 HTML 的基础知识点，建议：
* 多动手练习
* 查看优秀网站源代码学习
* 关注 W3C 标准
* 保持学习新特性

