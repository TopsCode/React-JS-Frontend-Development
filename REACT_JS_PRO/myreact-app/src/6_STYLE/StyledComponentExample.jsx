import React from 'react'
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

const Button = styled.button`
  background-color: purple;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
`;

export default function StyledComponentExample() 
{ 
  return (
    <div>
        <Button>Hello</Button>
        <Title>Hii</Title>
    </div>
  )
}
