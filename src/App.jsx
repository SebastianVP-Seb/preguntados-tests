import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import { Game } from './pages/game';

import './styles/main.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="App-header">
        <Game />
      </div>
    </Provider>
  );
};

export default App;
