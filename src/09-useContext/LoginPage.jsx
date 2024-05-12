import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const LoginPage = () => {

  const { user, setuser } = useContext(UserContext);
  return (
    <>
        <h1>LoginPage</h1>
        <hr />

        { JSON.stringify(user, null, 2)}

        <button onClick={() => setuser({id: 123, name: 'Hank'})} className="btn btn-primary">Set User</button>
    </>
  )
}
