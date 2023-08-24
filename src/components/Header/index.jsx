import { Container, CartCount } from "./styles";
import { useState } from "react";
import {FiHexagon, FiLogOut, FiMenu, FiSearch} from "react-icons/fi"
import {PiReceipt} from "react-icons/pi"
import { Input } from "../Input";
import { Button } from "../Button";

export function Header(){
    const [cartItemCount, setCartItemCount] = useState(0);

    return(
        <Container>
            <FiMenu className="menu" size={30} />
                <div className="logo">
                    <FiHexagon size={30} color="#065E7C" fill="#065E7C" />
                    <h1>food explorer
                        <span>admin</span>
                    </h1>
                </div>
                <div className="search">
                    <Input icon={FiSearch} placeholder="Busque por pratos ou ingredientes" />
                </div>
                <div className="userReceipt">
                <Button icon={PiReceipt} title="Pedidos (0)" style={{ fontSize: "14px" }} />
                </div>
                <div className="userReceiptMob">
                <PiReceipt size={30} />
                {cartItemCount >= 0 && <CartCount>{cartItemCount}</CartCount>}    
                </div>
                <div className="logout">
                <FiLogOut size={30} />
                </div>
        </Container>
    )
}