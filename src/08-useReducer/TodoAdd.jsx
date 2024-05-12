import PropTypes from 'prop-types';
import { useForm } from '../hooks/useForm';

export const TodoAdd = ({onNewTodo}) => {

    const {description, onInputChange, onResetForm } = useForm({
        description: ''
    });

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (description.length === 0 ) return;

        const newTodo = {
            id: new Date().getTime() * 3,
            name: description,
            done: false
        }

        onNewTodo(newTodo);
        onResetForm();
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input onChange={onInputChange} value={description} type="text" name="description" id="" placeholder="¿Qué hay que hacer" className="form-control" />
            <button type="submit" className="btn btn-outline-primary mt-1">Agregar</button>
        </form>
    )
}

TodoAdd.propTypes = {
    onNewTodo: PropTypes.func.isRequired
}