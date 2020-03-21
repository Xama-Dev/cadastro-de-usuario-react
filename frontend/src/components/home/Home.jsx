import React from 'react'
import Main from '../template/Main'

export default props =>
    <Main icon="home" title="Início"
        subtitle="Segundo Projeto do capítulo de React.">
        <div className="display-4">Bem Vindo!</div>
        <hr/>
        <p className="mb-0">
            Somos um sistema de cadastro de usuários, desenvolvido em ReactJS.                
        </p>
    </Main>