import React, { Component } from 'react';
import { connect } from 'react-redux';
import './breed-image.css';

class BreedImage extends Component {
	
	render() {
		return (
			<div className="image-container">
				<img className="image-card" alt="dog" src={this.props.iUrl} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		iUrl: state.imageUrl,
	};
}
const mapDispatchToProps = dispatch => {
	return {
		onSelectHandler: (breed) => dispatch({ type: 'SELECT_BREED', payload: { selectedBreed: breed } })
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(BreedImage);
