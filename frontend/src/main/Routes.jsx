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
                        <Header icon="home" title="Início" subtitle="Segundo Projeto do capítulo de React."></Header>
                        <Home></Home>
                    </React.Fragment>
            
            } >
        </Route>
        <Route 
            path='/users' 
            component={
                props => 
                    <React.Fragment>
                        <Header icon="users" title="Usuários" subtitle="Cadastro de usários: Incluir, Listar, Alterar e Excluir."></Header>
                        <UserCrud></UserCrud>
                    </React.Fragment>
            } >                
        </Route>
        <Redirect from='*' to='/' ></Redirect>
    </Switch>