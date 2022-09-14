import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleTodos } from '../store/todos/todos-selectors';
import { selectActiveFilter } from '../store/filters/filters-selectors';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
    const activeFilter = useSelector(selectActiveFilter);
    const todos = useSelector((state) =>
        selectVisibleTodos(state, activeFilter)
    );

    return (
        <ul className='todo-list'>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <TodoItem
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                    />
                </li>
            ))}
        </ul>
    );
};
