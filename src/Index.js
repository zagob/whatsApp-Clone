import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './routes';
import reducers from './reducers/index';

class Index extends Component {

    UNSAFE_componentWillMount() {
        // Your web app's Firebase configuration
        var firebaseConfig = {
            apiKey: "AIzaSyCW_FL0ihybSe3CB244mKw9VIse44-T08w",
            authDomain: "whatsapp-clone-86232.firebaseapp.com",
            databaseURL: "https://whatsapp-clone-86232.firebaseio.com",
            projectId: "whatsapp-clone-86232",
            storageBucket: "whatsapp-clone-86232.appspot.com",
            messagingSenderId: "1071791951337",
            appId: "1:1071791951337:web:462880ebf69e2be1b78f78",
            measurementId: "G-FG8WDMEXL5"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))} >
                <Routes />
            </Provider>
        );
    }
}

export default Index;