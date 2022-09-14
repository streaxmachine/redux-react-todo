import { useSelector, useDispatch } from 'react-redux';
import { selectActiveFilter } from '../store/filters/filters-selectors';
import { setFilter } from '../store/filters/filters-actions';
import { removeCompleted } from '../store/todos/todos-actions';

const Filters = () => {
    const dispatch = useDispatch();
    const activeFilter = useSelector(selectActiveFilter);

    return (
        <div className='btn-group'>
            <button
                onClick={() => dispatch(setFilter('all'))}
                className={
                    'btn ' +
                    (activeFilter === 'all' ? 'btn-light' : 'btn-primary')
                }
            >
                all
            </button>
            <button
                className={
                    'btn ' +
                    (activeFilter === 'active' ? 'btn-light' : 'btn-primary')
                }
                onClick={() => dispatch(setFilter('active'))}
            >
                active
            </button>
            <button
                className={
                    'btn ' +
                    (activeFilter === 'completed' ? 'btn-light' : 'btn-primary')
                }
                onClick={() => dispatch(setFilter('completed'))}
            >
                completed
            </button>
            <button className='btn' onClick={() => dispatch(removeCompleted())}>
                clear completed
            </button>
        </div>
    );
};

export { Filters };
