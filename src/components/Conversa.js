
import React, {Component} from 'react';
import { View, Text, TextInput, TouchableHighlight, Image } from 'react-native';
import ListView from "deprecated-react-native-listview";
import { connect } from 'react-redux';
import { modificaMensagem, enviarMensagem, conversaUsuarioFetch } from '../actions/AppActions';
import _ from 'lodash';

 class Conversa extends Component {

    UNSAFE_componentWillMount() {
        this.props.conversaUsuarioFetch(this.props.contatoEmail)
        this.criaFonteDeDados( this.props.conversa )

    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if(this.props.contatoEmail != nextProps.contatoEmail) {
            this.props.conversaUsuarioFetch(nextProps.contatoEmail)
        }
        this.criaFonteDeDados(nextProps.conversa);
    }

    criaFonteDeDados( conversa ) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.dataSource = ds.cloneWithRows( conversa );
    }

    _enviaMensagem() {
        const { mensagem, contatoNome, contatoEmail } = this.props;

        this.props.enviarMensagem(mensagem, contatoNome, contatoEmail)
    }

    renderRow(texto) {

        if(texto.tipo === 'e') {
            return (
                <View style={{ 
                    alignItems: 'flex-end', 
                    marginTop: 5, 
                    marginBottom: 5, 
                    marginLeft: 40, 
                    padding: 8 }}>
                    <Text style={{ fontSize: 18, color: '#000', padding: 10, backgroundColor: '#dbf5b4', elevation: 1, borderRadius: 40  }}> {texto.mensagem} </Text>
                </View>
            )
        }
        return (
            <View style={{
                // backgroundColor: '#f7f7f7', 
                // width: 200,
                // height: 55,
                // borderWidth: 0.3,
                // borderColor: '#D8D8D8',
                borderRadius: 20,
                alignItems: 'flex-start', 
                marginTop: 5, 
                marginBottom: 5, 
                marginRight: 40, 
                padding: 8 }}>
            <Text style={{
                fontSize: 18, 
                color: '#000', 
                padding: 10,
                backgroundColor: '#f7f7f7', 
                elevation: 1, 
                borderRadius: 40  }}> {texto.mensagem} </Text>
        </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#eee4dc' }}>
                <ListView 
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />
                <View style={{ flex: 1 }}></View>
                <View style={{ flexDirection: 'row', height: 60, backgroundColor: '#115E55', padding: 10  }}>
                    <View style={{ flex: 1, height: 40 }}>
                        <TextInput
                            value={this.props.mensagem}
                            onChangeText={texto => this.props.modificaMensagem(texto)}
                            style={{ 
                                flex: 4, 
                                color: '#fff', 
                                backgroundColor: '#6E6E6E', 
                                fontSize: 18,
                                borderWidth: 1,
                                borderColor: '#A4A4A4',
                                borderRadius: 40, 
                                paddingLeft: 10 }}
                        />
                    </View>

                    <TouchableHighlight onPress={this._enviaMensagem.bind(this)} underlayColor='transparent' >
                        <Image style={{ width: 53, bottom: 10, marginLeft: 10 }} source={require('../img/enviar_mensagem.png')} />
                    </TouchableHighlight>

                </View>
            </View>
        )
    }
}

mapStateToProps = state => {

    const conversa = _.map(state.ListaConversaReducer, (val, uid) => {
        return { ...val, uid };
    });

    return({
        conversa: conversa,
        mensagem: state.AppReducer.mensagem
    })
}

export default connect(mapStateToProps, { modificaMensagem, enviarMensagem, conversaUsuarioFetch })(Conversa)