import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TarefaForm from './tarefaForm'
import TarefasLista from './tarefasLista'

export default class Tarefa extends Component {
    render(){
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"/>
                <TarefaForm />
                <TarefasLista />
            </div>
        );
    }
}