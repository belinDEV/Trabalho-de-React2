import { useParams } from "react-router-dom"
import { Menu } from "../../components/Menu"
import { Button, Col4, Col6, Input, Row, TextButton } from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";

//? O valor da na interface pode ser undefined
//"nome": string | undefined, mesma coisa de cima
interface IProduto {
    "id": number,
    "nome"?: string,
    "valor": string,
    "promo": string,
    "id_categoria": number,
    "promoNumber": string,
    "imagemg": string,
    "imagemp": string
}

export const Produtos = () => {

    const { id } = useParams();
    const [produto, setPorduto] = useState<IProduto>()

    useEffect(() => {
        axios.get('http://localhost:3000/produtos?id=' + id).then((res) => {
            setPorduto(res.data[0])
        }).catch((error) => {
            console.log(error)
        })
    }, [id])

    return (
        <>
            <Menu />
            <div style={{
                paddingLeft: '6%',
                paddingRight: '6%',
                marginTop: 20,
                marginBottom: 40,
            }}>
                {
                    produto ?
                        <>
                            <h1>Produto</h1>
                            <Row>
                                <Col4>
                                    <img
                                        style={{
                                            width: '100%',
                                        }}
                                        src={'https://raw.githubusercontent.com/profchines/imagens1Pitchau/main/Imagens1Pitchau/'
                                            +
                                            produto.imagemg
                                        }
                                    />
                                </Col4>
                                <Col6>
                                    <h3>{produto.nome}</h3>
                                    <p style={{ textDecoration: 'line-through', color: 'black' }}>R$ {produto.valor}</p>
                                    <p style={{ color: 'red' }}>R$ {produto.promo}</p>

                                    <form>
                                        <Input
                                            type="number"
                                            name="quantidade"
                                            defaultValue={1}
                                            required
                                        />
                                        <Button>
                                            <TextButton>
                                                Adicionar ao Carrinho
                                            </TextButton>
                                        </Button>
                                    </form>
                                </Col6>
                            </Row>
                        </>
                        :
                        <h2>Produto não encontrtado</h2>
                }

            </div>
        </>
    )
}