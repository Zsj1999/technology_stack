# CSS3 完整参考手册

## 简介

CSS3 是现代 Web 开发的核心技术之一,提供了强大的样式和布局功能。本手册将系统地介绍 CSS3 的所有重要属性和用法。


## 1. CSS3 基础概念

### 1.1 CSS3 模块化

CSS3 采用模块化方式,主要包含:
- 选择器模块
- 盒模型模块
- 背景和边框模块
- 文字特效模块
- 2D/3D 转换模块
- 动画模块
- 多列布局模块
- 用户界面模块

### 1.2 语法规则

```css
选择器 {
    属性1: 值1;
    属性2: 值2;
}
```

## 2. 选择器详解

### 2.1 基础选择器
```css
/* 1. 元素选择器 */
div { }  /* 选择所有 div 元素 */

/* 2. 类选择器 */
.className { }  /* 选择所有 class="className" 的元素 */

/* 3. ID 选择器 */
#idName { }  /* 选择 id="idName" 的元素 */

/* 4. 通用选择器 */
* { }  /* 选择所有元素 */

/* 5. 属性选择器 */
[title] { }  /* 选择带有 title 属性的元素 */
[title="value"] { }  /* 选择 title="value" 的元素 */
[title^="value"] { }  /* 选择 title 以 "value" 开头的元素 */
[title$="value"] { }  /* 选择 title 以 "value" 结尾的元素 */
[title*="value"] { }  /* 选择 title 包含 "value" 的元素 */
```

### 2.2 组合选择器
```css
/* 1. 后代选择器 */
div span { }  /* 选择 div 内的所有 span 元素 */

/* 2. 子元素选择器 */
div > span { }  /* 只选择 div 的直接子元素 span */

/* 3. 相邻兄弟选择器 */
div + p { }  /* 选择紧接在 div 后的第一个 p 元素 */

/* 4. 通用兄弟选择器 */
div ~ p { }  /* 选择 div 后的所有 p 元素 */
```

### 2.3 伪类选择器
```css
/* 1. 链接伪类 */
a:link { }      /* 未访问的链接 */
a:visited { }   /* 已访问的链接 */
a:hover { }     /* 鼠标悬停 */
a:active { }    /* 激活状态 */

/* 2. 结构性伪类 */
:first-child { }    /* 第一个子元素 */
:last-child { }     /* 最后一个子元素 */
:nth-child(n) { }   /* 第 n 个子元素 */
:nth-of-type(n) { } /* 同类型中第 n 个元素 */
:empty { }          /* 没有子元素的元素 */

/* 3. 表单相关伪类 */
:checked { }     /* 被选中的表单元素 */
:disabled { }    /* 禁用的表单元素 */
:required { }    /* 必填的表单元素 */
:optional { }    /* 可选的表单元素 */
:valid { }       /* 验证通过的表单元素 */
:invalid { }     /* 验证失败的表单元素 */
```
### 代码规范
```css
/* 1. 命名规范 */
/* 类名使用小写字母，多个单词用连字符连接 */
.button {
    /* ... */
}

/* 2. 代码格式 */
/* 每行代码不超过80个字符 */
.button {
    display: inline-block;
    padding: 8px 16px;
    border: 1px solid #007bff;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
}

/* 3. 代码注释 */
/* 单行注释 */
/* 多行注释 */
/* 块注释 */
/* 文档注释 */
```
## 3. 盒模型与布局

### 3.1 盒模型详解
```css
.box {
    /* 1. 内容区域 */
    width: 200px;
    height: 100px;
    
    /* 2. 内边距 */
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 10px;
    padding-left: 20px;
    /* 简写 */
    padding: 10px 20px;  /* 上下 左右 */
    
    /* 3. 边框 */
    border-width: 1px;
    border-style: solid;
    border-color: #000;
    /* 简写 */
    border: 1px solid #000;
    
    /* 4. 外边距 */
    margin: 10px 20px 10px 20px;  /* 上 右 下 左 */
    
    /* 5. 盒模型计算方式 */
    box-sizing: content-box;  /* 标准盒模型 */
    box-sizing: border-box;   /* IE 盒模型 */
}
```

