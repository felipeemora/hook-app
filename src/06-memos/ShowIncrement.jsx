import Proptypes from 'prop-types';
import { memo } from 'react';

export const ShowIncrement = memo(({increment}) => {
    console.log('generar')
  return (
    <button className="btn btn-primary" onClick={() => increment()}>Incrementar</button>
  )
})

ShowIncrement.propTypes = {
    increment: Proptypes.func.isRequired
}

ShowIncrement.displayName = 'ShowIncrement';


