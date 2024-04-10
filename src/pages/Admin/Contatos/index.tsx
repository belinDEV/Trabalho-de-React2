import { FaEye } from "react-icons/fa";
import { Button, Container, H1, TBTr, THTh, THtr, Td } from "./styles";
import { useEffect, useState } from "react";
import axios, { AxiosError } from 'axios';
import { useNavigate } from "react-router-dom";


interface IContato {
  "id": number,
  "nome": string,
  "telefone": string,
  "email": string,
  "cidade": string,
  "mensagem": string,
}

export const AdminContatos = () => {


  const [dataContato, setContatoData] = useState<Array<IContato>>([])
  const navigate = useNavigate();

  useEffect(() => {

    axios.get('http://localhost:3000/contatos')
      .then((res) => {
        setContatoData(res.data)
      })
      .catch((err: AxiosError) => {
        console.log(err)
      })

  }, [])
  return (
    <>
      <Container>
        <H1>Contatos</H1>
        <table>
          <thead>
            <THtr>
              <THTh style={{
                minWidth: 300
              }}>
                Nome
              </THTh>
              <THTh style={{
                minWidth: 300
              }}>
                Telefone
              </THTh>
              <THTh style={{
                minWidth: 300
              }}>
                Email
              </THTh>
              <THTh style={{
                minWidth: 300
              }}>
                Cidade
              </THTh>
              <THTh style={{
                minWidth: 300
              }}>
                Ações
              </THTh>
            </THtr>
          </thead>
          <tbody>
            {
              dataContato.map((contato) => {
                return (
                  <TBTr>
                    <Td width={300}>
                      {contato.nome}
                    </Td>
                    <Td>{contato.telefone}</Td>
                    <Td>{contato.email}</Td>
                    <Td>{contato.cidade}</Td>
                    <Td><Button onClick={() => { navigate('/admin/contato/' + contato.id)}} type="button"><FaEye /></Button></Td>
                  </TBTr>
                )
              })
            }

          </tbody>
        </table>
      </Container>
    </>
  )
};
