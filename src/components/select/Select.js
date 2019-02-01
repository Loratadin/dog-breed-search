import React, { Component } from 'react';
import { connect } from 'react-redux';
import {requestBreeds, requestImage, selectImage} from '../../store/actions';
import './select.css';
import '../breed-image/breed-image.css';

const loadingGif = './assets/loading.gif';

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
        onSelectHandler: (event) => {
            console.log("Breed", event.target.value),
            dispatch(selectImage(event))
            // dispatch(requestImage())
        },
        askForImage: (breed) => dispatch(requestImage(breed)),
        // onSelectHandler: () => dispatch(requestImage()),
    };
}
class Select extends Component {

    componentDidMount() {
        if (this.props.brList.length === 0) {
            this.props.getBreedsList();
        }
    }

    componentDidUpdate(prevProps) {
		prevProps.selBreed !== this.props.selBreed && this.props.askForImage(this.props.selBreed)
	}

    getLoadingView() {
        return <div className="loading"><img className="loading-gif" alt="Loading..." src={loadingGif}/></div>
    }

    getErrorView() {
        return alert('Sorry, can not load the data')
    }

    getSelectView() {
        return (
            <select
                onChange={(event) =>  this.props.onSelectHandler(event)}
            >
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

export default connect(mapStateToProps, mapDispatchToProps )(Select);