import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Menu from './components/menu/Menu';
import Select from './components/select/Select';
import BreedImage from './components/breed-image/BreedImage';

class App extends Component {

    selectHandler = (breed) => {
        this.setState({
            selectedBreed: breed
        })
    }
    render( ) {
        return (
                <div className="App">
                    <Menu/>
                    <Select breedsList={this.props.brList} onSelect={this.props.onSelectHandler} isError={this.props.er}/>
                    <BreedImage breed={this.props.slctBreed}/>
                </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        brList: state.breedsList,
        selBreed: state.selectedBreed,
        iUrl: state.imageUrl,
    };
}
const mapDispatchToProps = dispatch => {
    return {
        onSelectHandler: () => dispatch ({type: 'SELECT_BREED'})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);