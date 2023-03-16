import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { URL } from 'constants';
import { Button } from './Button';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
  };

  onSubmit = async query => {
    this.setState({
      query,
    });
    const response = await fetch(
      `${URL}q=${query}&page=${this.state.page}&key=31646288-d6f5eefd60163767746b31051&image_type=photo&orientation=horizontal&per_page=12`
    ).then(resp => resp.json());
    if (response && response.hits) {
      this.setState(prevState => {
        return {
          images: [...this.state.images, ...response.hits],
          page: prevState.page + 1,
        };
      });     
     
    }
  };

   loadMore = async () => {
     const response = await fetch(
       `${URL}q=${this.state.query}&page=${this.state.page}&key=31646288-d6f5eefd60163767746b31051&image_type=photo&orientation=horizontal&per_page=12`
     ).then(resp => resp.json());
     if (response && response.hits) {
       this.setState((prevState) => {
         return {
           images: [...this.state.images, ...response.hits],
           page: prevState.page + 1,
         }
       });     
     }
   };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.images && this.state.images.length && (
          <ImageGallery images={this.state.images} />
        )}
        <Button callback={this.loadMore} text={'true'} />
      </div>
    );
  }
}