### 3.2 Flexbox 布局完整指南
```css
.flex-container {
    display: flex;  /* 或 inline-flex */
    
    /* 1. 主轴方向 */
    flex-direction: row | row-reverse | column | column-reverse;
    
    /* 2. 是否换行 */
    flex-wrap: nowrap | wrap | wrap-reverse;
    
    /* 3. 主轴对齐 */
    justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
    
    /* 4. 交叉轴对齐 */
    align-items: stretch | flex-start | flex-end | center | baseline;
    
    /* 5. 多行对齐 */
    align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}

.flex-item {
    /* 1. 增长系数 */
    flex-grow: 0;  /* 默认值 */
    
    /* 2. 收缩系数 */
    flex-shrink: 1;  /* 默认值 */
    
    /* 3. 基准值 */
    flex-basis: auto;  /* 默认值 */
    
    /* 简写 */
    flex: 0 1 auto;  /* grow shrink basis */
    
    /* 4. 单个项目对齐 */
    align-self: auto | flex-start | flex-end | center | baseline | stretch;
    
    /* 5. 排序 */
    order: 0;  /* 默认值 */
}
```

### 3.3 Grid 布局完整指南
```css
.grid-container {
    display: grid;
    
    /* 1. 定义列 */
    grid-template-columns: 100px 1fr 2fr;
    grid-template-columns: repeat(3, 1fr);
    grid-template-columns: minmax(100px, 1fr);
    
    /* 2. 定义行 */
    grid-template-rows: 100px auto;
    
    /* 3. 间距 */
    gap: 10px;  /* 行列间距相同 */
    row-gap: 10px;
    column-gap: 20px;
    
    /* 4. 区域命名 */
    grid-template-areas: 
        "header header"
        "sidebar content"
        "footer footer";
        
    /* 5. 对齐方式 */
    justify-items: start | end | center | stretch;
    align-items: start | end | center | stretch;
    place-items: center;  /* 简写 */
}

.grid-item {
    /* 1. 指定位置 */
    grid-column: 1 / 3;  /* 从第1列线到第3列线 */
    grid-row: 1 / 2;     /* 从第1行线到第2行线 */
    
    /* 2. 区域指定 */
    grid-area: header;
    
    /* 3. 单个项目对齐 */
    justify-self: start | end | center | stretch;
    align-self: start | end | center | stretch;
}
```
## 4. 文本与字体

### 4.1 文本属性完整列表
```css
.text-style {
    /* 1. 文本颜色 */
    color: #333;                    /* 设置文字颜色 */
    
    /* 2. 文本对齐 */
    text-align: left;              /* 左对齐 */
    text-align: right;             /* 右对齐 */
    text-align: center;            /* 居中对齐 */
    text-align: justify;           /* 两端对齐 */
    
    /* 3. 文本装饰 */
    text-decoration: none;         /* 无装饰 */
    text-decoration: underline;    /* 下划线 */
    text-decoration: overline;     /* 上划线 */
    text-decoration: line-through; /* 删除线 */
    text-decoration-color: #f00;   /* 装饰线颜色 */
    text-decoration-style: solid;  /* 实线 */
    text-decoration-style: dashed; /* 虚线 */
    text-decoration-style: dotted; /* 点线 */
    text-decoration-style: double; /* 双线 */
    text-decoration-style: wavy;   /* 波浪线 */
    
    /* 4. 文本缩进 */
    text-indent: 2em;             /* 首行缩进2个字符 */
    
    /* 5. 文本转换 */
    text-transform: none;         /* 无转换 */
    text-transform: capitalize;   /* 首字母大写 */
    text-transform: uppercase;    /* 全部大写 */
    text-transform: lowercase;    /* 全部小写 */
    
    /* 6. 字母间距 */
    letter-spacing: 2px;         /* 字母间距 */
    
    /* 7. 单词间距 */
    word-spacing: 4px;          /* 单词间距 */
    
    /* 8. 行高 */
    line-height: 1.5;          /* 1.5倍行高 */
    line-height: 20px;         /* 固定行高 */
    
    /* 9. 文本阴影 */
    text-shadow: 2px 2px 2px rgba(0,0,0,0.3); /* 水平偏移 垂直偏移 模糊半径 颜色 */
    
    /* 10. 文本溢出处理 */
    white-space: nowrap;       /* 不换行 */
    overflow: hidden;          /* 溢出隐藏 */
    text-overflow: ellipsis;   /* 显示省略号 */
}
```

