import { Flex, Heading } from '@chakra-ui/react';
import { useContextTodo } from '@/context/todo';
import { TodoItem } from '@/components/Todo/TodoItem';
import styles from './styles';

const TodoList = () => {
  const { todos } = useContextTodo();

  return (
    <Flex sx={styles.wrapper}>
      <Heading>{todos.length} task(s) remaining</Heading>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          name={todo.name}
          description={todo.description}
          checked={todo.checked}
        />
      ))}
    </Flex>
  );
};

export default TodoList;
