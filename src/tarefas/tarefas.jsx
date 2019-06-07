import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TarefasForm from './tarefasForm'
import TarefasLista from './tarefasLista'

export default class Tarefa extends Component {

    constructor(props){
        super(props);
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleAdd(){
        console.log(this);
    }

    render(){
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"/>
                <TarefasForm handleAdd={this.handleAdd} />
                <TarefasLista />
            </div>
        );
    }
}