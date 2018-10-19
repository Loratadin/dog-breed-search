import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Menu from './components/menu/Menu';
import Select from './components/select/Select';
import BreedImage from './components/breed-image/BreedImage';

class App extends Component {

    componentDidMount() {
        this.fetchAllBreeds();
    }
    fetchAllBreeds = async () => {
        try { // try to get data
            const response = await fetch('https://dog.ceo/api/breeds/list/all');
            if (response.ok) { // check if status code is 200
                const data = await response.json();
                this.setState({
                    breedsList: Object.keys(data.message)
                })
            } else {
                this.setState({
                    error: true
                })
                alert('Sorry, can not load the data')
            }
        } catch (e) { // code will jump here if there is a network problem
            this.setState({
                error: true
            })
            alert('Sorry, can not load the data')
        }
    }
    selectHandler = (breed) => {
        this.setState({
            selectedBreed: breed
        })
    }
    render( ) {
        return (
                <div className="App">
                    <Menu/>
                    <Select breedsList={this.props.brdsList} onSelect={this.props.onSelectHandler} isError={this.props.er}/>
                    <BreedImage breed={this.props.slctBreed}/>
                </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        slctBreed: state.selectedBreed,
    };
}
const mapDispatchToProps = dispatch => {
    return {
        onSelectHandler: () => dispatch ({type: 'SELECT_BREED'})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);