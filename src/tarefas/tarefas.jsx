import React, { Component } from 'react'
import axios from 'axios';

import PageHeader from '../template/pageHeader'
import TarefasForm from './tarefasForm'
import TarefasLista from './tarefasLista'
import { timingSafeEqual } from 'crypto';

const URL = "http://localhost:3003/api/tarefas";

export default class Tarefa extends Component {

    constructor(props){
        super(props);
        this.state = {descricao: '', lista: []};
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);

        this.refresh();
    }

    refresh(){
        axios.get(`${URL}?sort=-criacao` )
            .then((resp) => this.setState({...this.state, descricao: '', lista: resp.data}));
    }

    handleAdd(){
        const descricao = this.state.descricao;
        axios.post(URL, { descricao })
            .then((resp) => this.refresh());
    }

    handleChange(e){
        this.setState({ ...this.state, descricao: e.target.value});        
    }

    handleRemove(tarefa){
        axios.delete(`${URL}/${tarefa._id}`)
            .then((resp) => this.refresh());
    }

    render(){        
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"/>
                <TarefasForm 
                    descricao={this.state.descricao}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd} />
                <TarefasLista 
                    lista={this.state.lista}
                    handleRemove={this.handleRemove}/>
            </div>
        );
    }
}