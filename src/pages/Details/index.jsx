import { Container, Content, ProductDetails, Ingredients, ProductSale, ProductImage, AllDetails, ProductName } from "./styles";
import productImage from "../../assets/saladaravanello.png";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { ButtonWithIcon } from "../../components/ButtonWithIcon";
import { Button } from "../../components/Button";
import { Tag } from "../../components/Tag";
import { Footer } from "../../components/Footer"
import { FiChevronLeft, FiMinus, FiPlus } from "react-icons/fi";
import { PiReceipt } from "react-icons/pi";


export function Details() {
    // Adiciona a classe details page pro meu body, trocando a cor do meu background.
    document.body.classList.add("details-page");

    return(
        <Container>
          <Header />
            <Content>
                <span>
                    <div>
                        <FiChevronLeft size={30} />
                        <ButtonText title="voltar" />
                    </div>
                </span>
                <ProductDetails>
                    <ProductImage>
                    <img src={productImage} alt="Product" />
                    </ProductImage>
                <AllDetails>
                    <ProductName>
                    <span>
                        <h2>Salada Ravanello</h2>
                        <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
                    </span>
                    </ProductName>
                <Ingredients>
                    <Tag title="alface" />
                    <Tag title="cebola" />
                    <Tag title="pão naan" />
                    <Tag title="pepino" />
                    <Tag title="rabanate" />
                    <Tag title="tomate" />
                </Ingredients>
                <ProductSale>
                    <FiMinus size={27} />
                    <span>01</span>
                    <FiPlus size={27} />
                    <div className="orderButton">
                    <ButtonWithIcon title="pedir ∙ R$ 25,00" icon={PiReceipt} />
                    </div>
                </ProductSale>
                <div className="adminEdit">
                    <Button title="Editar prato" />
                </div>
                </AllDetails>
                </ProductDetails>
            </Content>
            <Footer />
        </Container>
    )
}