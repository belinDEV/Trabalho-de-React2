import axios from 'axios';
import { SetStateAction, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Button, Card, Container, DFlex, H1, H1Title, H2 } from "./styles";

interface IContato {
  "id": string,
  "nome": string,
  "telefone": string,
  "email": string,
  "cidade": number,
  "mensagem": string,
}


export const AdminContato = () => {
  const { id } = useParams();
  const [contato, setContato] = useState<IContato>()

  useEffect(() => {
    axios.get('http://localhost:3000/contatos?id=' + id).then((res: { data: SetStateAction<IContato | undefined>[]; }) => {
      setContato(res.data[0])
    }).catch((error) => {
      console.log(error)
    })
  }, [id])

  return (
    <>
      <Container>
        {
          contato ?
            <>
              <DFlex>
                <H1>Nome de</H1><H1Title>{contato.nome}</H1Title>
              </DFlex>
              <Card>
                <DFlex>
                  <H2>Telefone:</H2><p>{contato.telefone}</p>
                </DFlex>
                <DFlex>
                  <H2>Email:</H2><p>{contato.email}</p>
                </DFlex>
                <DFlex>
                  <H2>Cidade:</H2><p>{contato.cidade}</p>
                </DFlex>
                <DFlex>
                  <H2>Mensagem:</H2><p>{contato.mensagem}</p>
                </DFlex>
                <a href="/admin/contatos"><Button>Voltar</Button></a>
              </Card>
            </>
            :
            <h2 style={{ color: 'red' }}>Contao não encontrtado</h2>
        }
      </Container>
    </>
  )
}
