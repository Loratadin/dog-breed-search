import React, { Component } from 'react';
import { connect } from 'react-redux';
import {requestBreeds} from './store/actions';
import './App.css';
import Menu from './components/menu/Menu';
import Select from './components/select/Select';
import BreedImage from './components/breed-image/BreedImage';

class App extends Component {
    componentDidMount() {
        console.log("App Breeds", this.props.brList)
        if (this.props.brList.length === 0) {
            this.props.getBreedsList();
        }
    }
    render( ) {
        return (
            <div className="App">
                    <Menu/>
                <Select
                    // breedsList={this.props.brList} onSelect={(breed) => this.props.onSelectHandler(breed)} isError={this.props.er}
                />
                    <BreedImage breed={this.props.selBreed}/>
                </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        brList: state.breedsList,
        selBreed: state.selectedBreed,
        er: state.error
    };
}
const mapDispatchToProps = dispatch => {
    return {
        getBreedsList: () => dispatch(requestBreeds()),
        onSelectHandler: (breed) => dispatch ({type: 'SELECT_BREED', payload: {selectedBreed: breed}})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);