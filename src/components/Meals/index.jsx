import { Container, Quantity, BuyButton, MealDetails } from "./styles";
import { FiChevronRight, FiHeart, FiMinus, FiEdit, FiPlus } from "react-icons/fi";
import { Button } from "../Button";
import productImage from "../../assets/saladaravanello.png"

export function Meals({title, price, ...rest}) {
    return(
        <Container {...rest}>
            <MealDetails>
                <img src={productImage} alt="" />
                <h1>{title} <FiChevronRight size={15} /></h1>
                <div className="details">
                    <span>Rabanaetes, folhas verdeds e molho agridoce sapilcados com gergelim.</span>
                </div>
                <div className="price">
                    <span>R$ {price}</span>
                </div>
            </MealDetails>
            <div className="center">
                <Quantity>
                    <FiMinus />
                    <span>01</span>
                    <FiPlus />
                </Quantity>
                <BuyButton>
                    <Button title="Incluir" />
                </BuyButton>
            </div>
            <FiHeart />
            <div className="adminEdit">
            <FiEdit />
            </div>
        </Container>
    )
}