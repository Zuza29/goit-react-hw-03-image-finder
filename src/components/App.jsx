import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { URL } from 'constants';
import { Button } from './Button/Button';
import css from './Button/Button.module.css';
import 'index.css';
import { Notify } from 'notiflix';
import { Modal } from './Modal/Modal';
import { Spinner } from './Loader/Loader';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    largeImageURL: '',
    showModal: false,
  };

  onShow = url => {
    this.setState({ showModal: true, largeImageURL: url });
  };

  onClose = () => {
    this.setState({ showModal: false, largeImageURL: '' });
  };

  onSubmit = async query => {
    if (query !== this.state.query) {
      this.setState({ images: [], page: 1, query });
    } {
      this.setState({
        query,
        isLoading: true,
      });
      const response = await fetch(
        `${URL}q=${query}&page=${this.state.page}&key=31646288-d6f5eefd60163767746b31051&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => response.json())
        .catch(error => Notify.failure('Sorry, something went wrong...', error));

      if (response && response.hits.length > 0) {
        this.setState(() => {
          return {
            images: [...this.state.images, ...response.hits],
            page: this.state.page + 1,
            isLoading: false,
          };
        });
      } else {
        Notify.info('Sorry, there are no pictures matching your search');
        this.setState({
          images: [],
        });
      }
    }
};

  loadMore = async event => {
    event.preventDefault();
    this.onSubmit(this.state.query);
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.isLoading && <Spinner />}
        <ImageGallery images={this.state.images} onShow={this.onShow} />

        {this.state.images.length > 0 && (
          <Button
            callback={this.loadMore}
            className={css.button}
            text={'true'}
          />
        )}
        {this.state.showModal && (
          <Modal onClose={this.onClose} image={this.state.largeImageURL} />
        )}
      </div>
    );
  }
}
