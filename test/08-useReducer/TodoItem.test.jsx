import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Test in <TodoItem />', () => { 

    const todo = {
        id: 1,
        name: 'Piedra del alma',
        done: false
    }

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('should show todos', () => {
        render(
            <TodoItem
                todo={todo}
                onDeleteTodo={onDeleteTodoMock}
                onToggleTodo={onToggleTodoMock}
            />
        );

        screen.debug();

        const liElement = screen.getByRole('listitem');
        const spanElement = screen.getByLabelText('span');

        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');
        expect(spanElement.className).toBe('align-self-center  ');
        expect(spanElement.className).not.toContain('text-decoration-line-through');
    });

    test('should show todos completed', () => {

        todo.done = true;

        render(
            <TodoItem
                todo={todo}
                onDeleteTodo={onDeleteTodoMock}
                onToggleTodo={onToggleTodoMock}
            />
        );

        screen.debug();

        const spanElement = screen.getByLabelText('span');

        expect(spanElement.className).toBe('align-self-center text-decoration-line-through ');
    });

    test('should call toggleTodo when do click', () => { 
        render(
            <TodoItem
                todo={todo}
                onDeleteTodo={onDeleteTodoMock}
                onToggleTodo={onToggleTodoMock}
            />
        );

        screen.debug();

        const spanElement = screen.getByLabelText('span');

        fireEvent.click(spanElement);

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
     })

     test('should call deleteTodo when do click', () => { 
        render(
            <TodoItem
                todo={todo}
                onDeleteTodo={onDeleteTodoMock}
                onToggleTodo={onToggleTodoMock}
            />
        );

        screen.debug();

        const button = screen.getByRole('button', { name: 'Borrar' });

        fireEvent.click(button);

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
     })
})