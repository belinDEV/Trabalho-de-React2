import React from "react";
import styled from "styled-components";

export const Container = styled.div`
background-position: center;
background-size: cover;
background-repeat: no-repeat;
height: 100vh;
background-image: url(https://img.freepik.com/fotos-gratis/fones-de-ouvido-na-configuracao-de-jogos-de-cadeira_23-2149829131.jpg);
`;
export const ContainerLinear = styled.div`
  background-color: #000000e0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  `;

export const Label = styled.label`
  color: #fff;
  font-weight: 800;
  font-size: 12pt;
`;
export const Input = styled.input`
  width: 100%;
  color: #fff;
  font-weight: 800;
  font-size: 14pt;
  background: transparent;
  outline: none;
  border: none;
  border-bottom: solid 2px #fff;
  margin-bottom: 2rem;
  height: 2rem;
`;
export const Select = styled.select`
  width: 100%;
  color: #fff;
  font-weight: 800;
  font-size: 20pt;
  background: red;
  border-bottom: solid 2px #fff;
  margin-bottom: 4rem;
  height: 3rem;
`;
export const Textarea = styled.textarea`
  width: 100%;
  color: #fff;
  font-weight: 800;
  font-size: 14pt;
  background: transparent;
  outline: none;
  border: none;
  border-bottom: solid 2px #fff;
  margin-bottom: 2rem;
  resize: none;
`;
export const Title = styled.h1`
  color: #fff;
  font-weight: 900;
  font-size: 26pt;
  text-align: center;

`
export const Botao = styled.button`
  color: #fff;
  font-weight: 700;
  font-size: 16pt;
  text-align: center;
  background: transparent;
  padding: 10px 24px;
  border: solid 2px #fff;
  border-radius: 4px;

`
