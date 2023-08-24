import { Container, Logo, Form, Email, Password, Name, Inputs } from "./styles";
import { FiHexagon } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignUp() {
    return(
        <Container>
            <Form>
                <Logo><FiHexagon /><span>food explorer</span></Logo>
                <Inputs>
                <h1>Crie sua conta</h1>
                <Name>
                <h1>Nome</h1>
                <Input placeholder="Exemplo: exemplo@exemplo.com.br" type="text" />
                </Name>
                <Email>
                <h1>Email</h1>
                <Input placeholder="Exemplo: exemplo@exemplo.com.br" type="text" />
                </Email>
                <Password>
                <h1>Senha</h1>
                <Input placeholder="No mínimo 6 caracteres" type="password" />
                </Password>
                <Button title="Criar conta" />
                <div className="createAccount">
                <ButtonText title="Já tenho uma conta" style={{ fontSize: "14px" }} />
                </div>
                </Inputs>
            </Form>
        </Container>
    )
}