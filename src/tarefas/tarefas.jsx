import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TarefasForm from './tarefasForm'
import TarefasLista from './tarefasLista'

export default class Tarefa extends Component {

    constructor(props){
        super(props);
        this.state = {descricao: '', lista: []};
        this.OnClick = this.OnClick.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    OnClick(){
        console.log(this.state.descricao);
    }

    onChange(e){
        this.setState({ ...this.state, descricao: e.target.value});        
    }

    render(){
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"/>
                <TarefasForm 
                    descricao={this.state.descricao}
                    onChange={this.onChange}
                    OnClick={this.OnClick} />
                <TarefasLista />
            </div>
        );
    }
}