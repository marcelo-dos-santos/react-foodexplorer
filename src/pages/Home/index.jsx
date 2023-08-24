import { Container, Content ,Banner, TextContainer, Carousel, CarouselItem } from "./styles";
import background from "../../assets/pngegg2.png";
import background2 from "../../assets/pngegg1.png";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Meals } from "../../components/Meals"; 
import { Footer } from "../../components/Footer";

export function Home() {
    return(
        <Container>
          <Header />
            <Content>
                <Banner>
                    <img src={background} class="mobile" alt="Imagem de ingredientes" />
                    <img src={background2} class="desktop" alt="Imagem de ingredientes" />
                    <TextContainer>
                        <h1>Sabores inigualáveis</h1>
                        <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
                    </TextContainer>
                </Banner>
                <Section title="Refeições">
                <Carousel>
                    <CarouselItem>
                        <Meals title="Salada Ravanello" price="49,97" />
                    </CarouselItem>
                    <CarouselItem>
                        <Meals title="Salada Ravanello" price="49,97" />
                    </CarouselItem>
                    <CarouselItem>
                        <Meals title="Salada Ravanello" price="49,97" />
                    </CarouselItem>
                    <CarouselItem>
                        <Meals title="Salada Ravanello" price="49,97" />
                    </CarouselItem>
                    <CarouselItem>
                        <Meals title="Salada Ravanello" price="49,97" />
                    </CarouselItem>
                    <CarouselItem>
                        <Meals title="Salada Ravanello" price="49,97" />
                    </CarouselItem>
                </Carousel>
                </Section>
                <Section title="Pratos principais">
                <Carousel>
                    <CarouselItem>
                        <Meals title="Salada Ravanello" price="49,97" />
                    </CarouselItem>
                    <CarouselItem>
                        <Meals title="Salada Ravanello" price="49,97" />
                    </CarouselItem>
                    <CarouselItem>
                        <Meals title="Salada Ravanello" price="49,97" />
                    </CarouselItem>
                </Carousel>
                </Section>
                <Section title="Sobremesas">
                <Carousel>
                    <CarouselItem>
                        <Meals title="Salada Ravanello" price="49,97" />
                    </CarouselItem>
                    <CarouselItem>
                        <Meals title="Salada Ravanello" price="49,97" />
                    </CarouselItem>
                    <CarouselItem>
                        <Meals title="Salada Ravanello" price="49,97" />
                    </CarouselItem>
                </Carousel>
                </Section>
            </Content>
            <Footer />
        </Container>
    )
}