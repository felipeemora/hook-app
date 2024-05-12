import PropTypes from 'prop-types';
import { UserContext } from './UserContext';
import { useState } from 'react';


export const UserProvider = ({children}) => {

    const [user, setuser] = useState();

  return (
    <UserContext.Provider value={{user, setuser}}>
        {children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
    children: PropTypes.any.isRequired
}

