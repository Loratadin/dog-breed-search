import React, { Component } from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import Select from './components/select/Select';
import BreedImage from './components/breed-image/BreedImage';

class App extends Component {
    render( ) {
        return (
            <div className="App">
                <Menu/>
                <Select />
                <BreedImage/>
            </div>
        );
    }
}

export default App;