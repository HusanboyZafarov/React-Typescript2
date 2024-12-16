import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { CACHE_KEY_TODOS } from '../constants';
import { Todo } from './useTodos';

interface AddTodoContext {
  previousTodos: Todo[];
}

const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient();

  return useMutation<Todo, Error, Todo, AddTodoContext>(
    (todo: Todo) =>
      axios
        .post<Todo>('https://jsonplaceholder.typicode.com/todosx', todo)
        .then((res) => res.data),
    {
      onMutate: async (newTodo: Todo) => {
        const previousTodos =
          queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];

        queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [
          newTodo,
          ...todos
        ]);

        onAdd();
        return { previousTodos };
      },
      onSuccess: (savedTodo: Todo, newTodo: Todo) => {
        queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
          todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
        );
      },
      onError: (error, newTodo, context) => {
        if (context?.previousTodos) {
          queryClient.setQueryData<Todo[]>(
            CACHE_KEY_TODOS,
            context.previousTodos
          );
        }
      }
    }
  );
};

export default useAddTodo;