### 4.2 字体属性详解
```css
.font-style {
    /* 1. 字体族 */
    font-family: Arial, "Microsoft YaHei", sans-serif;  /* 依次尝试使用字体 */
    
    /* 2. 字体大小 */
    font-size: 16px;           /* 像素大小 */
    font-size: 1.2em;          /* 相对父元素 */
    font-size: 1.2rem;         /* 相对根元素 */
    
    /* 3. 字体粗细 */
    font-weight: normal;       /* 正常粗细 */
    font-weight: bold;         /* 粗体 */
    font-weight: 100;          /* 最细 */
    font-weight: 900;          /* 最粗 */
    
    /* 4. 字体样式 */
    font-style: normal;        /* 正常样式 */
    font-style: italic;        /* 斜体 */
    font-style: oblique;       /* 倾斜体 */
    
    /* 5. 字体变体 */
    font-variant: normal;      /* 正常变体 */
    font-variant: small-caps;  /* 小型大写字母 */
    
    /* 6. 字体显示策略 */
    font-display: auto;        /* 自动 */
    font-display: block;       /* 阻塞显示 */
    font-display: swap;        /* 立即替换 */
    font-display: fallback;    /* 短暂替换 */
    font-display: optional;    /* 可选替换 */
    
    /* 7. 字体简写 */
    /* 顺序: font-style font-variant font-weight font-size/line-height font-family */
    font: italic small-caps bold 16px/1.5 Arial, sans-serif;
}
```

### 4.3 文本排版高级技巧
```css
.text-advanced {
    /* 1. 多行文本溢出 */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;     /* 显示行数 */
    overflow: hidden;
    
    /* 2. 文本换行处理 */
    word-wrap: break-word;     /* 长单词换行 */
    word-break: break-all;     /* 任意位置换行 */
    
    /* 3. 文本选中样式 */
    ::selection {
        background: #b3d4fc;   /* 选中背景色 */
        color: #000;           /* 选中文字颜色 */
    }
    
    /* 4. 首字下沉 */
    p:first-letter {
        float: left;
        font-size: 2em;
        padding: 0 .2em;
    }
    
    /* 5. 首行特殊样式 */
    p:first-line {
        font-variant: small-caps;
    }
}
```

## 5. 视觉效果

### 5.1 背景属性全解
```css
.background {
    /* 1. 背景颜色 */
    background-color: #f0f0f0;                /* 纯色背景 */
    background-color: rgba(255,0,0,0.5);      /* 半透明背景 */
    
    /* 2. 背景图片 */
    background-image: url('image.jpg');       /* 图片背景 */
    background-image: linear-gradient(45deg, #f00, #00f);  /* 渐变背景 */
    background-image: radial-gradient(circle, #f00, #00f); /* 径向渐变 */
    
    /* 3. 背景重复 */
    background-repeat: repeat;      /* 双向重复 */
    background-repeat: no-repeat;   /* 不重复 */
    background-repeat: repeat-x;    /* 水平重复 */
    background-repeat: repeat-y;    /* 垂直重复 */
    
    /* 4. 背景位置 */
    background-position: center center;  /* 居中 */
    background-position: 50% 50%;        /* 百分比 */
    background-position: 20px 20px;      /* 具体位置 */
    
    /* 5. 背景尺寸 */
    background-size: cover;        /* 覆盖容器 */
    background-size: contain;      /* 完整显示 */
    background-size: 100% 100%;    /* 拉伸填充 */
    
    /* 6. 背景固定 */
    background-attachment: scroll;  /* 随页面滚动 */
    background-attachment: fixed;   /* 固定不动 */
    background-attachment: local;   /* 随元素滚动 */
    
    /* 7. 背景裁剪和定位区域 */
    background-clip: border-box;    /* 延伸到边框 */
    background-clip: padding-box;   /* 延伸到内边距 */
    background-clip: content-box;   /* 仅内容区域 */
    
    /* 8. 多重背景 */
    background: 
        url('top.png') no-repeat top,
        url('bottom.png') no-repeat bottom,
        #f0f0f0;
}
```

