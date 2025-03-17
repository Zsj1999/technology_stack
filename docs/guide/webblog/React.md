# React 完全指南

## 1. React 基础

### 1.1 JSX 语法
```jsx
// JSX 基础语法
function Greeting() {
  const name = 'World';
  return (
    <div className="greeting">
      <h1>Hello, {name}!</h1>
      {/* JSX 注释写法 */}
      <p>Welcome to React</p>
    </div>
  );
}

// JSX 条件渲染
function Conditional({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <UserGreeting />
      ) : (
        <GuestGreeting />
      )}
    </div>
  );
}

// JSX 列表渲染
function List({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}
```

### 1.2 组件基础
```jsx
// 函数组件
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// 类组件
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// 组件组合
function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
    </div>
  );
}
```

## 2. Hooks 详解

### 2.1 useState
```jsx
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

// 使用函数式更新
function Counter() {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };
  
  return (
    <button onClick={increment}>
      Count: {count}
    </button>
  );
}
```

### 2.2 useEffect
```jsx
// 基础用法
function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // 仅在 count 更改时更新

  return (
    <button onClick={() => setCount(count + 1)}>
      Click me
    </button>
  );
}

// 清理效果
function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();
    
    return () => {
      connection.disconnect();
    };
  }, [roomId]);
  
  return <div>Welcome to {roomId}!</div>;
}
```

### 2.3 自定义 Hook
```jsx
// 自定义 Hook - 处理表单
function useForm(initialValues = {}) {
  const [values, setValues] = useState(initialValues);
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const resetForm = () => {
    setValues(initialValues);
  };
  
  return {
    values,
    handleChange,
    resetForm
  };
}

// 使用自定义 Hook
function LoginForm() {
  const { values, handleChange, resetForm } = useForm({
    username: '',
    password: ''
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    resetForm();
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="username"
        value={values.username}
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
}
```

## 3. 状态管理

### 3.1 Context API
```jsx
// 创建 Context
const ThemeContext = React.createContext('light');

// Provider
function App() {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={theme}>
      <div className={`App ${theme}`}>
        <ThemedButton onClick={() => {
          setTheme(theme === 'light' ? 'dark' : 'light')
        }}>
          Toggle Theme
        </ThemedButton>
      </div>
    </ThemeContext.Provider>
  );
}

// Consumer
function ThemedButton({ onClick }) {
  const theme = useContext(ThemeContext);
  return (
    <button 
      className={`btn-${theme}`}
      onClick={onClick}
    >
      Current theme: {theme}
    </button>
  );
}
```

### 3.2 Redux 集成
```jsx
// Action Types
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

// Action Creators
const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text }
});

const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id }
});

// Reducer
const initialState = {
  todos: []
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload.text,
            completed: false
          }
        ]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    default:
      return state;
  }
}

// Component
function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  
  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };
  
  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };
  
  return (
    <div>
      <AddTodoForm onSubmit={handleAddTodo} />
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            {...todo}
            onClick={() => handleToggle(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
}
```

## 4. 性能优化

### 4.1 React.memo
```jsx
// 使用 memo 优化组件
const TodoItem = React.memo(function TodoItem({ text, completed, onClick }) {
  console.log('TodoItem render');
  return (
    <li
      onClick={onClick}
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
    >
      {text}
    </li>
  );
});

// 自定义比较函数
const areEqual = (prevProps, nextProps) => {
  return prevProps.text === nextProps.text &&
         prevProps.completed === nextProps.completed;
};

const MemoizedTodoItem = React.memo(TodoItem, areEqual);
```

### 4.2 useMemo 和 useCallback
```jsx
function SearchList({ items, query }) {
  // 记忆化过滤结果
  const filteredItems = useMemo(() => {
    return items.filter(item =>
      item.text.toLowerCase().includes(query.toLowerCase())
    );
  }, [items, query]);
  
  // 记忆化回调函数
  const handleItemClick = useCallback((id) => {
    console.log('Item clicked:', id);
  }, []); // 空依赖数组，函数永远不会改变
  
  return (
    <ul>
      {filteredItems.map(item => (
        <SearchItem
          key={item.id}
          item={item}
          onClick={handleItemClick}
        />
      ))}
    </ul>
  );
}
```

## 5. 路由管理

### 5.1 React Router
```jsx
import { 
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate
} from 'react-router-dom';

// 路由配置
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />}>
          <Route path=":id" element={<UserDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

// 路由参数
function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  return (
    <div>
      <h2>User {id}</h2>
      <button onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
}
```

## 6. 测试

### 6.1 Jest 和 React Testing Library
```jsx
// 组件测试
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter', () => {
  test('renders initial count', () => {
    render(<Counter initialCount={0} />);
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });
  
  test('increments count when button is clicked', () => {
    render(<Counter initialCount={0} />);
    fireEvent.click(screen.getByText('Increment'));
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });
});

// 异步测试
test('loads and displays user data', async () => {
  render(<UserProfile userId="1" />);
  
  // 等待加载状态消失
  expect(screen.getByText('Loading...')).toBeInTheDocument();
  
  // 等待数据显示
  const userName = await screen.findByText('John Doe');
  expect(userName).toBeInTheDocument();
});
```

## 7. 最佳实践

### 7.1 项目结构
```
src/
  ├── components/        # 共享组件
  ├── pages/            # 页面组件
  ├── hooks/            # 自定义 hooks
  ├── services/         # API 服务
  ├── store/            # 状态管理
  ├── utils/            # 工具函数
  ├── styles/           # 样式文件
  └── App.js            # 根组件
```

### 7.2 性能优化建议
1. 合理使用 React.memo 避免不必要的重渲染
2. 使用 useMemo 和 useCallback 优化性能
3. 使用虚拟列表处理长列表
4. 图片懒加载
5. 代码分割和懒加载
6. 合理的状态管理方案

### 7.3 代码规范
```jsx
// 1. 组件命名使用大驼峰
function UserProfile() { }

// 2. 事件处理函数命名
const handleClick = () => { }

// 3. 属性展开
function Component({ className, ...props }) {
  return <div className={className} {...props} />;
}

// 4. 条件渲染
function Component({ isVisible }) {
  if (!isVisible) return null;
  
  return <div>Content</div>;
}
```

这个文档涵盖了：
1. React 基础知识
2. Hooks 的使用
3. 状态管理方案
4. 性能优化技巧
5. 路由配置
6. 测试方法
7. 最佳实践

建议按照这个顺序学习，并在实践中不断巩固。
