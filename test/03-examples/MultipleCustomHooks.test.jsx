import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('test in MultipleHooks', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should show default values', () => {
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        })
        render(<MultipleCustomHooks />)
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText('Información de Pokemon'));;
    });

    test('should show a pokemon', () => {
        const mockData = {
            id: 123,
            name: 'Charizard',
            sprites: {
                front_default: 'http://localhost:8080/image-1',
                front_shiny: 'http://localhost:8080/image-2',
                back_default: 'http://localhost:8080/image-3',
                back_shiny: 'http://localhost:8080/image-4',
            }
        }
        const texth2 = `# ${mockData.id} - ${mockData.name}`
        useFetch.mockReturnValue({
            data: mockData,
            isLoading: false,
            hasError: null
        })
        render(<MultipleCustomHooks />)
        expect(screen.getAllByRole('img').length).toBe(4);
        expect(screen.getByRole('heading', { level: 2 }).textContent).toBe(texth2);
    })

    test('should call increment counter', () => {
        const mockData = {
            id: 123,
            name: 'Charizard',
            sprites: {
                front_default: 'http://localhost:8080/image-1',
                front_shiny: 'http://localhost:8080/image-2',
                back_default: 'http://localhost:8080/image-3',
                back_shiny: 'http://localhost:8080/image-4',
            }
        }
        useFetch.mockReturnValue({
            data: mockData,
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole('button', { name: 'Siguiente'});
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();
    });
});