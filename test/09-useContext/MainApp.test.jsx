const { render, screen } = require("@testing-library/react")
const { MainApp } = require("../../src/09-useContext/MainApp")
const { MemoryRouter } = require("react-router-dom")

describe('Test in <MainApp />', () => {
    test('should show HomePage', () => {
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );

        expect(screen.getByText('HomePage')).toBeTruthy();
    })

    test('should show LoginPage', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );

        expect(screen.getByText('LoginPage')).toBeTruthy();
    });

    test('should show AboutPage', () => {
        render(
            <MemoryRouter initialEntries={['/about']}>
                <MainApp />
            </MemoryRouter>
        );

        expect(screen.getByText('AboutPage')).toBeTruthy();
    })
})