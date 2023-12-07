import { useState } from 'react';
import { Box, Text, Input, Button, Flex } from '@chakra-ui/react';

import { useContextTodo } from '@/context/todo';

import styles from './styles';

const AddTodo = () => {
  const { todos, setTodos } = useContextTodo();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const onClickAdd = () => {
    setTodos([
      ...todos,
      {
        id: Math.random(),
        name,
        description,
        checked: false,
      },
    ]);
    setName('');
    setDescription('');
  };

  return (
    <Flex sx={styles.wrapper}>
      <Flex gap={10}>
        <Box>
          <Text>name</Text>
          <Input value={name} onChange={(e) => setName(e.target.value)} type="text" />
        </Box>
        <Box>
          <Text>description</Text>
          <Input value={description} onChange={(e) => setDescription(e.target.value)} type="text" />
        </Box>
      </Flex>
      <Button onClick={onClickAdd}>Add</Button>
    </Flex>
  );
};

export default AddTodo;
