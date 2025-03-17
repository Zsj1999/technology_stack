# Vue 2 指南

## 介绍
Vue.js 是一个用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。

## 安装
### CDN
```

<!-- 开发环境版本，包含了有帮助的命令行警告 -->

<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<!-- 生产环境版本，优化了尺寸和速度 -->
<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
```
### NPM
```
bash
npm install vue@2
```

## 基础概念(入门级)

### 1. 模板语法
```html
<!-- 文本插值 -->
<span>{{ message }}</span>

<!-- 指令 -->
<div v-if="seen">条件渲染</div>
<div v-for="item in items">列表渲染</div>
<button v-on:click="doSomething">事件绑定</button>
<input v-model="message">
```

### 2. 计算属性和侦听器
```javascript
export default {
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe'
    }
  },
  computed: {
    // 计算属性
    fullName() {
      return this.firstName + ' ' + this.lastName
    }
  },
  watch: {
    // 侦听器
    firstName(newVal, oldVal) {
      console.log('名字变化了:', newVal)
    }
  }
}
```

### 3. 生命周期
```javascript
export default {
  beforeCreate() {
    // 实例初始化之后，数据观测和事件配置之前
  },
  created() {
    // 实例创建完成后被立即调用
  },
  mounted() {
    // el 被新创建的 vm.$el 替换，并挂载到实例上去之后
  },
  updated() {
    // 数据更改导致的虚拟 DOM 重新渲染和打补丁之后
  },
  destroyed() {
    // 实例销毁后调用
  }
}
```

## 中级特性

### 1. 组件复用策略
```javascript
// HOC (高阶组件)
export function withLogger(WrappedComponent) {
  return {
    mounted() {
      console.log('组件已挂载')
    },
    props: WrappedComponent.props,
    render(h) {
      return h(WrappedComponent, {
        props: this.$props,
        on: this.$listeners
      })
    }
  }
}

// 函数式组件
export default {
  functional: true,
  render(h, context) {
    return h('div', context.data, context.children)
  }
}
```

### 2. 渲染函数和JSX
```javascript
export default {
  render(h) {
    return h('div', {
      attrs: {
        id: 'foo'
      },
      on: {
        click: this.handleClick
      }
    }, [
      h('span', 'Hello'),
      h('span', 'World')
    ])
  }
}
```

### 3. 状态管理进阶
```javascript
// Vuex 模块化
const moduleA = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: { ... },
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})
```

## 高级特性

### 1. 性能优化技巧
```javascript
// 1. 大数据列表优化
Vue.component('virtual-list', {
  props: ['items'],
  data() {
    return {
      visibleItems: [],
      startIndex: 0,
      endIndex: 0
    }
  },
  methods: {
    updateVisibleItems() {
      // 根据滚动位置计算可见项
    }
  }
})

// 2. 组件懒加载
const AsyncComponent = () => ({
  component: import('./MyComponent.vue'),
  loading: LoadingComponent,
  error: ErrorComponent,
  delay: 200,
  timeout: 3000
})
```

### 2. 自定义渲染器
```javascript
const renderer = {
  createElement(tag, attrs, children) {
    // 创建自定义元素
  },
  insert(el, parent, anchor) {
    // 插入元素
  },
  remove(el) {
    // 移除元素
  },
  // ... 其他必要的渲染方法
}
```

### 3. 插件开发
```javascript
const MyPlugin = {
  install(Vue, options) {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {}

    // 2. 添加全局资源
    Vue.directive('my-directive', {})

    // 3. 注入组件选项
    Vue.mixin({
      created: function () {}
    })

    // 4. 添加实例方法
    Vue.prototype.$myMethod = function () {}
  }
}
```

### 4. 自定义编译器
```javascript
// 自定义编译器选项
const compiler = require('vue-template-compiler')
const compiled = compiler.compile(`
  <div v-custom-directive>
    {{ message }}
  </div>
`)

// 输出渲染函数
console.log(compiled.render)
```

## 最佳实践

### 1. 组件设计原则
- 单一职责原则
- Props 验证
- 事件命名规范
- 组件通信规范

### 2. 项目架构
```
src/
  ├── api/          # API 请求
  ├── assets/       # 静态资源
  ├── components/   # 通用组件
  ├── directives/   # 自定义指令
  ├── mixins/       # 混入
  ├── plugins/      # 插件
  ├── router/       # 路由配置
  ├── store/        # Vuex 状态管理
  ├── utils/        # 工具函数
  └── views/        # 页面组件
```

### 3. 性能检测和优化
```javascript
// Vue 性能分析
Vue.config.performance = true

// 组件性能追踪
Vue.component('my-component', {
  beforeCreate() {
    console.time('组件初始化')
  },
  mounted() {
    console.timeEnd('组件初始化')
  }
})
```
