import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Header from '../components/template/Header'
import Home from '../components/home/Home'  
import UserCrud from '../components/user/UserCrud'

export default props =>
    <Switch>
        <Route 
            exact path='/' 
            component={
                props =>
                    <React.Fragment>
                        <Header icon="home" title="Início" subtitle="Sistema de cadastro de usuários desenvolvido em ReactJS."></Header>
                        <Home></Home>
                    </React.Fragment>
            
            } >
        </Route>
        <Route 
            path='/users' 
            component={
                props => 
                    <React.Fragment>
                        <Header icon="users" title="Usuários" subtitle="Funções: Cadastrar, Atualizar, Listar e Excluir usuário"></Header>
                        <UserCrud></UserCrud>
                    </React.Fragment>
            } >                
        </Route>
        <Redirect from='*' to='/' ></Redirect>
    </Switch>