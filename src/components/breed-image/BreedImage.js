import React, { Component } from 'react';
import { connect } from 'react-redux';
import {receiveImage} from '../../store/actions';
import './breed-image.css';

const mapStateToProps = state => {
	return {
		iUrl: state.imageUrl,
		selBreed: state.selectedBreed,
        er: state.error
	};
}
const mapDispatchToProps = dispatch => {
	return {
		getImage: () => dispatch(receiveImage()),
	};
}

class BreedImage extends Component {

	componentDidUpdate() { 
		if (this.props.selBreed !== " ") {
			this.props.getImage(this.props.selBreed);
			console.log("I got selected breed:", this.props.selBreed)
		}
	}

	render() {
		
		return (
			<div className="image-container">
				<img
					className="image-card"
					alt="dog" src={this.props.iUrl}
				/>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BreedImage);
