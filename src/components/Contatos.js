import React, { Component } from 'react';
import { View, Text, FlatList, TouchableHighlight } from 'react-native';
import ListView from "deprecated-react-native-listview";
import { connect } from 'react-redux';
import { contatosUsuarioFetch } from '../actions/AppActions';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
// import { FlatList } from 'react-native-gesture-handler';

class Contatos extends Component {

    constructor(props) {
        super(props)

        
    }

    UNSAFE_componentWillMount() {
        this.props.contatosUsuarioFetch();
        this.criaFonteDeDados( this.props.contatos )
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.criaFonteDeDados( nextProps.contatos )
    }

    criaFonteDeDados( contatos ) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

        this.fonteDeDados = ds.cloneWithRows(contatos)
    }

    renderRow(contato) {
        return (
            <TouchableHighlight
                underlayColor='transparent'
                onPress={() => Actions.conversa({ title: contato.nome, contatoNome: contato.nome, contatoEmail: contato.email })}
            >
                <View style={{ flex: 1, padding: 20, borderBottomWidth: 1, borderColor: '#CCC'}}>
                    <Text style={{ fontSize: 25 }}>{contato.nome}</Text>
                    <Text style={{ fontSize: 18 }}>{contato.email}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={this.fonteDeDados}
                renderRow={this.renderRow}
            />
        );
    }
}

mapStateToProps = state => {
    const contatos = _.map(state.ListaContatosReducer, (val, uid) => {
        return { ...val, uid }
    })
    
    return { contatos }
}

export default connect(mapStateToProps, { contatosUsuarioFetch })(Contatos);