### 5.2 边框与圆角
```css
.border-style {
    /* 1. 边框基础 */
    border: 1px solid #ccc;        /* 简写属性 */
    
    /* 2. 边框宽度 */
    border-width: 1px;             /* 统一宽度 */
    border-top-width: 2px;         /* 单边宽度 */
    
    /* 3. 边框样式 */
    border-style: solid;           /* 实线 */
    border-style: dashed;          /* 虚线 */
    border-style: dotted;          /* 点线 */
    border-style: double;          /* 双线 */
    border-style: groove;          /* 凹槽 */
    border-style: ridge;           /* 凸槽 */
    border-style: inset;           /* 内陷 */
    border-style: outset;          /* 外凸 */
    
    /* 4. 圆角 */
    border-radius: 8px;            /* 统一圆角 */
    border-radius: 8px 4px;        /* 对角圆角 */
    border-radius: 8px 4px 2px 1px;/* 分别指定 */
    border-radius: 50%;            /* 圆形 */
    
    /* 5. 边框图片 */
    border-image-source: url('border.png');
    border-image-slice: 27;
    border-image-width: 27px;
    border-image-outset: 0;
    border-image-repeat: stretch;   /* 拉伸 */
    border-image-repeat: repeat;    /* 重复 */
    border-image-repeat: round;     /* 平铺 */
    border-image-repeat: space;     /* 间隔 */
}
```

### 5.3 阴影效果
```css
.shadow-effects {
    /* 1. 盒子阴影 */
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);   /* 基础阴影 */
    box-shadow: 
        0 2px 4px rgba(0,0,0,0.1),           /* 第一层 */
        0 4px 8px rgba(0,0,0,0.1);           /* 第二层 */
    
    /* 2. 内阴影 */
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
    
    /* 3. 文字阴影 */
    text-shadow: 1px 1px 2px rgba(0,0,0,0.2);  /* 基础文字阴影 */
    text-shadow: 
        0 0 2px #fff,                          /* 发光效果 */
        0 0 4px #fff,
        0 0 6px #fff;
        
    /* 4. 阴影参数说明 */
    box-shadow: 2px      /* x偏移 */
                2px      /* y偏移 */
                4px      /* 模糊半径 */
                2px      /* 扩展半径 */
                rgba(0,0,0,0.1); /* 颜色 */
}
```

## 6. 动画与过渡

### 6.1 过渡效果详解
```css
.transition {
    /* 1. 过渡属性 */
    transition-property: all;              /* 所有属性 */
    transition-property: transform, color;  /* 指定属性 */
    
    /* 2. 过渡持续时间 */
    transition-duration: 0.3s;             /* 持续时间 */
    
    /* 3. 过渡延迟 */
    transition-delay: 0.1s;                /* 延迟时间 */
    
    /* 4. 过渡时间函数 */
    transition-timing-function: ease;       /* 缓动 */
    transition-timing-function: linear;     /* 线性 */
    transition-timing-function: ease-in;    /* 渐入 */
    transition-timing-function: ease-out;   /* 渐出 */
    transition-timing-function: ease-in-out;/* 渐入渐出 */
    
    /* 5. 自定义贝塞尔曲线 */
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    
    /* 6. 过渡简写 */
    /* 属性 持续时间 时间函数 延迟 */
    transition: all 0.3s ease 0.1s;
    
    /* 7. 多重过渡 */
    transition: 
        transform 0.3s ease,
        color 0.2s linear;
}
```

