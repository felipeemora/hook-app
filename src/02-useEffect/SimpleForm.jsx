import { useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Hank3',
        email: 'hank@mail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    // useEffect(() => {
    //   console.log('Form State changed')
    // }, [formState]);

    // useEffect(() => {
    //     console.log('Email changed')
    //   }, [email]);
    

    return (
        <>
            <h1>Formulario simple</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            {
                (username === 'Hank') && <Message />
            }
            
            <input
                type="email"
                className="form-control mt-2"
                placeholder="email@mail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
        </>
    )
}
