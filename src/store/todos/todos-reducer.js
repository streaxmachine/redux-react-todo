import {
    TOGGLE_TODO,
    ADD_TODO,
    REMOVE_TODO,
    CLEAR_COMPLETED,
    CHANGE_TODO,
} from './todos-const';

let id = 0;

export const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO: {
            if (action.title.trim().length !== 0) {
                return [
                    ...state,
                    {
                        id: id++,
                        title: action.title,
                        completed: false,
                    },
                ];
            }

            return state;
        }

        case REMOVE_TODO: {
            return state.filter((todo) => todo.id !== action.id);
        }

        case CLEAR_COMPLETED: {
            return state.filter((todo) => todo.completed === false);
        }

        case TOGGLE_TODO: {
            return state.map((todo) =>
                todo.id === action.id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
        }

        case CHANGE_TODO: {
            return state.map((todo) =>
                todo.id === action.id ? { ...todo, title: action.title } : todo
            );
        }
        default: {
            return state;
        }
    }
};
