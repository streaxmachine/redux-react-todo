import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../store/todos/todos-actions';
import { changeTodo } from '../store/todos/todos-actions';

export const TodoItem = (props) => {
    const dispatch = useDispatch();
    let { id, title, completed } = props;
    const [value, setValue] = useState(title);
    const [edit, setEdit] = useState(false);
    const [done, setDone] = useState(completed);

    let classNames = 'todo-list-item bottom-panel';
    if (done) {
        classNames += ' done';
    }

    const onFormChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(changeTodo(value, id));
        setEdit(!edit);
    };

    const cancelEdit = () => {
        setValue(title);
        setEdit(!edit);
    };

    const onDone = () => {
        dispatch(toggleTodo(id));
        setDone(!done);
    };

    if (edit) {
        return (
            <span>
                <form onSubmit={handleSubmit} className='todo-list-item'>
                    <input
                        className='on-change-input'
                        type='text'
                        name='title'
                        placeholder='new todo'
                        value={value}
                        onChange={onFormChange}
                    />
                    <button type='submit' className='btn btn-sm float-right'>
                        <i className='fa fa-pencil' aria-hidden='true' />
                    </button>
                </form>
                <button className='btn btn-sm float-right' onClick={cancelEdit}>
                    <i className='fa fa-ban' aria-hidden='true' />
                </button>
            </span>
        );
    }

    return (
        <span className='list-group-item'>
            <span className='todo-list-item bottom-panel'>
                <span className={classNames} onClick={() => setEdit(!edit)}>
                    {value}{' '}
                </span>

                <span className='btn-span'>
                    <button
                        type='button'
                        className='btn btn-outline-success btn-sm float-right'
                        onClick={onDone}
                    >
                        <i className='fa fa-check' />
                    </button>
                    <button
                        type='button'
                        className='btn btn-outline-danger btn-sm float-right'
                        onClick={() => dispatch(removeTodo(id))}
                    >
                        <i className='fa fa-trash-o' />
                    </button>
                </span>
            </span>
        </span>
    );
};
