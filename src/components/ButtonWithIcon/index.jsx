import { Container } from "./styles";

export function ButtonWithIcon({title, loading = false, icon: Icon,...rest}) {
    return(
        <Container type="button" disabled={loading} {...rest} >
            {Icon && <Icon size={16} />}
            { loading ? 'Carregando...' : title}
        </Container>
    )
}