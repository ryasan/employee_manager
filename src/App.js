import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import Router from './router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBO8AaFkvaSuO2v26qvWpUpvC7cYW65qLo',
      authDomain: 'messaging-915fb.firebaseapp.com',
      databaseURL: 'https://messaging-915fb.firebaseio.com',
      storageBucket: 'messaging-915fb.appspot.com',
      messagingSenderId: '926949940879'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
