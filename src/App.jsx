//PROPS: ABREVIAÇÃO DE PROPRIEDADES. EM REACT, SÃO UMA FORMA DE PASSAR DADOS DE UM COMPONENTE PAI PARA UM COMPONENTE FILHO NO MESMO REACT.

//PARA QUE SERVE O PROPS? 
//REUTILIZAÇÃO DE COMPONENTENTES; COMUNICAÇÃO ENTRE COMPONENTES; CUSTOMIZAÇÃO E CONFIGURAÇÕES.

import React from "react"
import Jigsaw from "./assets/jigsaw.jpg"
import Panico from "./assets/panico.jpg"
import Samara from "./assets/samara.jpg"
import ComponenteComProps from "./components/ComponenteComProps"
import {createGlobalStyle} from "styled-components" 
import styled from "styled-components"

const GlobalStyle = createGlobalStyle` 
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`
  
const Section = styled.section`
background-color: gold;
display: flex;
justify-content: space-evenly;
align-items:center;
`

function App() {
  return (
    <Section>
    <GlobalStyle/>
      <ComponenteComProps
        nome="Jogos mortais"
        idade="7 anos"
        brasileira="não"
        frase="Que comecem os jogos"
        imagem={Jigsaw}
      />

      <ComponenteComProps
        nome="Todo mundo em Pânico"
        idade="28 anos"
        brasileira="não"
        frase="qual seu filme de terror favorito?"
        imagem={Panico}
      />

      <ComponenteComProps nome="O chamado" brasileira="sim" frase="7 dias" imagem={Samara}>

        <p> O Terror da Carol</p>
        <h3>Gradiente com essas cores</h3>
        <ul>
          <li>Red sangue</li>
          <li>Amarelo ouro</li>
          <li>Verde limão</li>
          <li>Rosa choque</li>
        </ul>

      </ComponenteComProps>

    </Section>
  )
}

export default App
