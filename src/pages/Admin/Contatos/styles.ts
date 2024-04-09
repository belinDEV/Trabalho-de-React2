import React from "react";
import styled from "styled-components";

export const Container = styled.div`
    padding-top: 5%;
    padding-left: 10%;
    padding-right: 10%;
`;
export const H1 = styled.h1`
    font-weight:900;

`;
export const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
    margin-top: 10px;
`;

export const THtr = styled.tr`
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 6px;
    text-align: center;
    background: #000;
    color: white;
`;
export const THTh = styled.th`
    padding: 6px;
    text-align: center;
    border: 1px solid #ddd;
`;

export const Td = styled.td`
    padding: 6px;
    text-align: center;
    border: 1px solid #ddd;
`;
export const TBTr = styled.tr`
    padding: 6px;
    text-align: center;
    border: 1px solid #ddd;

    :hover {
        background-color: #ddd;
    }
`;
export const Button = styled.button`
    background: #169d99;
    padding: 10px 22px;
    transition: 0.3s;
    border: none;
    border-radius: 4px;
    :hover {
        background: #070743;
    }
`;
