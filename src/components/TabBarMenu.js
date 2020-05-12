import React from 'react';
import { View, Text, StatusBar, Image, TouchableHighlight } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { Actions } from 'react-native-router-flux';
import { habilitaInclusaoContato } from '../actions/AppActions';
import { connect } from 'react-redux';
import firebase from 'firebase';

const TabBarMenu = props => (
    <View style={{ backgroundColor: '#115E54', elevation: 4, marginBottom: 6 }}>

        <StatusBar backgroundColor="#114D44" />
        
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ height: 60, justifyContent: 'center' }}>
                <Text style={{ fontSize: 20, color: '#fff', marginLeft: 20 }}>WhatsApp Clone</Text>
            </View>

            <View style={{ flexDirection: 'row', marginRight: 20, alignItems: 'center' }}>
                <View style={{ width: 50, alignItems: 'center' }}>
                    <TouchableHighlight
                        onPress={() => { Actions.adicionarContato(); props.habilitaInclusaoContato() }}
                        underlayColor='#114D44'
                    >
                        <Image source={require('../img/contato.png')} />
                    </TouchableHighlight>
                </View>

                <View>
                    <TouchableHighlight
                        underlayColor='transparent'
                        onPress={() => firebase.auth().signOut().then(() => Actions.FormLogin())}
                    >
                        <Text style={{ fontSize: 20, color: '#fff' }}>Sair</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>

        <TabBar {...props} style={{ backgroundColor: '#115E54', elevation: 0 }} />
    </View>
);

export default connect(null, { habilitaInclusaoContato })(TabBarMenu);