### 6.2 动画完整指南
```css
/* 1. 关键帧定义 */
@keyframes slideIn {
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }
    50% {
        transform: translateX(10%);
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

.animation {
    /* 2. 动画名称 */
    animation-name: slideIn;
    
    /* 3. 动画持续时间 */
    animation-duration: 1s;
    
    /* 4. 动画延迟 */
    animation-delay: 0.5s;
    
    /* 5. 动画时间函数 */
    animation-timing-function: ease;
    
    /* 6. 动画重复次数 */
    animation-iteration-count: 1;        /* 播放一次 */
    animation-iteration-count: infinite; /* 无限循环 */
    
    /* 7. 动画方向 */
    animation-direction: normal;         /* 正向播放 */
    animation-direction: reverse;        /* 反向播放 */
    animation-direction: alternate;      /* 交替播放 */
    animation-direction: alternate-reverse; /* 反向交替 */
    
    /* 8. 动画填充模式 */
    animation-fill-mode: none;          /* 不改变默认行为 */
    animation-fill-mode: forwards;      /* 保持最后一帧 */
    animation-fill-mode: backwards;     /* 应用第一帧 */
    animation-fill-mode: both;          /* 同时应用 */
    
    /* 9. 动画运行状态 */
    animation-play-state: running;      /* 运行 */
    animation-play-state: paused;       /* 暂停 */
    
    /* 10. 动画简写 */
    /* 名称 持续时间 时间函数 延迟 重复次数 方向 填充模式 运行状态 */
    animation: slideIn 1s ease 0.5s infinite normal forwards running;
    
    /* 11. 多重动画 */
    animation: 
        slideIn 1s ease,
        fadeIn 2s linear;
}
```
## 7. 变形与滤镜

### 7.1 2D变形
```css
.transform-2d {
    /* 1. 平移 */
    transform: translateX(100px);     /* X轴平移 */
    transform: translateY(100px);     /* Y轴平移 */
    transform: translate(100px, 100px); /* 同时平移 */
    
    /* 2. 旋转 */
    transform: rotate(45deg);         /* 顺时针旋转45度 */
    transform: rotate(-45deg);        /* 逆时针旋转45度 */
    
    /* 3. 缩放 */
    transform: scaleX(2);            /* X轴放大2倍 */
    transform: scaleY(0.5);          /* Y轴缩小一半 */
    transform: scale(2, 0.5);        /* X轴放大2倍,Y轴缩小一半 */
    
    /* 4. 倾斜 */
    transform: skewX(45deg);         /* X轴倾斜45度 */
    transform: skewY(45deg);         /* Y轴倾斜45度 */
    transform: skew(45deg, 45deg);   /* 同时倾斜 */
    
    /* 5. 变形原点 */
    transform-origin: left top;      /* 左上角为原点 */
    transform-origin: center center;  /* 中心点为原点 */
    transform-origin: 100% 100%;     /* 右下角为原点 */
    
    /* 6. 多重变形 */
    transform: rotate(45deg) scale(2) translate(100px, 100px);
}
```

### 7.2 3D变形
```css
.transform-3d {
    /* 1. 3D平移 */
    transform: translateZ(100px);      /* Z轴平移 */
    transform: translate3d(x,y,z);     /* 空间平移 */
    
    /* 2. 3D旋转 */
    transform: rotateX(45deg);         /* 绕X轴旋转 */
    transform: rotateY(45deg);         /* 绕Y轴旋转 */
    transform: rotateZ(45deg);         /* 绕Z轴旋转 */
    transform: rotate3d(1,1,1,45deg);  /* 自定义旋转轴 */
    
    /* 3. 3D缩放 */
    transform: scaleZ(2);              /* Z轴缩放 */
    transform: scale3d(x,y,z);         /* 空间缩放 */
    
    /* 4. 透视距离 */
    perspective: 1000px;               /* 观察距离 */
    perspective-origin: center center;  /* 观察位置 */
    
    /* 5. 3D空间 */
    transform-style: flat;             /* 平面空间 */
    transform-style: preserve-3d;      /* 3D空间 */
    
    /* 6. 背面可见性 */
    backface-visibility: visible;      /* 显示背面 */
    backface-visibility: hidden;       /* 隐藏背面 */
}
```

