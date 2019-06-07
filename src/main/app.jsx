import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

//moduloes foi declarado no webpack.config.js

import React from 'react'
import Tarefa from '../tarefas/tarefas'
import Sobre from '../sobre/sobre'
import Menu from '../template/menu';

export default props => (
    <div className='container'>
        <Menu />
        <Tarefa />
        <Sobre />
    </div>
);