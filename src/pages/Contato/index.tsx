import { useEffect, useState } from "react";
import axios from "axios";
import { Menu } from "../../components/Menu";
import { Botao, Container, ContainerLinear, Input, Select, Textarea, Title } from "./styles";

export const Contato = () => {
  const initialState = {
    nome: "",
    telefone: "",
    email: "",
    cidade: "umuarama", // Definindo um valor padrão para o campo de seleção
    mensagem: ""
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/contatos", formData);
      console.log("Resposta do servidor:", response.data);
      // Limpar os campos após o envio bem-sucedido
      setFormData(initialState);
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
    }
  };

  useEffect(() => {
  }, []);

  return (
    <>
      <Menu />
      <Container>
        <ContainerLinear>
          <form onSubmit={handleSubmit}>
            <Title>Fale Conosco</Title>
            <Input
              required
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Digite seu nome..."
            />
            <Input
              required
              type="text"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              placeholder="Digite seu telefone..."
            />
            <Input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Digite seu email..."
            />
            <Select
              name="cidade"
              value={formData.cidade}
              onChange={handleChange}
            >
              <option value='umuarama'>Umuarama</option>
              <option value='maringa'>Maringá</option>
              <option value='foz-do-iguacu'>Foz do Iguaçu</option>
              <option value='londrina'>Londrina</option>
              <option value='perobal'>Perobal</option>
              <option value='cascavel'>Cascavel</option>
            </Select>
            <Textarea
              required
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              placeholder="Digite sua mensagem..."
            />
            <Botao type="submit" title="Enviar">Enviar</Botao>
          </form>
        </ContainerLinear>
      </Container>
    </>
  );
};
