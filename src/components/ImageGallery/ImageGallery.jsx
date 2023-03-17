import { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export class ImageGallery extends Component {
  render() {
    const { images, onShow } = this.props;
    return (
      <ul className={css.imageGallery}>
        {images.map(({ webformatURL, largeImageURL, id, tags }) => (
          <ImageGalleryItem
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            onShow={onShow}
            tags={tags}
            key={id}
          />
        ))}
      </ul>
    );
  }
}
