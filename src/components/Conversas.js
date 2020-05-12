import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import ListView from "deprecated-react-native-listview";
import { connect } from 'react-redux';
import { conversasUsuarioFetch } from '../actions/AppActions';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';

class Conversas extends Component {

    constructor(props) {
        super(props)
    }

    UNSAFE_componentWillMount() {
        this.props.conversasUsuarioFetch
        this.criaFonteDeDados(this.props.conversas)
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.criaFonteDeDados( nextProps.conversas )
    }

    criaFonteDeDados( conversas ) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.dataSource = ds.cloneWithRows( conversas )
    }

    renderRow(conversa) {
        return (
            <TouchableHighlight
                onPress={ () => Actions.conversa({ title: conversa.nome, contatoNome: conversa.nome, contatoEmail: conversa.email })}
            >
                <View style={{ flex: 1, padding: 20, borderBottomWidth: 1, borderColor: '#ccc' }}>
                    <Text style={{ fontSize: 25 }}>{conversa.nome}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
        return (
            <ListView 
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        )
    }
}

mapStateToProps = state => {
    const conversas = _.map(state.ListaConversasReducer, (val, uid) => {
        return { ...val, uid }
    });

    return { conversas }
}

export default connect(mapStateToProps, { conversasUsuarioFetch })(Conversas)