import { FC, memo, useMemo, useState, ReactNode } from 'react';

import TodoContext from './context';
import { ITodo } from '@/types/todo';
import data from '@/mocks/todos';

interface Props {
  children: ReactNode;
}

const TodoProvider: FC<Props> = memo(({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>(data);

  const value = useMemo(
    () => ({
      todos,
      setTodos,
    }),
    [todos],
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
});

export default TodoProvider;