### 7.3 CSS滤镜效果
```css
.filter-effects {
    /* 1. 模糊效果 */
    filter: blur(5px);                /* 高斯模糊 */
    
    /* 2. 亮度调节 */
    filter: brightness(150%);         /* 提高亮度 */
    filter: brightness(50%);          /* 降低亮度 */
    
    /* 3. 对比度 */
    filter: contrast(200%);           /* 增加对比度 */
    filter: contrast(50%);            /* 降低对比度 */
    
    /* 4. 灰度 */
    filter: grayscale(100%);         /* 完全灰度 */
    filter: grayscale(50%);          /* 部分灰度 */
    
    /* 5. 色相旋转 */
    filter: hue-rotate(90deg);       /* 色相旋转90度 */
    
    /* 6. 反相效果 */
    filter: invert(100%);            /* 完全反相 */
    
    /* 7. 饱和度 */
    filter: saturate(200%);          /* 增加饱和度 */
    filter: saturate(50%);           /* 降低饱和度 */
    
    /* 8. 褐色效果 */
    filter: sepia(100%);             /* 完全褐色 */
    
    /* 9. 透明度 */
    filter: opacity(50%);            /* 设置透明度 */
    
    /* 10. 阴影效果 */
    filter: drop-shadow(2px 2px 2px rgba(0,0,0,0.3));
    
    /* 11. 多重滤镜 */
    filter: contrast(175%) brightness(103%) blur(1px);
}
```

## 8. 响应式布局

### 8.1 媒体查询
```css
/* 1. 基础语法 */
@media screen and (max-width: 768px) {
    /* 平板样式 */
    .container {
        width: 750px;
    }
}

@media screen and (max-width: 480px) {
    /* 手机样式 */
    .container {
        width: 100%;
    }
}

/* 2. 设备方向 */
@media (orientation: portrait) {
    /* 竖屏样式 */
}

@media (orientation: landscape) {
    /* 横屏样式 */
}

/* 3. 设备类型 */
@media screen { /* 屏幕设备 */ }
@media print { /* 打印设备 */ }
@media speech { /* 语音设备 */ }

/* 4. 逻辑运算符 */
@media screen and (min-width: 768px) and (max-width: 1024px) {
    /* 同时满足条件 */
}

@media screen and (max-width: 768px), print {
    /* 满足任一条件 */
}

/* 5. 特性查询 */
@media (hover: hover) {
    /* 支持悬停效果的设备 */
}

@media (prefers-color-scheme: dark) {
    /* 暗色主题 */
}
```

### 8.2 弹性单位
```css
.flexible-units {
    /* 1. 相对字体大小 */
    font-size: 1em;      /* 相对父元素 */
    font-size: 1rem;     /* 相对根元素 */
    font-size: 1vw;      /* 视窗宽度的1% */
    font-size: 1vh;      /* 视窗高度的1% */
    font-size: 1vmin;    /* vw和vh中的较小值 */
    font-size: 1vmax;    /* vw和vh中的较大值 */
    
    /* 2. 相对尺寸 */
    width: 50%;          /* 父元素宽度的50% */
    width: 50vw;         /* 视窗宽度的50% */
    height: 50vh;        /* 视窗高度的50% */
    
    /* 3. calc()计算 */
    width: calc(100% - 20px);  /* 父元素宽度减20px */
    margin: calc(1rem + 2px);  /* 混合单位计算 */
    
    /* 4. clamp()范围限制 */
    font-size: clamp(1rem, 2.5vw, 2rem); /* 最小值、首选值、最大值 */
    
    /* 5. min()和max() */
    width: min(1000px, 100%);  /* 取较小值 */
    width: max(500px, 50%);    /* 取较大值 */
}
```
## 9. 高级特性

