import React, { Component } from 'react'
import axios from 'axios';

import PageHeader from '../template/pageHeader'
import TarefasForm from './tarefasForm'
import TarefasLista from './tarefasLista'

const URL = "http://localhost:3003/api/tarefas";

export default class Tarefa extends Component {

    constructor(props){
        super(props);
        this.state = {descricao: '', lista: []};
        this.addTarefa = this.addTarefa.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    addTarefa(){
        const descricao = this.state.descricao;
        axios.post(URL, { descricao })
            .then(resp => console.log("Ass"))
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
                    OnClick={this.addTarefa} />
                <TarefasLista />
            </div>
        );
    }
}