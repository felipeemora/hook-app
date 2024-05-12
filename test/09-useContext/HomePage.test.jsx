const { render, screen } = require("@testing-library/react")
const { HomePage } = require("../../src/09-useContext/HomePage")
const { UserContext } = require("../../src/09-useContext/context/UserContext")

describe('test in <HomePage />', () => {
    test('should show component without use', () => {
        render(
            <UserContext.Provider value={{user: null}}>
                <HomePage />
            </UserContext.Provider>
        );

        const h1 = screen.getByRole('heading', { level: 1 }).textContent;
        expect(h1).toBe('HomePage ')
    })

    test('should show component with user', () => {
        render(
            <UserContext.Provider value={{user: { name: 'Hank' }}}>
                <HomePage />
            </UserContext.Provider>
        );

        const h1 = screen.getByRole('heading', { level: 1 }).textContent;
        expect(h1).toBe('HomePage Hank')
    })
})