import React from 'react';
import { View, Text, Button, Image, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default props => (
    <ImageBackground style={{ flex: 1, backgroundColor: 'transparent' }} source={require('../img/original.png')}>
        <View style={{ flex: 1, padding: 15 }}>
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: '#fff' }}>Seja Bem-Vindo(a)</Text>
                <Image source={require('../img/logo.png')} />
            </View>
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: '#115E54' }}>
                    <Button color='#fff' title="Fazer Login" onPress={() => Actions.FormLogin() } />
                </View>
            </View>
        </View>
    </ImageBackground>
    
);