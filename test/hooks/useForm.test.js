import { act, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"

describe('Test in useFormHook', () => {

    const initialForm = {
        name: 'Hank',
        email: 'hank@mail.com'
    }

    test('should return default values', () => {
        const { result } = renderHook(() => useForm(initialForm));
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function),
            onResetForm:  expect.any( Function)
          })
    });

    test('should change name in form', () => {
        const newName = 'Jeik';

        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;
        act(() => {
            onInputChange({ target: { name: 'name', value: newName}});
        });

        expect(result.current.name).toBe(newName);
        expect(result.current.formState.name).toBe(newName);

     });

     test('should reset form', () => {
        const newName = 'Jeik';

        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, onResetForm } = result.current;
        act(() => {
            onInputChange({ target: { name: 'name', value: newName}});
            onResetForm();
        });

        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);

     });
     
});