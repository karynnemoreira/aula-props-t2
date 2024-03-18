import React from "react"
import styled from "styled-components"


const Card = styled.div`
border: solid red;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
width: 25vw;
height: 90vh;
img{
    width: 50%;
}
`


function ComponenteComProps({ nome, idade, brasileira, frase, children, imagem }) {
    return (
    
           <Card>
            <h2> Nome: {nome} </h2>
            <h2> Idade: {idade} </h2>
            <h3> Você é brasileira? {brasileira}  </h3>
            <p> Frase de impacto: {frase} </p>
            <img src={imagem} alt="" />
            {children}
        </Card>
        
     
    )
}

export default ComponenteComProps