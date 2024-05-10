import Proptypes from 'prop-types';
import { memo } from 'react';

export const Hijo = memo(({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})

Hijo.propTypes = {
    numero: Proptypes.number.isRequired,
    incrementar: Proptypes.func.isRequired
}

Hijo.displayName = 'Hijo';