/* eslint-disable no-param-reassign */
import { useState } from 'react';

import { Flex, Button, Text, Input, Box } from '@chakra-ui/react';
import { useContextTodo } from '@/context/todo';
import { ITodo } from '@/types/todo';

import styles from './styles';

const TodoItem = ({ name, description, checked, id }: ITodo) => {
  const { setTodos, todos } = useContextTodo();
  const [todoIdForEdit, setTodoIdForEdit] = useState<null | number>(null);

  const [titleValue, setTitleValue] = useState<string>('');
  const [descriptionValue, setDescriptionValue] = useState<string>('');

  const onClickDelete = () => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onClickEdit = () => {
    setTodoIdForEdit(id);
  };

  const onClickSave = () => {
    const newTodo = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.name = titleValue;
        todo.description = descriptionValue;
      }
      return todo;
    });
    setTodos(newTodo);
    setTodoIdForEdit(null);
  };

  const onClickChecked = () => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) return { ...todo, checked: !todo.checked };
        return todo;
      }),
    );
  };

  return todoIdForEdit === id ? (
    <Flex sx={styles.wrapper} gap={10}>
      <Box>
        <Text>name</Text>
        <Input
          type="text"
          placeholder="name"
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
        />
      </Box>
      <Box>
        <Text>description</Text>
        <Input
          type="text"
          placeholder={description}
          value={descriptionValue}
          onChange={(e) => setDescriptionValue(e.target.value)}
        />
      </Box>

      <Button onClick={onClickSave}>Save</Button>
    </Flex>
  ) : (
    <Flex sx={styles.wrapper}>
      <Text textDecor={checked ? 'lineThrough' : ''} onClick={onClickChecked}>
        {name}
      </Text>
      <Text>{description}</Text>
      <Flex justify="flex-end" gap={5}>
        <Button onClick={onClickEdit}>Edit</Button>
        <Button onClick={onClickDelete}>Delete</Button>
      </Flex>
    </Flex>
  );
};

export default TodoItem;
