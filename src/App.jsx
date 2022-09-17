import { NewTodo } from './components/NewTodo';
import { TodoList } from './components/TodoList';
import { Filters } from './components/Filters';
import { ModelApp } from './components/ModelApp';

import './index.css';

export default function App() {
    return (
        <>
            <div className='container-app'>
                <h1>React-Redux Todo</h1>
                <NewTodo />
                <Filters />
            </div>
            <div className='container-todo'>
                <TodoList />
            </div>
            <ModelApp />
        </>
    );
}
