import { createContext, SetStateAction, Dispatch } from 'react';
import { ITodo } from '@/types/todo';
import data from '@/mocks/todos';

type InitialValue = {
  todos: ITodo[];
  setTodos: Dispatch<SetStateAction<ITodo[]>>;
};

const initialValue: InitialValue = {
  todos: data,
  setTodos: () => {},
};

export default createContext(initialValue);
