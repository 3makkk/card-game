import React, { Component } from 'react';
import './App.css';
import Button from 'material-ui/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Klatschen</h1>
        </header>
        <main className="App-main">
          <Button color="primary" variant="raised">Neues Spiel erstellen</Button>
        </main>
      </div>
    );
  }
}

export default App;
