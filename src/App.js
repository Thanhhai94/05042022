import './App.css';
import Input from './component/Input';
import { Provider } from 'react-redux';
import store from './redux/store';
import TodoList from './component/todoList';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
        <Input />
        <TodoList />
    </div>
    </Provider>
  );
}

export default App; 
