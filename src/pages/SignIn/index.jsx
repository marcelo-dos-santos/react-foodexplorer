import { Container, Logo, Form, Login, Password, Inputs } from "./styles";
import { FiHexagon } from "react-icons/fi";
import { StyledInputs } from "../../components/StyledInputs";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignIn() {
    return(
        <Container>
            <Form>
                <Logo><FiHexagon /><span>food explorer</span></Logo>
                <Inputs>
                <h1>Faça Login</h1>
                <Login>
                <h1>Email</h1>
                <StyledInputs placeholder="Exemplo: exemplo@exemplo.com.br" type="text" />
                </Login>
                <Password>
                <h1>Senha</h1>
                <StyledInputs placeholder="No mínimo 6 caracteres" type="password" />
                </Password>
                <Button title="Entrar" />
                <div className="createAccount">
                <ButtonText title="Criar uma conta" style={{ fontSize: "14px" }} />
                </div>
                </Inputs>
            </Form>
        </Container>
    )
}