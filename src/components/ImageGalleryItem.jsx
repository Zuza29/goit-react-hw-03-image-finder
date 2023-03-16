import { Component } from 'react';

export class ImageGalleryItem extends Component {
    render() {
        const { image } = this.props;
    return (
      <li className="gallery-item" >
        <img src={image.webformatURL} alt={image.tags} />
      </li>
    );
  }
}
