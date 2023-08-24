import { Container, Form, ProductImage, Name, Category, Ingredients, Price, Description } from "./styles";
import { FiChevronLeft, FiUpload, FiChevronDown } from "react-icons/fi";
import { Input2 } from "../../components/Input2";
import { TextArea } from "../../components/TextArea";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { IngredientItem } from "../../components/IngredientItem";
import { Footer } from "../../components/Footer";


export function New() {
    return(
        <Container>
            <Header />
            <main>
                <div>
                    <FiChevronLeft size={30} />
                    <ButtonText title="voltar" style={{ fontSize: "15px" }} />
                </div>
                <Form>
                    <h1>Novo prato</h1>
                    <div className="upperSide">
                    <ProductImage>
                    <label htmlFor="productimage"><span>Imagem do prato</span></label>
                    <div className="inputWrapper">
                        <input id="productimage" type="file"></input>
                        <label htmlFor="productimage" className="fileLabel">
                            <FiUpload size={24} />
                            Selecione Imagem
                        </label>
                    </div>
                    </ProductImage>
                    <Name>
                    <label htmlFor="nameproduct"><span>Nome</span></label>
                    <Input2 id="nameproduct" placeholder="Ex.: Salada Ceasar" type="text" />    
                    </Name>
                    <Category>
                    <label htmlFor="categorySelect">Categoria</label>
                    <div className="inputWrapper">
                        <select id="categorySelect">
                            <option value="refeicoes">Refeições</option>
                            <option value="sobremesas">Sobremesas</option>
                            <option value="pratoPrincipal">Prato Principal</option>
                        </select>
                        <FiChevronDown size={20} className="selectArrow" />
                    </div>
                    </Category>
                    </div>
                    <div className="lowerSide">
                    <Ingredients>
                        <label htmlFor="ingredients"><span>Ingredientes</span></label>
                        <div className="ingredientRow">
                        <IngredientItem value="Pão Naan" />
                        <IngredientItem id="ingredients" isNew placeholder="Adicionar" />
                        </div>
                    </Ingredients>
                    <Price>
                        <label htmlFor="price"><span>Preço</span></label>
                        <Input2 id="price" placeholder="R$ 00,00" type="number" />
                    </Price>
                    </div>
                    <Description>
                        <label htmlFor="description"><span>Descrição</span></label>
                        <TextArea id="description" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" type="text" />
                    </Description>
                    <div className="saveButton">
                        <Button title="Salvar alterações" />
                    </div>
                </Form>
            </main>
            <div className="footer">
            <Footer />
            </div>
        </Container>
    )
}