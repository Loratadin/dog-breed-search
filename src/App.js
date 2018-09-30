import React, { Component } from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import Form from './components/form/Form';

class App extends Component {
    render( ) {
        return (
            <div className="App">
            <Menu/>
            <Form/>
            </div>
        );
    }
}

export default App;