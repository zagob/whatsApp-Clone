import React, { Component } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import { modificaAdicionaContatoEmail, adicionaContato } from '../actions/AppActions';

class AdicionarContato extends Component {

    renderAdicionarContato() {
        if(!this.props.cadastro_resultado_inclusao) {
            return (
                <View style={{ flex: 1}}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <View style={{ backgroundColor: '#fff', borderRadius: 5, backgroundColor: "#FAFAFA", borderWidth: 0.5, borderColor: "#000" }}>
                            <TextInput
                                // backgroundColor="#000"
                                placeholder='E-mail'
                                color="#000"
                                style={{ fontSize: 20, height: 45, paddingLeft: 5 }}
                                onChangeText={(texto) => this.props.modificaAdicionaContatoEmail(texto)}
                                value={this.props.adiciona_contato_email}
                            />
                        </View>

                            <Text style={{ color: '#ff0000', fontSize: 20 }}>
                                {this.props.cadastro_resultado_txt_erro}
                            </Text>

                    </View>

                    <View style={{ flex: 1 }}>
                        <View style={{ backgroundColor: '#115E54' }}>
                            <Button
                                title="Adicionar"
                                color="#fff"
                                onPress={() => this.props.adicionaContato(this.props.adiciona_contato_email) }
                            />
                        </View>
                    </View>
                </View>
            );
        } else {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 21, color: 'green', fontWeight: 'bold', opacity: 0.6 }}>
                        Contato adicionado com sucesso!
                    </Text>
                </View>
            );
        }
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
                { this.renderAdicionarContato() }
            </View>
        );
    }
};

const mapStateToProps = state => (
    {
        adiciona_contato_email: state.AppReducer.adiciona_contato_email,
        cadastro_resultado_txt_erro: state.AppReducer.cadastro_resultado_txt_erro,
        cadastro_resultado_inclusao: state.AppReducer.cadastro_resultado_inclusao
    }
)

export default connect(mapStateToProps, { modificaAdicionaContatoEmail, adicionaContato })(AdicionarContato);