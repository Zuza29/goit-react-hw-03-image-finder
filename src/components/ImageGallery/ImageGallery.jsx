import { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem';

export class ImageGallery extends Component {
  render() {
    const { images } = this.props;
    return (
      <ul className="gallery">
        {images.map(image => (
          <ImageGalleryItem image={image} key={image.id} />
        ))}
      </ul>
    );
  }
}
