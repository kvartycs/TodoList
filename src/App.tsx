import { Header } from '@/components/Header';
import { TodoList } from '@/components/Todo/TodoList';
import { AddTodo } from '@/components/Todo/AddTodo';

const App = () => (
  <>
    <Header />
    <AddTodo />
    <TodoList />
  </>
);

export default App;
