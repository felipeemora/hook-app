import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('test in todoReducer', () => {

    const initialState = [{
        id: 1,
        name: 'demo',
        done: false
    }]

    test('should return initial state', () => {
        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);
    });

    test('should add todo', () => { 
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                name: 'new demo',
                done: false
            }
        }
        
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    });

    test('should delete a todo', () => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        }
        
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);
    });

    test('should do toggle in todo', () => { 
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        }
        
        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBeTruthy();
    })
});