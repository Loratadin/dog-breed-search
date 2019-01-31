import React, { Component } from 'react';
import './breed-image.css';

const customImage = './assets/custom.jpg';
class BreedImage extends Component {
  state = {
    imageUrl: customImage,
    selectedBreed: null
  };
  componentDidUpdate() {
    if (this.props.breed !== this.state.selectedBreed) {
      this.setState({
        selectedBreed: this.props.breed
      });
      this.fetchImage();
    }
  }
  fetchImage = async () => {
    const response = await fetch(
      `https://dog.ceo/api/breed/${this.props.breed}/images/random`
    );
    const data = await response.json();
    const imageUrl = data.message;
    this.setState({
      imageUrl: imageUrl
    });
  };
  render() {
    return (
      <div className="image-container">
        <img className="image-card" alt="dog" src={this.state.imageUrl} />
      </div>
    );
  }
}

export default BreedImage;
