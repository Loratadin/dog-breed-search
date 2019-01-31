import React, { Component } from 'react';
import { connect } from 'react-redux';
import './select.css';
import '../breed-image/breed-image.css';

const loadingGif = './assets/loading.gif';

class Select extends Component {

    getLoadingView() {
        return <div className="loading"><img className="loading-gif" alt="Loading..." src={loadingGif}/></div>
    }

    getErrorView() {
        return alert('Sorry, can not load the data')
    }

    getSelectView() {
        return (
            <select onChange={(breed) => this.props.onSelectHandler(breed)}>
                {this.props.brList.map((breed, index) => {
                        return(
                            <option value={breed} key={index}>{breed}</option>
                        );
                    })
                }
            </select>
        )
    }
    render() {
        return(
            <div className="select-container">
                {this.props.brList ? this.getSelectView() : this.getLoadingView()}
                {this.props.er ? this.getErrorView() : null}
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
        onSelectHandler: (breed) => dispatch ({type: 'SELECT_BREED', payload: {selectedBreed: breed}})
    };
}

export default connect(mapStateToProps, mapDispatchToProps )(Select);