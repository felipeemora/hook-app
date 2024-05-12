import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/LoginPage";
const { UserContext } = require("../../src/09-useContext/context/UserContext")


describe('test in <LoginPage />', () => {
    test('should render default values without user', () => {
        render(
            <UserContext.Provider value={{user: null}}>
                <LoginPage />
            </UserContext.Provider>
        )

        const h1 = screen.getByRole('heading', { level: 1 }).textContent;
        expect(h1).toBe('LoginPage')
    });

    test('should call setUser when click button', () => {

        const setUser = jest.fn();

        render(
            <UserContext.Provider value={{user: null, setuser: setUser}}>
                <LoginPage />
            </UserContext.Provider>
        )

        const button = screen.getByRole('button', { name: 'Set User' });
        fireEvent.click(button);

        expect(setUser).toHaveBeenCalledWith({id: 123, name: 'Hank'})
    });
});