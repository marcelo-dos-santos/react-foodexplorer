import { Container } from "./styles";
import { FiPlus, FiX } from 'react-icons/fi'

export function IngredientItem({isNew, value, onClick, ...rest}) {
    return(
        <Container isNew={isNew}>
            <input type="text" value={value} readOnly={!isNew} {...rest} />
            <button className={isNew ? 'button-add' : 'button-delete'} onClick={onClick} type="button">{isNew ? <FiPlus /> : <FiX />}</button>
        </Container>
    )
}