### 9.1 Grid网格布局
```css
.grid-container {
    /* 1. 网格容器 */
    display: grid;                    /* 块级网格 */
    display: inline-grid;            /* 内联网格 */
    
    /* 2. 定义列和行 */
    grid-template-columns: 100px 1fr auto;  /* 列宽定义 */
    grid-template-rows: 50px 1fr;           /* 行高定义 */
    
    /* 3. 网格间距 */
    gap: 20px;                       /* 行列间距相等 */
    row-gap: 20px;                   /* 行间距 */
    column-gap: 20px;                /* 列间距 */
    
    /* 4. 区域命名 */
    grid-template-areas: 
        "header header"
        "sidebar content"
        "footer footer";
    
    /* 5. 自动网格 */
    grid-auto-columns: 100px;        /* 自动列宽 */
    grid-auto-rows: minmax(100px, auto); /* 自动行高 */
    grid-auto-flow: row | column | dense; /* 自动放置方式 */
    
    /* 6. 对齐方式 */
    justify-items: start | end | center | stretch;  /* 水平对齐 */
    align-items: start | end | center | stretch;    /* 垂直对齐 */
    place-items: center center;                     /* 简写形式 */
    
    /* 7. 整体内容对齐 */
    justify-content: start | end | center | space-between | space-around;
    align-content: start | end | center | space-between | space-around;
}

.grid-item {
    /* 1. 指定位置 */
    grid-column: 1 / 3;              /* 列位置 */
    grid-row: 1 / 3;                 /* 行位置 */
    
    /* 2. 区域指定 */
    grid-area: header;               /* 指定到具名区域 */
    
    /* 3. 单个项目对齐 */
    justify-self: start | end | center | stretch;
    align-self: start | end | center | stretch;
}
```

### 9.2 混合模式与遮罩
```css
.blend-mask {
    /* 1. 混合模式 */
    mix-blend-mode: normal;          /* 正常 */
    mix-blend-mode: multiply;        /* 正片叠底 */
    mix-blend-mode: screen;          /* 滤色 */
    mix-blend-mode: overlay;         /* 叠加 */
    mix-blend-mode: darken;          /* 变暗 */
    mix-blend-mode: lighten;         /* 变亮 */
    mix-blend-mode: color-dodge;     /* 颜色减淡 */
    mix-blend-mode: color-burn;      /* 颜色加深 */
    mix-blend-mode: difference;      /* 差值 */
    mix-blend-mode: exclusion;       /* 排除 */
    
    /* 2. 背景混合模式 */
    background-blend-mode: normal | multiply | screen | overlay;
    
    /* 3. 遮罩 */
    mask-image: url(mask.png);       /* 遮罩图片 */
    mask-repeat: no-repeat;          /* 遮罩重复 */
    mask-position: center;           /* 遮罩位置 */
    mask-size: cover;                /* 遮罩大小 */
    
    /* 4. 裁切路径 */
    clip-path: circle(50% at 50% 50%);  /* 圆形裁切 */
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);  /* 多边形裁切 */
}
```

### 9.3 自定义属性(CSS变量)
```css
:root {
    /* 1. 定义全局变量 */
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --spacing-unit: 8px;
    --max-width: 1200px;
}

.component {
    /* 2. 使用变量 */
    color: var(--primary-color);
    margin: var(--spacing-unit);
    
    /* 3. 带默认值的变量 */
    padding: var(--custom-padding, 20px);
    
    /* 4. 局部变量 */
    --local-color: #ff0000;
    background: var(--local-color);
    
    /* 5. 计算值 */
    width: calc(var(--spacing-unit) * 4);
    
    /* 6. 媒体查询中修改变量 */
    @media (max-width: 768px) {
        --spacing-unit: 4px;
    }
}
```

### 9.4 性能优化
```css
.performance {
    /* 1. 硬件加速 */
    transform: translateZ(0);         /* 开启GPU加速 */
    will-change: transform;          /* 提示浏览器即将改变 */
    
    /* 2. 包含块优化 */
    contain: layout;                 /* 布局包含 */
    contain: paint;                  /* 绘制包含 */
    contain: strict;                 /* 严格包含 */
    
    /* 3. 动画性能 */
    transition: transform 0.3s;       /* 使用transform替代位置属性 */
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1); /* 平滑动画 */
    
    /* 4. 选择器优化 */
    .good-selector { }               /* 避免过度嵌套 */
    [data-component] { }             /* 使用属性选择器 */
    
    /* 5. 关键渲染路径 */
    content-visibility: auto;        /* 延迟渲染 */
    content-visibility: hidden;      /* 跳过渲染 */
}
```

## 10. 浏览器兼容性

