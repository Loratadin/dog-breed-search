import React, { Component } from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import Form from './components/form/Form';

class App extends Component {
    state = {
        breedsList: null
    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData = async () => {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        const data = await response.json();
        this.setState({
            breedsList: Object.keys(data.message)
        })
    }
    
    render( ) {
        return (
            <div className="App">
                <Menu/>
                <Form breedsList={this.state.breedsList} />
            </div>
        );
    }
}

export default App;