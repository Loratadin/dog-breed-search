import React, { Component } from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import Form from './components/form/Form';
import BreedImage from './components/breed-image/BreedImage';

class App extends Component {
    state = {
        breedsList: null,
        selectedBreed: null
    }
    componentDidMount() {
        this.fetchAllBreeds();
    }
    fetchAllBreeds = async () => {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        const data = await response.json();
        this.setState({
            breedsList: Object.keys(data.message)
        })
    }
    selectHandler = (breed) => {
        this.setState({
            selectedBreed: breed
        })
    }
    render( ) {
        console.log(this.state.selectedBreed);
        return (
            <div className="App">
                <Menu/>
                <Form breedsList={this.state.breedsList} onSelect={this.selectHandler}/>
                <BreedImage breed={this.state.selectedBreed}/>
            </div>
        );
    }
}

export default App;