import { Container } from "./styles";
import { FiSearch } from "react-icons/fi";
import { HeaderMenu } from "../../components/HeaderMenu";
import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";
import { Footer } from "../../components/Footer";


export function Menu() {
  return(
    <Container>
      <HeaderMenu />
        <main>
          <div className="search">
            <Input icon={FiSearch} placeholder="Busque por pratos ou ingredientes" />
          </div>
          <div className="adminNew">
            <ButtonText title="Novo Prato" />
          </div>
          <div className="menuoptions">
            <ButtonText title="Sair" />
          </div>
        </main>
      <Footer />
    </Container>
  )
}