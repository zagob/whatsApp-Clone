import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import BoasVindas from './components/BoasVindas';
import Principal from './components/Principal';
import AdicionarContato from './components/AdicionarContato';
import Conversa from './components/Conversa';
import { block } from 'react-native-reanimated';

const routes = () => (
    <Router hideNavBar={true} >
        <Stack hideNavBar={true} key='root' navigationBarStyle={{ backgroundColor: '#115e54' }} titleStyle={{ color: '#fff' }}>
            <Scene key='FormLogin' component={FormLogin} title="Login" hideNavBar={block}  initial />
            <Scene key='FormCadastro' component={FormCadastro} title="Cadastro" hideNavBar={true} />
            <Scene key='boasVindas' component={BoasVindas} title="Bem-Vindo" hideNavBar={true}   />
            <Scene key='principal' component={Principal} title="Principal" hideNavBar={true}  />
            <Scene key='adicionarContato' component={AdicionarContato} title="AdicionarContato" hideNavBar={false} />
            <Scene key='conversa' component={Conversa} title="Conversa" hideNavBar={false} />
        </Stack>
    </Router>
);

export default routes;