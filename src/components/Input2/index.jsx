import { Container } from "./styles";

export function Input2({icon: Icon, ...rest}) {
    return(
        <Container>
            {Icon && <Icon size={20}/>}
            <input {...rest} />
        </Container>
    )
}