import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
    render() {
        const { webformatURL, largeImageURL, onShow, tags } = this.props;
    return (
      <li className={css.imageGalleryItem} >
        <img className={css.imageGalleryItemImage} src={webformatURL} alt={tags} onClick={() => onShow(largeImageURL)} />
      </li>
    );
  }
}