### 10.1 前缀处理
```css
.vendor-prefixes {
    /* 1. 变形 */
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
    
    /* 2. 动画 */
    @-webkit-keyframes slide {
        from { left: 0; }
        to { left: 100px; }
    }
    
    /* 3. 渐变 */
    background: -webkit-linear-gradient(left, #fff, #000);
    background: -moz-linear-gradient(left, #fff, #000);
    background: linear-gradient(to right, #fff, #000);
    
    /* 4. 弹性布局 */
    display: -webkit-flex;
    display: -moz-flex;
    display: flex;
}
```
### 10.2 特性检测
```css
/* 1. @supports 规则 */
@supports (display: grid) {
    /* 支持网格布局的样式 */
    .container {
        display: grid;
    }
}

@supports not (display: grid) {
    /* 不支持网格布局的备选样式 */
    .container {
        display: flex;
    }
}

/* 2. 多重特性检测 */
@supports (display: grid) and (grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))) {
    /* 支持高级网格特性的样式 */
}

/* 3. 或运算 */
@supports (display: -webkit-box) or (display: -ms-flexbox) or (display: flex) {
    /* 支持任一种弹性布局的样式 */
}
```

### 10.3 降级处理
```css
.fallback {
    /* 1. 渐进增强 */
    /* 老版本浏览器使用 */
    background: #f00;
    /* 新版本浏览器使用 */
    background: linear-gradient(to right, #f00, #00f);
    
    /* 2. 特性回退 */
    /* 不支持calc的浏览器使用固定值 */
    width: 90%;
    /* 支持calc的浏览器使用计算值 */
    width: calc(100% - 20px);
    
    /* 3. 布局回退 */
    /* 传统布局 */
    float: left;
    width: 33.33%;
    /* 现代布局 */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
```

## 11. 高级应用

### 11.1 打印样式
```css
@media print {
    /* 1. 基础打印设置 */
    body {
        margin: 0;
        padding: 2cm;
        font-size: 12pt;
    }
    
    /* 2. 隐藏不必要元素 */
    nav, footer, button, .no-print {
        display: none !important;
    }
    
    /* 3. 链接处理 */
    a[href]:after {
        content: " (" attr(href) ")";  /* 显示链接URL */
    }
    
    /* 4. 分页控制 */
    h1, h2, h3 {
        page-break-after: avoid;  /* 标题后不分页 */
    }
    
    table, figure {
        page-break-inside: avoid; /* 表格和图片内不分页 */
    }
}
```

### 11.2 CSS Houdini
```css
/* 1. Paint API */
.paint-api {
    /* 注册自定义绘制 */
    background-image: paint(myPaint);
}

/* 2. Layout API */
.layout-api {
    display: layout(masonry);
}

/* 3. Properties and Values API */
@property --gradient-angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
}

/* 4. Typed OM */
.typed-om {
    --number: 42;
    --length: 100px;
    --color: rgb(255, 0, 0);
}
```

### 11.3 CSS工作流
```css
/* 1. CSS模块化 */
.module {
    /* BEM命名规范 */
    .module__element {
        /* 元素 */
    }
    
    .module--modifier {
        /* 修饰符 */
    }
}

/* 2. CSS预处理器变量 */
$primary-color: #007bff;
$spacing: 8px;

.element {
    color: $primary-color;
    margin: $spacing * 2;
}

/* 3. CSS后处理器 */
.autoprefixer {
    display: flex;  /* 自动添加前缀 */
    user-select: none;
}

/* 4. CSS组织结构 */
/* Base */
@import 'base/reset';
@import 'base/typography';

/* Components */
@import 'components/buttons';
@import 'components/forms';

/* Layout */
@import 'layout/header';
@import 'layout/footer';
```

### 11.4 性能监控
```css
/* 1. 性能标记 */
.performance-marks {
    /* 强制创建层 */
    transform: translateZ(0);
    
    /* 监控重绘 */
    outline: 1px solid transparent;
    
    /* 减少重排 */
    position: absolute;
    top: 0;
    left: 0;
    
    /* 优化动画 */
    transition: transform 0.3s;
    will-change: transform;
}

/* 2. 调试辅助 */
.debug {
    /* 显示布局边界 */
    * { outline: 1px solid rgba(255,0,0,0.2); }
    
    /* 显示网格线 */
    background: linear-gradient(to right, transparent 9px, rgba(0,0,0,0.1) 10px);
    background-size: 10px 10px;
}
```

