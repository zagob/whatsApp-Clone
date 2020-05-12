import React, { Component } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator, ImageBackground } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, autenticarUsuario } from '../actions/AutenticacaoActions';

class FormLogin extends Component {

    _autenticarUsuario() {
        const { email, senha } = this.props;

        this.props.autenticarUsuario({ email, senha });
    }

    renderBtnAcessar() {
        if(this.props.loading_login) {
            return (
                <ActivityIndicator size="large" />
            )
        }
        return (
            <Button  title="Acessar" color='#fff'  onPress={() => this._autenticarUsuario()}/>
        )
    }

    render() {
        return (
            <ImageBackground style={{ flex: 1, backgroundColor: 'transparent' }} source={require('../img/original.png')}>
                <View style={{ flex: 1, padding: 10}}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{ fontSize: 25, color: '#fff'}}>WhatsApp Clone</Text>
                    </View>
                    <View style={{ flex: 2}}>
                        <TextInput 
                            value={this.props.email} 
                            style={{
                                color: '#000', 
                                fontSize: 20, 
                                height: 45,
                                borderWidth: 4,
                                borderColor: '#fff',
                                borderRadius: 6,
                                opacity: 0.6,
                                backgroundColor: '#fff' }} 
                            placeholder="E-mail"
                            // placeholderTextColor='#fff'
                            onChangeText={texto => this.props.modificaEmail(texto)} />
                        <TextInput 
                            secureTextEntry={true} 
                            value={this.props.senha} 
                            style={{
                                marginTop: 10, 
                                fontSize: 20, 
                                height: 45,
                                borderWidth: 4,
                                borderColor: '#fff',
                                borderRadius: 6,
                                opacity: 0.6,
                                backgroundColor: '#fff'
                             }} 
                            placeholder="senha"
                            // placeholderTextColor='#000' 
                            onChangeText={texto => this.props.modificaSenha(texto) } />

                            <Text style={{ color: '#ff0000', fontSize: 20 }}>{this.props.erroLogin}</Text>
                        <TouchableHighlight
                            underlayColor='transparent'
                            onPress={() => Actions.FormCadastro() } >
                            <Text style={{ marginTop: 8, fontSize: 20, color: '#fff'}}>Ainda não tem cadastro? Cadastre-se</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{ flex: 2}}>
                        <View style={{ backgroundColor: '#115E54' }}>
                            {this.renderBtnAcessar()}
                        </View>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroLogin: state.AutenticacaoReducer.erroLogin,
        loading_login: state.AutenticacaoReducer.loading_login
    }
);

export default connect(mapStateToProps, { modificaEmail, modificaSenha, autenticarUsuario })(FormLogin);