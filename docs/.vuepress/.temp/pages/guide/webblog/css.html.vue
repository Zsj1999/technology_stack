<template><div><h1 id="css3-完整参考手册" tabindex="-1"><a class="header-anchor" href="#css3-完整参考手册"><span>CSS3 完整参考手册</span></a></h1>
<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2>
<p>CSS3 是现代 Web 开发的核心技术之一,提供了强大的样式和布局功能。本手册将系统地介绍 CSS3 的所有重要属性和用法。</p>
<h2 id="_1-css3-基础概念" tabindex="-1"><a class="header-anchor" href="#_1-css3-基础概念"><span>1. CSS3 基础概念</span></a></h2>
<h3 id="_1-1-css3-模块化" tabindex="-1"><a class="header-anchor" href="#_1-1-css3-模块化"><span>1.1 CSS3 模块化</span></a></h3>
<p>CSS3 采用模块化方式,主要包含:</p>
<ul>
<li>选择器模块</li>
<li>盒模型模块</li>
<li>背景和边框模块</li>
<li>文字特效模块</li>
<li>2D/3D 转换模块</li>
<li>动画模块</li>
<li>多列布局模块</li>
<li>用户界面模块</li>
</ul>
<h3 id="_1-2-语法规则" tabindex="-1"><a class="header-anchor" href="#_1-2-语法规则"><span>1.2 语法规则</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">选择器</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">属性1</span><span class="token punctuation">:</span> 值1<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">属性2</span><span class="token punctuation">:</span> 值2<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-选择器详解" tabindex="-1"><a class="header-anchor" href="#_2-选择器详解"><span>2. 选择器详解</span></a></h2>
<h3 id="_2-1-基础选择器" tabindex="-1"><a class="header-anchor" href="#_2-1-基础选择器"><span>2.1 基础选择器</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/* 1. 元素选择器 */</span></span>
<span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>  <span class="token comment">/* 选择所有 div 元素 */</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 2. 类选择器 */</span></span>
<span class="line"><span class="token selector">.className</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>  <span class="token comment">/* 选择所有 class="className" 的元素 */</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 3. ID 选择器 */</span></span>
<span class="line"><span class="token selector">#idName</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>  <span class="token comment">/* 选择 id="idName" 的元素 */</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 4. 通用选择器 */</span></span>
<span class="line"><span class="token selector">*</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>  <span class="token comment">/* 选择所有元素 */</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 5. 属性选择器 */</span></span>
<span class="line"><span class="token selector">[title]</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>  <span class="token comment">/* 选择带有 title 属性的元素 */</span></span>
<span class="line"><span class="token selector">[title="value"]</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>  <span class="token comment">/* 选择 title="value" 的元素 */</span></span>
<span class="line"><span class="token selector">[title^="value"]</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>  <span class="token comment">/* 选择 title 以 "value" 开头的元素 */</span></span>
<span class="line"><span class="token selector">[title$="value"]</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>  <span class="token comment">/* 选择 title 以 "value" 结尾的元素 */</span></span>
<span class="line"><span class="token selector">[title*="value"]</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>  <span class="token comment">/* 选择 title 包含 "value" 的元素 */</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-组合选择器" tabindex="-1"><a class="header-anchor" href="#_2-2-组合选择器"><span>2.2 组合选择器</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/* 1. 后代选择器 */</span></span>
<span class="line"><span class="token selector">div span</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>  <span class="token comment">/* 选择 div 内的所有 span 元素 */</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 2. 子元素选择器 */</span></span>
<span class="line"><span class="token selector">div > span</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>  <span class="token comment">/* 只选择 div 的直接子元素 span */</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 3. 相邻兄弟选择器 */</span></span>
<span class="line"><span class="token selector">div + p</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>  <span class="token comment">/* 选择紧接在 div 后的第一个 p 元素 */</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 4. 通用兄弟选择器 */</span></span>
<span class="line"><span class="token selector">div ~ p</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>  <span class="token comment">/* 选择 div 后的所有 p 元素 */</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-伪类选择器" tabindex="-1"><a class="header-anchor" href="#_2-3-伪类选择器"><span>2.3 伪类选择器</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/* 1. 链接伪类 */</span></span>
<span class="line"><span class="token selector">a:link</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>      <span class="token comment">/* 未访问的链接 */</span></span>
<span class="line"><span class="token selector">a:visited</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>   <span class="token comment">/* 已访问的链接 */</span></span>
<span class="line"><span class="token selector">a:hover</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>     <span class="token comment">/* 鼠标悬停 */</span></span>
<span class="line"><span class="token selector">a:active</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>    <span class="token comment">/* 激活状态 */</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 2. 结构性伪类 */</span></span>
<span class="line"><span class="token selector">:first-child</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>    <span class="token comment">/* 第一个子元素 */</span></span>
<span class="line"><span class="token selector">:last-child</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>     <span class="token comment">/* 最后一个子元素 */</span></span>
<span class="line"><span class="token selector">:nth-child(n)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>   <span class="token comment">/* 第 n 个子元素 */</span></span>
<span class="line"><span class="token selector">:nth-of-type(n)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span> <span class="token comment">/* 同类型中第 n 个元素 */</span></span>
<span class="line"><span class="token selector">:empty</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>          <span class="token comment">/* 没有子元素的元素 */</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 3. 表单相关伪类 */</span></span>
<span class="line"><span class="token selector">:checked</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>     <span class="token comment">/* 被选中的表单元素 */</span></span>
<span class="line"><span class="token selector">:disabled</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>    <span class="token comment">/* 禁用的表单元素 */</span></span>
<span class="line"><span class="token selector">:required</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>    <span class="token comment">/* 必填的表单元素 */</span></span>
<span class="line"><span class="token selector">:optional</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>    <span class="token comment">/* 可选的表单元素 */</span></span>
<span class="line"><span class="token selector">:valid</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>       <span class="token comment">/* 验证通过的表单元素 */</span></span>
<span class="line"><span class="token selector">:invalid</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>     <span class="token comment">/* 验证失败的表单元素 */</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代码规范" tabindex="-1"><a class="header-anchor" href="#代码规范"><span>代码规范</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/* 1. 命名规范 */</span></span>
<span class="line"><span class="token comment">/* 类名使用小写字母，多个单词用连字符连接 */</span></span>
<span class="line"><span class="token selector">.button</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* ... */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 2. 代码格式 */</span></span>
<span class="line"><span class="token comment">/* 每行代码不超过80个字符 */</span></span>
<span class="line"><span class="token selector">.button</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">padding</span><span class="token punctuation">:</span> 8px 16px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #007bff<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">background-color</span><span class="token punctuation">:</span> #007bff<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 3. 代码注释 */</span></span>
<span class="line"><span class="token comment">/* 单行注释 */</span></span>
<span class="line"><span class="token comment">/* 多行注释 */</span></span>
<span class="line"><span class="token comment">/* 块注释 */</span></span>
<span class="line"><span class="token comment">/* 文档注释 */</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-盒模型与布局" tabindex="-1"><a class="header-anchor" href="#_3-盒模型与布局"><span>3. 盒模型与布局</span></a></h2>
<h3 id="_3-1-盒模型详解" tabindex="-1"><a class="header-anchor" href="#_3-1-盒模型详解"><span>3.1 盒模型详解</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">.box</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 1. 内容区域 */</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 2. 内边距 */</span></span>
<span class="line">    <span class="token property">padding-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">padding-right</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">padding-left</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">/* 简写 */</span></span>
<span class="line">    <span class="token property">padding</span><span class="token punctuation">:</span> 10px 20px<span class="token punctuation">;</span>  <span class="token comment">/* 上下 左右 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 3. 边框 */</span></span>
<span class="line">    <span class="token property">border-width</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">border-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">border-color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">/* 简写 */</span></span>
<span class="line">    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 4. 外边距 */</span></span>
<span class="line">    <span class="token property">margin</span><span class="token punctuation">:</span> 10px 20px 10px 20px<span class="token punctuation">;</span>  <span class="token comment">/* 上 右 下 左 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 5. 盒模型计算方式 */</span></span>
<span class="line">    <span class="token property">box-sizing</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span>  <span class="token comment">/* 标准盒模型 */</span></span>
<span class="line">    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>   <span class="token comment">/* IE 盒模型 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-flexbox-布局完整指南" tabindex="-1"><a class="header-anchor" href="#_3-2-flexbox-布局完整指南"><span>3.2 Flexbox 布局完整指南</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">.flex-container</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>  <span class="token comment">/* 或 inline-flex */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 1. 主轴方向 */</span></span>
<span class="line">    <span class="token property">flex-direction</span><span class="token punctuation">:</span> row | row-reverse | column | column-reverse<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 2. 是否换行 */</span></span>
<span class="line">    <span class="token property">flex-wrap</span><span class="token punctuation">:</span> nowrap | wrap | wrap-reverse<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 3. 主轴对齐 */</span></span>
<span class="line">    <span class="token property">justify-content</span><span class="token punctuation">:</span> flex-start | flex-end | center | space-between | space-around | space-evenly<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 4. 交叉轴对齐 */</span></span>
<span class="line">    <span class="token property">align-items</span><span class="token punctuation">:</span> stretch | flex-start | flex-end | center | baseline<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 5. 多行对齐 */</span></span>
<span class="line">    <span class="token property">align-content</span><span class="token punctuation">:</span> flex-start | flex-end | center | space-between | space-around | stretch<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.flex-item</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 1. 增长系数 */</span></span>
<span class="line">    <span class="token property">flex-grow</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>  <span class="token comment">/* 默认值 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 2. 收缩系数 */</span></span>
<span class="line">    <span class="token property">flex-shrink</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>  <span class="token comment">/* 默认值 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 3. 基准值 */</span></span>
<span class="line">    <span class="token property">flex-basis</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>  <span class="token comment">/* 默认值 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 简写 */</span></span>
<span class="line">    <span class="token property">flex</span><span class="token punctuation">:</span> 0 1 auto<span class="token punctuation">;</span>  <span class="token comment">/* grow shrink basis */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 4. 单个项目对齐 */</span></span>
<span class="line">    <span class="token property">align-self</span><span class="token punctuation">:</span> auto | flex-start | flex-end | center | baseline | stretch<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 5. 排序 */</span></span>
<span class="line">    <span class="token property">order</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>  <span class="token comment">/* 默认值 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-grid-布局完整指南" tabindex="-1"><a class="header-anchor" href="#_3-3-grid-布局完整指南"><span>3.3 Grid 布局完整指南</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">.grid-container</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 1. 定义列 */</span></span>
<span class="line">    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 100px 1fr 2fr<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">minmax</span><span class="token punctuation">(</span>100px<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 2. 定义行 */</span></span>
<span class="line">    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 100px auto<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 3. 间距 */</span></span>
<span class="line">    <span class="token property">gap</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>  <span class="token comment">/* 行列间距相同 */</span></span>
<span class="line">    <span class="token property">row-gap</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">column-gap</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 4. 区域命名 */</span></span>
<span class="line">    <span class="token property">grid-template-areas</span><span class="token punctuation">:</span> </span>
<span class="line">        <span class="token string">"header header"</span></span>
<span class="line">        <span class="token string">"sidebar content"</span></span>
<span class="line">        <span class="token string">"footer footer"</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">    <span class="token comment">/* 5. 对齐方式 */</span></span>
<span class="line">    <span class="token property">justify-items</span><span class="token punctuation">:</span> start | end | center | stretch<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">align-items</span><span class="token punctuation">:</span> start | end | center | stretch<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">place-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>  <span class="token comment">/* 简写 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.grid-item</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 1. 指定位置 */</span></span>
<span class="line">    <span class="token property">grid-column</span><span class="token punctuation">:</span> 1 / 3<span class="token punctuation">;</span>  <span class="token comment">/* 从第1列线到第3列线 */</span></span>
<span class="line">    <span class="token property">grid-row</span><span class="token punctuation">:</span> 1 / 2<span class="token punctuation">;</span>     <span class="token comment">/* 从第1行线到第2行线 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 2. 区域指定 */</span></span>
<span class="line">    <span class="token property">grid-area</span><span class="token punctuation">:</span> header<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 3. 单个项目对齐 */</span></span>
<span class="line">    <span class="token property">justify-self</span><span class="token punctuation">:</span> start | end | center | stretch<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">align-self</span><span class="token punctuation">:</span> start | end | center | stretch<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-文本与字体" tabindex="-1"><a class="header-anchor" href="#_4-文本与字体"><span>4. 文本与字体</span></a></h2>
<h3 id="_4-1-文本属性完整列表" tabindex="-1"><a class="header-anchor" href="#_4-1-文本属性完整列表"><span>4.1 文本属性完整列表</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">.text-style</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 1. 文本颜色 */</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>                    <span class="token comment">/* 设置文字颜色 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 2. 文本对齐 */</span></span>
<span class="line">    <span class="token property">text-align</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>              <span class="token comment">/* 左对齐 */</span></span>
<span class="line">    <span class="token property">text-align</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>             <span class="token comment">/* 右对齐 */</span></span>
<span class="line">    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>            <span class="token comment">/* 居中对齐 */</span></span>
<span class="line">    <span class="token property">text-align</span><span class="token punctuation">:</span> justify<span class="token punctuation">;</span>           <span class="token comment">/* 两端对齐 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 3. 文本装饰 */</span></span>
<span class="line">    <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>         <span class="token comment">/* 无装饰 */</span></span>
<span class="line">    <span class="token property">text-decoration</span><span class="token punctuation">:</span> underline<span class="token punctuation">;</span>    <span class="token comment">/* 下划线 */</span></span>
<span class="line">    <span class="token property">text-decoration</span><span class="token punctuation">:</span> overline<span class="token punctuation">;</span>     <span class="token comment">/* 上划线 */</span></span>
<span class="line">    <span class="token property">text-decoration</span><span class="token punctuation">:</span> line-through<span class="token punctuation">;</span> <span class="token comment">/* 删除线 */</span></span>
<span class="line">    <span class="token property">text-decoration-color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>   <span class="token comment">/* 装饰线颜色 */</span></span>
<span class="line">    <span class="token property">text-decoration-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>  <span class="token comment">/* 实线 */</span></span>
<span class="line">    <span class="token property">text-decoration-style</span><span class="token punctuation">:</span> dashed<span class="token punctuation">;</span> <span class="token comment">/* 虚线 */</span></span>
<span class="line">    <span class="token property">text-decoration-style</span><span class="token punctuation">:</span> dotted<span class="token punctuation">;</span> <span class="token comment">/* 点线 */</span></span>
<span class="line">    <span class="token property">text-decoration-style</span><span class="token punctuation">:</span> double<span class="token punctuation">;</span> <span class="token comment">/* 双线 */</span></span>
<span class="line">    <span class="token property">text-decoration-style</span><span class="token punctuation">:</span> wavy<span class="token punctuation">;</span>   <span class="token comment">/* 波浪线 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 4. 文本缩进 */</span></span>
<span class="line">    <span class="token property">text-indent</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>             <span class="token comment">/* 首行缩进2个字符 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 5. 文本转换 */</span></span>
<span class="line">    <span class="token property">text-transform</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>         <span class="token comment">/* 无转换 */</span></span>
<span class="line">    <span class="token property">text-transform</span><span class="token punctuation">:</span> capitalize<span class="token punctuation">;</span>   <span class="token comment">/* 首字母大写 */</span></span>
<span class="line">    <span class="token property">text-transform</span><span class="token punctuation">:</span> uppercase<span class="token punctuation">;</span>    <span class="token comment">/* 全部大写 */</span></span>
<span class="line">    <span class="token property">text-transform</span><span class="token punctuation">:</span> lowercase<span class="token punctuation">;</span>    <span class="token comment">/* 全部小写 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 6. 字母间距 */</span></span>
<span class="line">    <span class="token property">letter-spacing</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>         <span class="token comment">/* 字母间距 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 7. 单词间距 */</span></span>
<span class="line">    <span class="token property">word-spacing</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>          <span class="token comment">/* 单词间距 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 8. 行高 */</span></span>
<span class="line">    <span class="token property">line-height</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">;</span>          <span class="token comment">/* 1.5倍行高 */</span></span>
<span class="line">    <span class="token property">line-height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>         <span class="token comment">/* 固定行高 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 9. 文本阴影 */</span></span>
<span class="line">    <span class="token property">text-shadow</span><span class="token punctuation">:</span> 2px 2px 2px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0.3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* 水平偏移 垂直偏移 模糊半径 颜色 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 10. 文本溢出处理 */</span></span>
<span class="line">    <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>       <span class="token comment">/* 不换行 */</span></span>
<span class="line">    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>          <span class="token comment">/* 溢出隐藏 */</span></span>
<span class="line">    <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>   <span class="token comment">/* 显示省略号 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-字体属性详解" tabindex="-1"><a class="header-anchor" href="#_4-2-字体属性详解"><span>4.2 字体属性详解</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">.font-style</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 1. 字体族 */</span></span>
<span class="line">    <span class="token property">font-family</span><span class="token punctuation">:</span> Arial<span class="token punctuation">,</span> <span class="token string">"Microsoft YaHei"</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>  <span class="token comment">/* 依次尝试使用字体 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 2. 字体大小 */</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>           <span class="token comment">/* 像素大小 */</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> 1.2em<span class="token punctuation">;</span>          <span class="token comment">/* 相对父元素 */</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> 1.2rem<span class="token punctuation">;</span>         <span class="token comment">/* 相对根元素 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 3. 字体粗细 */</span></span>
<span class="line">    <span class="token property">font-weight</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>       <span class="token comment">/* 正常粗细 */</span></span>
<span class="line">    <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>         <span class="token comment">/* 粗体 */</span></span>
<span class="line">    <span class="token property">font-weight</span><span class="token punctuation">:</span> 100<span class="token punctuation">;</span>          <span class="token comment">/* 最细 */</span></span>
<span class="line">    <span class="token property">font-weight</span><span class="token punctuation">:</span> 900<span class="token punctuation">;</span>          <span class="token comment">/* 最粗 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 4. 字体样式 */</span></span>
<span class="line">    <span class="token property">font-style</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>        <span class="token comment">/* 正常样式 */</span></span>
<span class="line">    <span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span>        <span class="token comment">/* 斜体 */</span></span>
<span class="line">    <span class="token property">font-style</span><span class="token punctuation">:</span> oblique<span class="token punctuation">;</span>       <span class="token comment">/* 倾斜体 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 5. 字体变体 */</span></span>
<span class="line">    <span class="token property">font-variant</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>      <span class="token comment">/* 正常变体 */</span></span>
<span class="line">    <span class="token property">font-variant</span><span class="token punctuation">:</span> small-caps<span class="token punctuation">;</span>  <span class="token comment">/* 小型大写字母 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 6. 字体显示策略 */</span></span>
<span class="line">    <span class="token property">font-display</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>        <span class="token comment">/* 自动 */</span></span>
<span class="line">    <span class="token property">font-display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>       <span class="token comment">/* 阻塞显示 */</span></span>
<span class="line">    <span class="token property">font-display</span><span class="token punctuation">:</span> swap<span class="token punctuation">;</span>        <span class="token comment">/* 立即替换 */</span></span>
<span class="line">    <span class="token property">font-display</span><span class="token punctuation">:</span> fallback<span class="token punctuation">;</span>    <span class="token comment">/* 短暂替换 */</span></span>
<span class="line">    <span class="token property">font-display</span><span class="token punctuation">:</span> optional<span class="token punctuation">;</span>    <span class="token comment">/* 可选替换 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 7. 字体简写 */</span></span>
<span class="line">    <span class="token comment">/* 顺序: font-style font-variant font-weight font-size/line-height font-family */</span></span>
<span class="line">    <span class="token property">font</span><span class="token punctuation">:</span> italic small-caps bold 16px/1.5 Arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-文本排版高级技巧" tabindex="-1"><a class="header-anchor" href="#_4-3-文本排版高级技巧"><span>4.3 文本排版高级技巧</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">.text-advanced</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 1. 多行文本溢出 */</span></span>
<span class="line">    <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>     <span class="token comment">/* 显示行数 */</span></span>
<span class="line">    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 2. 文本换行处理 */</span></span>
<span class="line">    <span class="token property">word-wrap</span><span class="token punctuation">:</span> break-word<span class="token punctuation">;</span>     <span class="token comment">/* 长单词换行 */</span></span>
<span class="line">    <span class="token property">word-break</span><span class="token punctuation">:</span> break-all<span class="token punctuation">;</span>     <span class="token comment">/* 任意位置换行 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 3. 文本选中样式 */</span></span>
<span class="line">    <span class="token selector">::selection</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">background</span><span class="token punctuation">:</span> #b3d4fc<span class="token punctuation">;</span>   <span class="token comment">/* 选中背景色 */</span></span>
<span class="line">        <span class="token property">color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>           <span class="token comment">/* 选中文字颜色 */</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 4. 首字下沉 */</span></span>
<span class="line">    <span class="token selector">p:first-letter</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">font-size</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">padding</span><span class="token punctuation">:</span> 0 .2em<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 5. 首行特殊样式 */</span></span>
<span class="line">    <span class="token selector">p:first-line</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">font-variant</span><span class="token punctuation">:</span> small-caps<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-视觉效果" tabindex="-1"><a class="header-anchor" href="#_5-视觉效果"><span>5. 视觉效果</span></a></h2>
<h3 id="_5-1-背景属性全解" tabindex="-1"><a class="header-anchor" href="#_5-1-背景属性全解"><span>5.1 背景属性全解</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">.background</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 1. 背景颜色 */</span></span>
<span class="line">    <span class="token property">background-color</span><span class="token punctuation">:</span> #f0f0f0<span class="token punctuation">;</span>                <span class="token comment">/* 纯色背景 */</span></span>
<span class="line">    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">/* 半透明背景 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 2. 背景图片 */</span></span>
<span class="line">    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'image.jpg'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>       <span class="token comment">/* 图片背景 */</span></span>
<span class="line">    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>45deg<span class="token punctuation">,</span> #f00<span class="token punctuation">,</span> #00f<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">/* 渐变背景 */</span></span>
<span class="line">    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>circle<span class="token punctuation">,</span> #f00<span class="token punctuation">,</span> #00f<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* 径向渐变 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 3. 背景重复 */</span></span>
<span class="line">    <span class="token property">background-repeat</span><span class="token punctuation">:</span> repeat<span class="token punctuation">;</span>      <span class="token comment">/* 双向重复 */</span></span>
<span class="line">    <span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>   <span class="token comment">/* 不重复 */</span></span>
<span class="line">    <span class="token property">background-repeat</span><span class="token punctuation">:</span> repeat-x<span class="token punctuation">;</span>    <span class="token comment">/* 水平重复 */</span></span>
<span class="line">    <span class="token property">background-repeat</span><span class="token punctuation">:</span> repeat-y<span class="token punctuation">;</span>    <span class="token comment">/* 垂直重复 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 4. 背景位置 */</span></span>
<span class="line">    <span class="token property">background-position</span><span class="token punctuation">:</span> center center<span class="token punctuation">;</span>  <span class="token comment">/* 居中 */</span></span>
<span class="line">    <span class="token property">background-position</span><span class="token punctuation">:</span> 50% 50%<span class="token punctuation">;</span>        <span class="token comment">/* 百分比 */</span></span>
<span class="line">    <span class="token property">background-position</span><span class="token punctuation">:</span> 20px 20px<span class="token punctuation">;</span>      <span class="token comment">/* 具体位置 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 5. 背景尺寸 */</span></span>
<span class="line">    <span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>        <span class="token comment">/* 覆盖容器 */</span></span>
<span class="line">    <span class="token property">background-size</span><span class="token punctuation">:</span> contain<span class="token punctuation">;</span>      <span class="token comment">/* 完整显示 */</span></span>
<span class="line">    <span class="token property">background-size</span><span class="token punctuation">:</span> 100% 100%<span class="token punctuation">;</span>    <span class="token comment">/* 拉伸填充 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 6. 背景固定 */</span></span>
<span class="line">    <span class="token property">background-attachment</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span>  <span class="token comment">/* 随页面滚动 */</span></span>
<span class="line">    <span class="token property">background-attachment</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>   <span class="token comment">/* 固定不动 */</span></span>
<span class="line">    <span class="token property">background-attachment</span><span class="token punctuation">:</span> local<span class="token punctuation">;</span>   <span class="token comment">/* 随元素滚动 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 7. 背景裁剪和定位区域 */</span></span>
<span class="line">    <span class="token property">background-clip</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>    <span class="token comment">/* 延伸到边框 */</span></span>
<span class="line">    <span class="token property">background-clip</span><span class="token punctuation">:</span> padding-box<span class="token punctuation">;</span>   <span class="token comment">/* 延伸到内边距 */</span></span>
<span class="line">    <span class="token property">background-clip</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span>   <span class="token comment">/* 仅内容区域 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 8. 多重背景 */</span></span>
<span class="line">    <span class="token property">background</span><span class="token punctuation">:</span> </span>
<span class="line">        <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'top.png'</span><span class="token punctuation">)</span></span> no-repeat top<span class="token punctuation">,</span></span>
<span class="line">        <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'bottom.png'</span><span class="token punctuation">)</span></span> no-repeat bottom<span class="token punctuation">,</span></span>
<span class="line">        #f0f0f0<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-边框与圆角" tabindex="-1"><a class="header-anchor" href="#_5-2-边框与圆角"><span>5.2 边框与圆角</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">.border-style</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 1. 边框基础 */</span></span>
<span class="line">    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>        <span class="token comment">/* 简写属性 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 2. 边框宽度 */</span></span>
<span class="line">    <span class="token property">border-width</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>             <span class="token comment">/* 统一宽度 */</span></span>
<span class="line">    <span class="token property">border-top-width</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>         <span class="token comment">/* 单边宽度 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 3. 边框样式 */</span></span>
<span class="line">    <span class="token property">border-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>           <span class="token comment">/* 实线 */</span></span>
<span class="line">    <span class="token property">border-style</span><span class="token punctuation">:</span> dashed<span class="token punctuation">;</span>          <span class="token comment">/* 虚线 */</span></span>
<span class="line">    <span class="token property">border-style</span><span class="token punctuation">:</span> dotted<span class="token punctuation">;</span>          <span class="token comment">/* 点线 */</span></span>
<span class="line">    <span class="token property">border-style</span><span class="token punctuation">:</span> double<span class="token punctuation">;</span>          <span class="token comment">/* 双线 */</span></span>
<span class="line">    <span class="token property">border-style</span><span class="token punctuation">:</span> groove<span class="token punctuation">;</span>          <span class="token comment">/* 凹槽 */</span></span>
<span class="line">    <span class="token property">border-style</span><span class="token punctuation">:</span> ridge<span class="token punctuation">;</span>           <span class="token comment">/* 凸槽 */</span></span>
<span class="line">    <span class="token property">border-style</span><span class="token punctuation">:</span> inset<span class="token punctuation">;</span>           <span class="token comment">/* 内陷 */</span></span>
<span class="line">    <span class="token property">border-style</span><span class="token punctuation">:</span> outset<span class="token punctuation">;</span>          <span class="token comment">/* 外凸 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 4. 圆角 */</span></span>
<span class="line">    <span class="token property">border-radius</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>            <span class="token comment">/* 统一圆角 */</span></span>
<span class="line">    <span class="token property">border-radius</span><span class="token punctuation">:</span> 8px 4px<span class="token punctuation">;</span>        <span class="token comment">/* 对角圆角 */</span></span>
<span class="line">    <span class="token property">border-radius</span><span class="token punctuation">:</span> 8px 4px 2px 1px<span class="token punctuation">;</span><span class="token comment">/* 分别指定 */</span></span>
<span class="line">    <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>            <span class="token comment">/* 圆形 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 5. 边框图片 */</span></span>
<span class="line">    <span class="token property">border-image-source</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'border.png'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">border-image-slice</span><span class="token punctuation">:</span> 27<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">border-image-width</span><span class="token punctuation">:</span> 27px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">border-image-outset</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">border-image-repeat</span><span class="token punctuation">:</span> stretch<span class="token punctuation">;</span>   <span class="token comment">/* 拉伸 */</span></span>
<span class="line">    <span class="token property">border-image-repeat</span><span class="token punctuation">:</span> repeat<span class="token punctuation">;</span>    <span class="token comment">/* 重复 */</span></span>
<span class="line">    <span class="token property">border-image-repeat</span><span class="token punctuation">:</span> round<span class="token punctuation">;</span>     <span class="token comment">/* 平铺 */</span></span>
<span class="line">    <span class="token property">border-image-repeat</span><span class="token punctuation">:</span> space<span class="token punctuation">;</span>     <span class="token comment">/* 间隔 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-阴影效果" tabindex="-1"><a class="header-anchor" href="#_5-3-阴影效果"><span>5.3 阴影效果</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">.shadow-effects</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 1. 盒子阴影 */</span></span>
<span class="line">    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 2px 4px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0.1<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">/* 基础阴影 */</span></span>
<span class="line">    <span class="token property">box-shadow</span><span class="token punctuation">:</span> </span>
<span class="line">        0 2px 4px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0.1<span class="token punctuation">)</span><span class="token punctuation">,</span>           <span class="token comment">/* 第一层 */</span></span>
<span class="line">        0 4px 8px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0.1<span class="token punctuation">)</span><span class="token punctuation">;</span>           <span class="token comment">/* 第二层 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 2. 内阴影 */</span></span>
<span class="line">    <span class="token property">box-shadow</span><span class="token punctuation">:</span> inset 0 2px 4px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0.1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 3. 文字阴影 */</span></span>
<span class="line">    <span class="token property">text-shadow</span><span class="token punctuation">:</span> 1px 1px 2px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0.2<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">/* 基础文字阴影 */</span></span>
<span class="line">    <span class="token property">text-shadow</span><span class="token punctuation">:</span> </span>
<span class="line">        0 0 2px #fff<span class="token punctuation">,</span>                          <span class="token comment">/* 发光效果 */</span></span>
<span class="line">        0 0 4px #fff<span class="token punctuation">,</span></span>
<span class="line">        0 0 6px #fff<span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">    <span class="token comment">/* 4. 阴影参数说明 */</span></span>
<span class="line">    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 2px      <span class="token comment">/* x偏移 */</span></span>
<span class="line">                2px      <span class="token comment">/* y偏移 */</span></span>
<span class="line">                4px      <span class="token comment">/* 模糊半径 */</span></span>
<span class="line">                2px      <span class="token comment">/* 扩展半径 */</span></span>
<span class="line">                <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0.1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* 颜色 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-动画与过渡" tabindex="-1"><a class="header-anchor" href="#_6-动画与过渡"><span>6. 动画与过渡</span></a></h2>
<h3 id="_6-1-过渡效果详解" tabindex="-1"><a class="header-anchor" href="#_6-1-过渡效果详解"><span>6.1 过渡效果详解</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">.transition</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 1. 过渡属性 */</span></span>
<span class="line">    <span class="token property">transition-property</span><span class="token punctuation">:</span> all<span class="token punctuation">;</span>              <span class="token comment">/* 所有属性 */</span></span>
<span class="line">    <span class="token property">transition-property</span><span class="token punctuation">:</span> transform<span class="token punctuation">,</span> color<span class="token punctuation">;</span>  <span class="token comment">/* 指定属性 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 2. 过渡持续时间 */</span></span>
<span class="line">    <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>             <span class="token comment">/* 持续时间 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 3. 过渡延迟 */</span></span>
<span class="line">    <span class="token property">transition-delay</span><span class="token punctuation">:</span> 0.1s<span class="token punctuation">;</span>                <span class="token comment">/* 延迟时间 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 4. 过渡时间函数 */</span></span>
<span class="line">    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease<span class="token punctuation">;</span>       <span class="token comment">/* 缓动 */</span></span>
<span class="line">    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> linear<span class="token punctuation">;</span>     <span class="token comment">/* 线性 */</span></span>
<span class="line">    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-in<span class="token punctuation">;</span>    <span class="token comment">/* 渐入 */</span></span>
<span class="line">    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>   <span class="token comment">/* 渐出 */</span></span>
<span class="line">    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-in-out<span class="token punctuation">;</span><span class="token comment">/* 渐入渐出 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 5. 自定义贝塞尔曲线 */</span></span>
<span class="line">    <span class="token property">transition-timing-function</span><span class="token punctuation">:</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>0.68<span class="token punctuation">,</span> -0.55<span class="token punctuation">,</span> 0.265<span class="token punctuation">,</span> 1.55<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 6. 过渡简写 */</span></span>
<span class="line">    <span class="token comment">/* 属性 持续时间 时间函数 延迟 */</span></span>
<span class="line">    <span class="token property">transition</span><span class="token punctuation">:</span> all 0.3s ease 0.1s<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 7. 多重过渡 */</span></span>
<span class="line">    <span class="token property">transition</span><span class="token punctuation">:</span> </span>
<span class="line">        transform 0.3s ease<span class="token punctuation">,</span></span>
<span class="line">        color 0.2s linear<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-动画完整指南" tabindex="-1"><a class="header-anchor" href="#_6-2-动画完整指南"><span>6.2 动画完整指南</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/* 1. 关键帧定义 */</span></span>
<span class="line"><span class="token atrule"><span class="token rule">@keyframes</span> slideIn</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token selector">0%</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-100%<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token selector">50%</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>10%<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token selector">100%</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.animation</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 2. 动画名称 */</span></span>
<span class="line">    <span class="token property">animation-name</span><span class="token punctuation">:</span> slideIn<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 3. 动画持续时间 */</span></span>
<span class="line">    <span class="token property">animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 4. 动画延迟 */</span></span>
<span class="line">    <span class="token property">animation-delay</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 5. 动画时间函数 */</span></span>
<span class="line">    <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 6. 动画重复次数 */</span></span>
<span class="line">    <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>        <span class="token comment">/* 播放一次 */</span></span>
<span class="line">    <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span> <span class="token comment">/* 无限循环 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 7. 动画方向 */</span></span>
<span class="line">    <span class="token property">animation-direction</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>         <span class="token comment">/* 正向播放 */</span></span>
<span class="line">    <span class="token property">animation-direction</span><span class="token punctuation">:</span> reverse<span class="token punctuation">;</span>        <span class="token comment">/* 反向播放 */</span></span>
<span class="line">    <span class="token property">animation-direction</span><span class="token punctuation">:</span> alternate<span class="token punctuation">;</span>      <span class="token comment">/* 交替播放 */</span></span>
<span class="line">    <span class="token property">animation-direction</span><span class="token punctuation">:</span> alternate-reverse<span class="token punctuation">;</span> <span class="token comment">/* 反向交替 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 8. 动画填充模式 */</span></span>
<span class="line">    <span class="token property">animation-fill-mode</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>          <span class="token comment">/* 不改变默认行为 */</span></span>
<span class="line">    <span class="token property">animation-fill-mode</span><span class="token punctuation">:</span> forwards<span class="token punctuation">;</span>      <span class="token comment">/* 保持最后一帧 */</span></span>
<span class="line">    <span class="token property">animation-fill-mode</span><span class="token punctuation">:</span> backwards<span class="token punctuation">;</span>     <span class="token comment">/* 应用第一帧 */</span></span>
<span class="line">    <span class="token property">animation-fill-mode</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>          <span class="token comment">/* 同时应用 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 9. 动画运行状态 */</span></span>
<span class="line">    <span class="token property">animation-play-state</span><span class="token punctuation">:</span> running<span class="token punctuation">;</span>      <span class="token comment">/* 运行 */</span></span>
<span class="line">    <span class="token property">animation-play-state</span><span class="token punctuation">:</span> paused<span class="token punctuation">;</span>       <span class="token comment">/* 暂停 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 10. 动画简写 */</span></span>
<span class="line">    <span class="token comment">/* 名称 持续时间 时间函数 延迟 重复次数 方向 填充模式 运行状态 */</span></span>
<span class="line">    <span class="token property">animation</span><span class="token punctuation">:</span> slideIn 1s ease 0.5s infinite normal forwards running<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 11. 多重动画 */</span></span>
<span class="line">    <span class="token property">animation</span><span class="token punctuation">:</span> </span>
<span class="line">        slideIn 1s ease<span class="token punctuation">,</span></span>
<span class="line">        fadeIn 2s linear<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-变形与滤镜" tabindex="-1"><a class="header-anchor" href="#_7-变形与滤镜"><span>7. 变形与滤镜</span></a></h2>
<h3 id="_7-1-2d变形" tabindex="-1"><a class="header-anchor" href="#_7-1-2d变形"><span>7.1 2D变形</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">.transform-2d</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 1. 平移 */</span></span>
<span class="line">    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>100px<span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">/* X轴平移 */</span></span>
<span class="line">    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>100px<span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">/* Y轴平移 */</span></span>
<span class="line">    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>100px<span class="token punctuation">,</span> 100px<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* 同时平移 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 2. 旋转 */</span></span>
<span class="line">    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>45deg<span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">/* 顺时针旋转45度 */</span></span>
<span class="line">    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-45deg<span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">/* 逆时针旋转45度 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 3. 缩放 */</span></span>
<span class="line">    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>2<span class="token punctuation">)</span><span class="token punctuation">;</span>            <span class="token comment">/* X轴放大2倍 */</span></span>
<span class="line">    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">/* Y轴缩小一半 */</span></span>
<span class="line">    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">/* X轴放大2倍,Y轴缩小一半 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 4. 倾斜 */</span></span>
<span class="line">    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skewX</span><span class="token punctuation">(</span>45deg<span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">/* X轴倾斜45度 */</span></span>
<span class="line">    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skewY</span><span class="token punctuation">(</span>45deg<span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">/* Y轴倾斜45度 */</span></span>
<span class="line">    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>45deg<span class="token punctuation">,</span> 45deg<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">/* 同时倾斜 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 5. 变形原点 */</span></span>
<span class="line">    <span class="token property">transform-origin</span><span class="token punctuation">:</span> left top<span class="token punctuation">;</span>      <span class="token comment">/* 左上角为原点 */</span></span>
<span class="line">    <span class="token property">transform-origin</span><span class="token punctuation">:</span> center center<span class="token punctuation">;</span>  <span class="token comment">/* 中心点为原点 */</span></span>
<span class="line">    <span class="token property">transform-origin</span><span class="token punctuation">:</span> 100% 100%<span class="token punctuation">;</span>     <span class="token comment">/* 右下角为原点 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 6. 多重变形 */</span></span>
<span class="line">    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>45deg<span class="token punctuation">)</span> <span class="token function">scale</span><span class="token punctuation">(</span>2<span class="token punctuation">)</span> <span class="token function">translate</span><span class="token punctuation">(</span>100px<span class="token punctuation">,</span> 100px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-3d变形" tabindex="-1"><a class="header-anchor" href="#_7-2-3d变形"><span>7.2 3D变形</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">.transform-3d</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 1. 3D平移 */</span></span>
<span class="line">    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>100px<span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">/* Z轴平移 */</span></span>
<span class="line">    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate3d</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">,</span>z<span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">/* 空间平移 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 2. 3D旋转 */</span></span>
<span class="line">    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateX</span><span class="token punctuation">(</span>45deg<span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">/* 绕X轴旋转 */</span></span>
<span class="line">    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>45deg<span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">/* 绕Y轴旋转 */</span></span>
<span class="line">    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateZ</span><span class="token punctuation">(</span>45deg<span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">/* 绕Z轴旋转 */</span></span>
<span class="line">    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate3d</span><span class="token punctuation">(</span>1<span class="token punctuation">,</span>1<span class="token punctuation">,</span>1<span class="token punctuation">,</span>45deg<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">/* 自定义旋转轴 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 3. 3D缩放 */</span></span>
<span class="line">    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleZ</span><span class="token punctuation">(</span>2<span class="token punctuation">)</span><span class="token punctuation">;</span>              <span class="token comment">/* Z轴缩放 */</span></span>
<span class="line">    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale3d</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">,</span>z<span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">/* 空间缩放 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 4. 透视距离 */</span></span>
<span class="line">    <span class="token property">perspective</span><span class="token punctuation">:</span> 1000px<span class="token punctuation">;</span>               <span class="token comment">/* 观察距离 */</span></span>
<span class="line">    <span class="token property">perspective-origin</span><span class="token punctuation">:</span> center center<span class="token punctuation">;</span>  <span class="token comment">/* 观察位置 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 5. 3D空间 */</span></span>
<span class="line">    <span class="token property">transform-style</span><span class="token punctuation">:</span> flat<span class="token punctuation">;</span>             <span class="token comment">/* 平面空间 */</span></span>
<span class="line">    <span class="token property">transform-style</span><span class="token punctuation">:</span> preserve-3d<span class="token punctuation">;</span>      <span class="token comment">/* 3D空间 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 6. 背面可见性 */</span></span>
<span class="line">    <span class="token property">backface-visibility</span><span class="token punctuation">:</span> visible<span class="token punctuation">;</span>      <span class="token comment">/* 显示背面 */</span></span>
<span class="line">    <span class="token property">backface-visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>       <span class="token comment">/* 隐藏背面 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-3-css滤镜效果" tabindex="-1"><a class="header-anchor" href="#_7-3-css滤镜效果"><span>7.3 CSS滤镜效果</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">.filter-effects</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 1. 模糊效果 */</span></span>
<span class="line">    <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>5px<span class="token punctuation">)</span><span class="token punctuation">;</span>                <span class="token comment">/* 高斯模糊 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 2. 亮度调节 */</span></span>
<span class="line">    <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">brightness</span><span class="token punctuation">(</span>150%<span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">/* 提高亮度 */</span></span>
<span class="line">    <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">brightness</span><span class="token punctuation">(</span>50%<span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">/* 降低亮度 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 3. 对比度 */</span></span>
<span class="line">    <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">contrast</span><span class="token punctuation">(</span>200%<span class="token punctuation">)</span><span class="token punctuation">;</span>           <span class="token comment">/* 增加对比度 */</span></span>
<span class="line">    <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">contrast</span><span class="token punctuation">(</span>50%<span class="token punctuation">)</span><span class="token punctuation">;</span>            <span class="token comment">/* 降低对比度 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 4. 灰度 */</span></span>
<span class="line">    <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">grayscale</span><span class="token punctuation">(</span>100%<span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">/* 完全灰度 */</span></span>
<span class="line">    <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">grayscale</span><span class="token punctuation">(</span>50%<span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">/* 部分灰度 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 5. 色相旋转 */</span></span>
<span class="line">    <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">hue-rotate</span><span class="token punctuation">(</span>90deg<span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">/* 色相旋转90度 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 6. 反相效果 */</span></span>
<span class="line">    <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">invert</span><span class="token punctuation">(</span>100%<span class="token punctuation">)</span><span class="token punctuation">;</span>            <span class="token comment">/* 完全反相 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 7. 饱和度 */</span></span>
<span class="line">    <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">saturate</span><span class="token punctuation">(</span>200%<span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">/* 增加饱和度 */</span></span>
<span class="line">    <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">saturate</span><span class="token punctuation">(</span>50%<span class="token punctuation">)</span><span class="token punctuation">;</span>           <span class="token comment">/* 降低饱和度 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 8. 褐色效果 */</span></span>
<span class="line">    <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">sepia</span><span class="token punctuation">(</span>100%<span class="token punctuation">)</span><span class="token punctuation">;</span>             <span class="token comment">/* 完全褐色 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 9. 透明度 */</span></span>
<span class="line">    <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">opacity</span><span class="token punctuation">(</span>50%<span class="token punctuation">)</span><span class="token punctuation">;</span>            <span class="token comment">/* 设置透明度 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 10. 阴影效果 */</span></span>
<span class="line">    <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">drop-shadow</span><span class="token punctuation">(</span>2px 2px 2px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0.3<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 11. 多重滤镜 */</span></span>
<span class="line">    <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">contrast</span><span class="token punctuation">(</span>175%<span class="token punctuation">)</span> <span class="token function">brightness</span><span class="token punctuation">(</span>103%<span class="token punctuation">)</span> <span class="token function">blur</span><span class="token punctuation">(</span>1px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-响应式布局" tabindex="-1"><a class="header-anchor" href="#_8-响应式布局"><span>8. 响应式布局</span></a></h2>
<h3 id="_8-1-媒体查询" tabindex="-1"><a class="header-anchor" href="#_8-1-媒体查询"><span>8.1 媒体查询</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/* 1. 基础语法 */</span></span>
<span class="line"><span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 平板样式 */</span></span>
<span class="line">    <span class="token selector">.container</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">width</span><span class="token punctuation">:</span> 750px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 480px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 手机样式 */</span></span>
<span class="line">    <span class="token selector">.container</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 2. 设备方向 */</span></span>
<span class="line"><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">orientation</span><span class="token punctuation">:</span> portrait<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 竖屏样式 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">orientation</span><span class="token punctuation">:</span> landscape<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 横屏样式 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 3. 设备类型 */</span></span>
<span class="line"><span class="token atrule"><span class="token rule">@media</span> screen</span> <span class="token punctuation">{</span> <span class="token comment">/* 屏幕设备 */</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token atrule"><span class="token rule">@media</span> print</span> <span class="token punctuation">{</span> <span class="token comment">/* 打印设备 */</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token atrule"><span class="token rule">@media</span> speech</span> <span class="token punctuation">{</span> <span class="token comment">/* 语音设备 */</span> <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 4. 逻辑运算符 */</span></span>
<span class="line"><span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 1024px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 同时满足条件 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span><span class="token punctuation">,</span> print</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 满足任一条件 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 5. 特性查询 */</span></span>
<span class="line"><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">hover</span><span class="token punctuation">:</span> hover<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 支持悬停效果的设备 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">prefers-color-scheme</span><span class="token punctuation">:</span> dark<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 暗色主题 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-2-弹性单位" tabindex="-1"><a class="header-anchor" href="#_8-2-弹性单位"><span>8.2 弹性单位</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">.flexible-units</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 1. 相对字体大小 */</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>      <span class="token comment">/* 相对父元素 */</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>     <span class="token comment">/* 相对根元素 */</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> 1vw<span class="token punctuation">;</span>      <span class="token comment">/* 视窗宽度的1% */</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> 1vh<span class="token punctuation">;</span>      <span class="token comment">/* 视窗高度的1% */</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> 1vmin<span class="token punctuation">;</span>    <span class="token comment">/* vw和vh中的较小值 */</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> 1vmax<span class="token punctuation">;</span>    <span class="token comment">/* vw和vh中的较大值 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 2. 相对尺寸 */</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>          <span class="token comment">/* 父元素宽度的50% */</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 50vw<span class="token punctuation">;</span>         <span class="token comment">/* 视窗宽度的50% */</span></span>
<span class="line">    <span class="token property">height</span><span class="token punctuation">:</span> 50vh<span class="token punctuation">;</span>        <span class="token comment">/* 视窗高度的50% */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 3. calc()计算 */</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 20px<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">/* 父元素宽度减20px */</span></span>
<span class="line">    <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>1rem + 2px<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">/* 混合单位计算 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 4. clamp()范围限制 */</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">clamp</span><span class="token punctuation">(</span>1rem<span class="token punctuation">,</span> 2.5vw<span class="token punctuation">,</span> 2rem<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* 最小值、首选值、最大值 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 5. min()和max() */</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">min</span><span class="token punctuation">(</span>1000px<span class="token punctuation">,</span> 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">/* 取较小值 */</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">max</span><span class="token punctuation">(</span>500px<span class="token punctuation">,</span> 50%<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">/* 取较大值 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-高级特性" tabindex="-1"><a class="header-anchor" href="#_9-高级特性"><span>9. 高级特性</span></a></h2>
<h3 id="_9-1-grid网格布局" tabindex="-1"><a class="header-anchor" href="#_9-1-grid网格布局"><span>9.1 Grid网格布局</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">.grid-container</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 1. 网格容器 */</span></span>
<span class="line">    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>                    <span class="token comment">/* 块级网格 */</span></span>
<span class="line">    <span class="token property">display</span><span class="token punctuation">:</span> inline-grid<span class="token punctuation">;</span>            <span class="token comment">/* 内联网格 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 2. 定义列和行 */</span></span>
<span class="line">    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 100px 1fr auto<span class="token punctuation">;</span>  <span class="token comment">/* 列宽定义 */</span></span>
<span class="line">    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 50px 1fr<span class="token punctuation">;</span>           <span class="token comment">/* 行高定义 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 3. 网格间距 */</span></span>
<span class="line">    <span class="token property">gap</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>                       <span class="token comment">/* 行列间距相等 */</span></span>
<span class="line">    <span class="token property">row-gap</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>                   <span class="token comment">/* 行间距 */</span></span>
<span class="line">    <span class="token property">column-gap</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>                <span class="token comment">/* 列间距 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 4. 区域命名 */</span></span>
<span class="line">    <span class="token property">grid-template-areas</span><span class="token punctuation">:</span> </span>
<span class="line">        <span class="token string">"header header"</span></span>
<span class="line">        <span class="token string">"sidebar content"</span></span>
<span class="line">        <span class="token string">"footer footer"</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 5. 自动网格 */</span></span>
<span class="line">    <span class="token property">grid-auto-columns</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>        <span class="token comment">/* 自动列宽 */</span></span>
<span class="line">    <span class="token property">grid-auto-rows</span><span class="token punctuation">:</span> <span class="token function">minmax</span><span class="token punctuation">(</span>100px<span class="token punctuation">,</span> auto<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* 自动行高 */</span></span>
<span class="line">    <span class="token property">grid-auto-flow</span><span class="token punctuation">:</span> row | column | dense<span class="token punctuation">;</span> <span class="token comment">/* 自动放置方式 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 6. 对齐方式 */</span></span>
<span class="line">    <span class="token property">justify-items</span><span class="token punctuation">:</span> start | end | center | stretch<span class="token punctuation">;</span>  <span class="token comment">/* 水平对齐 */</span></span>
<span class="line">    <span class="token property">align-items</span><span class="token punctuation">:</span> start | end | center | stretch<span class="token punctuation">;</span>    <span class="token comment">/* 垂直对齐 */</span></span>
<span class="line">    <span class="token property">place-items</span><span class="token punctuation">:</span> center center<span class="token punctuation">;</span>                     <span class="token comment">/* 简写形式 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 7. 整体内容对齐 */</span></span>
<span class="line">    <span class="token property">justify-content</span><span class="token punctuation">:</span> start | end | center | space-between | space-around<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">align-content</span><span class="token punctuation">:</span> start | end | center | space-between | space-around<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.grid-item</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 1. 指定位置 */</span></span>
<span class="line">    <span class="token property">grid-column</span><span class="token punctuation">:</span> 1 / 3<span class="token punctuation">;</span>              <span class="token comment">/* 列位置 */</span></span>
<span class="line">    <span class="token property">grid-row</span><span class="token punctuation">:</span> 1 / 3<span class="token punctuation">;</span>                 <span class="token comment">/* 行位置 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 2. 区域指定 */</span></span>
<span class="line">    <span class="token property">grid-area</span><span class="token punctuation">:</span> header<span class="token punctuation">;</span>               <span class="token comment">/* 指定到具名区域 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 3. 单个项目对齐 */</span></span>
<span class="line">    <span class="token property">justify-self</span><span class="token punctuation">:</span> start | end | center | stretch<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">align-self</span><span class="token punctuation">:</span> start | end | center | stretch<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-2-混合模式与遮罩" tabindex="-1"><a class="header-anchor" href="#_9-2-混合模式与遮罩"><span>9.2 混合模式与遮罩</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">.blend-mask</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 1. 混合模式 */</span></span>
<span class="line">    <span class="token property">mix-blend-mode</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>          <span class="token comment">/* 正常 */</span></span>
<span class="line">    <span class="token property">mix-blend-mode</span><span class="token punctuation">:</span> multiply<span class="token punctuation">;</span>        <span class="token comment">/* 正片叠底 */</span></span>
<span class="line">    <span class="token property">mix-blend-mode</span><span class="token punctuation">:</span> screen<span class="token punctuation">;</span>          <span class="token comment">/* 滤色 */</span></span>
<span class="line">    <span class="token property">mix-blend-mode</span><span class="token punctuation">:</span> overlay<span class="token punctuation">;</span>         <span class="token comment">/* 叠加 */</span></span>
<span class="line">    <span class="token property">mix-blend-mode</span><span class="token punctuation">:</span> darken<span class="token punctuation">;</span>          <span class="token comment">/* 变暗 */</span></span>
<span class="line">    <span class="token property">mix-blend-mode</span><span class="token punctuation">:</span> lighten<span class="token punctuation">;</span>         <span class="token comment">/* 变亮 */</span></span>
<span class="line">    <span class="token property">mix-blend-mode</span><span class="token punctuation">:</span> color-dodge<span class="token punctuation">;</span>     <span class="token comment">/* 颜色减淡 */</span></span>
<span class="line">    <span class="token property">mix-blend-mode</span><span class="token punctuation">:</span> color-burn<span class="token punctuation">;</span>      <span class="token comment">/* 颜色加深 */</span></span>
<span class="line">    <span class="token property">mix-blend-mode</span><span class="token punctuation">:</span> difference<span class="token punctuation">;</span>      <span class="token comment">/* 差值 */</span></span>
<span class="line">    <span class="token property">mix-blend-mode</span><span class="token punctuation">:</span> exclusion<span class="token punctuation">;</span>       <span class="token comment">/* 排除 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 2. 背景混合模式 */</span></span>
<span class="line">    <span class="token property">background-blend-mode</span><span class="token punctuation">:</span> normal | multiply | screen | overlay<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 3. 遮罩 */</span></span>
<span class="line">    <span class="token property">mask-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>mask.png<span class="token punctuation">)</span></span><span class="token punctuation">;</span>       <span class="token comment">/* 遮罩图片 */</span></span>
<span class="line">    <span class="token property">mask-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>          <span class="token comment">/* 遮罩重复 */</span></span>
<span class="line">    <span class="token property">mask-position</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>           <span class="token comment">/* 遮罩位置 */</span></span>
<span class="line">    <span class="token property">mask-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>                <span class="token comment">/* 遮罩大小 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 4. 裁切路径 */</span></span>
<span class="line">    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">circle</span><span class="token punctuation">(</span>50% at 50% 50%<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">/* 圆形裁切 */</span></span>
<span class="line">    <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">polygon</span><span class="token punctuation">(</span>50% 0%<span class="token punctuation">,</span> 100% 50%<span class="token punctuation">,</span> 50% 100%<span class="token punctuation">,</span> 0% 50%<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">/* 多边形裁切 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-3-自定义属性-css变量" tabindex="-1"><a class="header-anchor" href="#_9-3-自定义属性-css变量"><span>9.3 自定义属性(CSS变量)</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">:root</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 1. 定义全局变量 */</span></span>
<span class="line">    <span class="token property">--primary-color</span><span class="token punctuation">:</span> #007bff<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">--secondary-color</span><span class="token punctuation">:</span> #6c757d<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">--spacing-unit</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">--max-width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.component</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 2. 使用变量 */</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--primary-color<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--spacing-unit<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 3. 带默认值的变量 */</span></span>
<span class="line">    <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--custom-padding<span class="token punctuation">,</span> 20px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 4. 局部变量 */</span></span>
<span class="line">    <span class="token property">--local-color</span><span class="token punctuation">:</span> #ff0000<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--local-color<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 5. 计算值 */</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--spacing-unit<span class="token punctuation">)</span> * 4<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 6. 媒体查询中修改变量 */</span></span>
<span class="line">    <span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">--spacing-unit</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-4-性能优化" tabindex="-1"><a class="header-anchor" href="#_9-4-性能优化"><span>9.4 性能优化</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">.performance</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 1. 硬件加速 */</span></span>
<span class="line">    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">/* 开启GPU加速 */</span></span>
<span class="line">    <span class="token property">will-change</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span>          <span class="token comment">/* 提示浏览器即将改变 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 2. 包含块优化 */</span></span>
<span class="line">    <span class="token property">contain</span><span class="token punctuation">:</span> layout<span class="token punctuation">;</span>                 <span class="token comment">/* 布局包含 */</span></span>
<span class="line">    <span class="token property">contain</span><span class="token punctuation">:</span> paint<span class="token punctuation">;</span>                  <span class="token comment">/* 绘制包含 */</span></span>
<span class="line">    <span class="token property">contain</span><span class="token punctuation">:</span> strict<span class="token punctuation">;</span>                 <span class="token comment">/* 严格包含 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 3. 动画性能 */</span></span>
<span class="line">    <span class="token property">transition</span><span class="token punctuation">:</span> transform 0.3s<span class="token punctuation">;</span>       <span class="token comment">/* 使用transform替代位置属性 */</span></span>
<span class="line">    <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>0.4<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.2<span class="token punctuation">,</span> 1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* 平滑动画 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 4. 选择器优化 */</span></span>
<span class="line">    <span class="token selector">.good-selector</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>               <span class="token comment">/* 避免过度嵌套 */</span></span>
<span class="line">    <span class="token selector">[data-component]</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>             <span class="token comment">/* 使用属性选择器 */</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 5. 关键渲染路径 */</span></span>
<span class="line">    <span class="token property">content-visibility</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>        <span class="token comment">/* 延迟渲染 */</span></span>
<span class="line">    <span class="token property">content-visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>      <span class="token comment">/* 跳过渲染 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-浏览器兼容性" tabindex="-1"><a class="header-anchor" href="#_10-浏览器兼容性"><span>10. 浏览器兼容性</span></a></h2>
<h3 id="_10-1-前缀处理" tabindex="-1"><a class="header-anchor" href="#_10-1-前缀处理"><span>10.1 前缀处理</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">.vendor-prefixes</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 1. 变形 */</span></span>
<span class="line">    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">-moz-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">-ms-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 2. 动画 */</span></span>
<span class="line">    <span class="token atrule"><span class="token rule">@-webkit-keyframes</span> slide</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token selector">from</span> <span class="token punctuation">{</span> <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line">        <span class="token selector">to</span> <span class="token punctuation">{</span> <span class="token property">left</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 3. 渐变 */</span></span>
<span class="line">    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">-webkit-linear-gradient</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> #fff<span class="token punctuation">,</span> #000<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">-moz-linear-gradient</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> #fff<span class="token punctuation">,</span> #000<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> #fff<span class="token punctuation">,</span> #000<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 4. 弹性布局 */</span></span>
<span class="line">    <span class="token property">display</span><span class="token punctuation">:</span> -webkit-flex<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">display</span><span class="token punctuation">:</span> -moz-flex<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-2-特性检测" tabindex="-1"><a class="header-anchor" href="#_10-2-特性检测"><span>10.2 特性检测</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/* 1. @supports 规则 */</span></span>
<span class="line"><span class="token atrule"><span class="token rule">@supports</span> <span class="token punctuation">(</span><span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 支持网格布局的样式 */</span></span>
<span class="line">    <span class="token selector">.container</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token atrule"><span class="token rule">@supports</span> <span class="token keyword">not</span> <span class="token punctuation">(</span><span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 不支持网格布局的备选样式 */</span></span>
<span class="line">    <span class="token selector">.container</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 2. 多重特性检测 */</span></span>
<span class="line"><span class="token atrule"><span class="token rule">@supports</span> <span class="token punctuation">(</span><span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>auto-fill<span class="token punctuation">,</span> <span class="token function">minmax</span><span class="token punctuation">(</span>200px<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 支持高级网格特性的样式 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 3. 或运算 */</span></span>
<span class="line"><span class="token atrule"><span class="token rule">@supports</span> <span class="token punctuation">(</span><span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">)</span> <span class="token keyword">or</span> <span class="token punctuation">(</span><span class="token property">display</span><span class="token punctuation">:</span> -ms-flexbox<span class="token punctuation">)</span> <span class="token keyword">or</span> <span class="token punctuation">(</span><span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 支持任一种弹性布局的样式 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-3-降级处理" tabindex="-1"><a class="header-anchor" href="#_10-3-降级处理"><span>10.3 降级处理</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">.fallback</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 1. 渐进增强 */</span></span>
<span class="line">    <span class="token comment">/* 老版本浏览器使用 */</span></span>
<span class="line">    <span class="token property">background</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">/* 新版本浏览器使用 */</span></span>
<span class="line">    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> #f00<span class="token punctuation">,</span> #00f<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 2. 特性回退 */</span></span>
<span class="line">    <span class="token comment">/* 不支持calc的浏览器使用固定值 */</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 90%<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">/* 支持calc的浏览器使用计算值 */</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 20px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 3. 布局回退 */</span></span>
<span class="line">    <span class="token comment">/* 传统布局 */</span></span>
<span class="line">    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 33.33%<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">/* 现代布局 */</span></span>
<span class="line">    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-高级应用" tabindex="-1"><a class="header-anchor" href="#_11-高级应用"><span>11. 高级应用</span></a></h2>
<h3 id="_11-1-打印样式" tabindex="-1"><a class="header-anchor" href="#_11-1-打印样式"><span>11.1 打印样式</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token atrule"><span class="token rule">@media</span> print</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 1. 基础打印设置 */</span></span>
<span class="line">    <span class="token selector">body</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">padding</span><span class="token punctuation">:</span> 2cm<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">font-size</span><span class="token punctuation">:</span> 12pt<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 2. 隐藏不必要元素 */</span></span>
<span class="line">    <span class="token selector">nav, footer, button, .no-print</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">display</span><span class="token punctuation">:</span> none <span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 3. 链接处理 */</span></span>
<span class="line">    <span class="token selector">a[href]:after</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">" ("</span> <span class="token function">attr</span><span class="token punctuation">(</span>href<span class="token punctuation">)</span> <span class="token string">")"</span><span class="token punctuation">;</span>  <span class="token comment">/* 显示链接URL */</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 4. 分页控制 */</span></span>
<span class="line">    <span class="token selector">h1, h2, h3</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">page-break-after</span><span class="token punctuation">:</span> avoid<span class="token punctuation">;</span>  <span class="token comment">/* 标题后不分页 */</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token selector">table, figure</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">page-break-inside</span><span class="token punctuation">:</span> avoid<span class="token punctuation">;</span> <span class="token comment">/* 表格和图片内不分页 */</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-2-css-houdini" tabindex="-1"><a class="header-anchor" href="#_11-2-css-houdini"><span>11.2 CSS Houdini</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/* 1. Paint API */</span></span>
<span class="line"><span class="token selector">.paint-api</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 注册自定义绘制 */</span></span>
<span class="line">    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">paint</span><span class="token punctuation">(</span>myPaint<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 2. Layout API */</span></span>
<span class="line"><span class="token selector">.layout-api</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">display</span><span class="token punctuation">:</span> <span class="token function">layout</span><span class="token punctuation">(</span>masonry<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 3. Properties and Values API */</span></span>
<span class="line"><span class="token atrule"><span class="token rule">@property</span> --gradient-angle</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">syntax</span><span class="token punctuation">:</span> <span class="token string">'&lt;angle>'</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">initial-value</span><span class="token punctuation">:</span> 0deg<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">inherits</span><span class="token punctuation">:</span> false<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 4. Typed OM */</span></span>
<span class="line"><span class="token selector">.typed-om</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">--number</span><span class="token punctuation">:</span> 42<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">--length</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">--color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-3-css工作流" tabindex="-1"><a class="header-anchor" href="#_11-3-css工作流"><span>11.3 CSS工作流</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/* 1. CSS模块化 */</span></span>
<span class="line"><span class="token selector">.module</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* BEM命名规范 */</span></span>
<span class="line">    <span class="token selector">.module__element</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">/* 元素 */</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token selector">.module--modifier</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">/* 修饰符 */</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 2. CSS预处理器变量 */</span></span>
<span class="line">$<span class="token property">primary-color</span><span class="token punctuation">:</span> #007bff<span class="token punctuation">;</span></span>
<span class="line">$<span class="token property">spacing</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.element</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> $primary-color<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">margin</span><span class="token punctuation">:</span> $spacing * 2<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 3. CSS后处理器 */</span></span>
<span class="line"><span class="token selector">.autoprefixer</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>  <span class="token comment">/* 自动添加前缀 */</span></span>
<span class="line">    <span class="token property">user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 4. CSS组织结构 */</span></span>
<span class="line"><span class="token comment">/* Base */</span></span>
<span class="line"><span class="token atrule"><span class="token rule">@import</span> <span class="token string">'base/reset'</span><span class="token punctuation">;</span></span></span>
<span class="line"><span class="token atrule"><span class="token rule">@import</span> <span class="token string">'base/typography'</span><span class="token punctuation">;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* Components */</span></span>
<span class="line"><span class="token atrule"><span class="token rule">@import</span> <span class="token string">'components/buttons'</span><span class="token punctuation">;</span></span></span>
<span class="line"><span class="token atrule"><span class="token rule">@import</span> <span class="token string">'components/forms'</span><span class="token punctuation">;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* Layout */</span></span>
<span class="line"><span class="token atrule"><span class="token rule">@import</span> <span class="token string">'layout/header'</span><span class="token punctuation">;</span></span></span>
<span class="line"><span class="token atrule"><span class="token rule">@import</span> <span class="token string">'layout/footer'</span><span class="token punctuation">;</span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-4-性能监控" tabindex="-1"><a class="header-anchor" href="#_11-4-性能监控"><span>11.4 性能监控</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/* 1. 性能标记 */</span></span>
<span class="line"><span class="token selector">.performance-marks</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 强制创建层 */</span></span>
<span class="line">    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 监控重绘 */</span></span>
<span class="line">    <span class="token property">outline</span><span class="token punctuation">:</span> 1px solid transparent<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 减少重排 */</span></span>
<span class="line">    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 优化动画 */</span></span>
<span class="line">    <span class="token property">transition</span><span class="token punctuation">:</span> transform 0.3s<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">will-change</span><span class="token punctuation">:</span> transform<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 2. 调试辅助 */</span></span>
<span class="line"><span class="token selector">.debug</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 显示布局边界 */</span></span>
<span class="line">    <span class="token selector">*</span> <span class="token punctuation">{</span> <span class="token property">outline</span><span class="token punctuation">:</span> 1px solid <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0.2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">/* 显示网格线 */</span></span>
<span class="line">    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> transparent 9px<span class="token punctuation">,</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0.1<span class="token punctuation">)</span> 10px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">background-size</span><span class="token punctuation">:</span> 10px 10px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


