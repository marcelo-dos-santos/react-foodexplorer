import { Container } from "./styles"

export function MenuButtonText({title, isActive = false, ...rest}){
    return (
        <Container type="button" isActive={isActive} {...rest}>
            {title}
        </Container>
    )
}