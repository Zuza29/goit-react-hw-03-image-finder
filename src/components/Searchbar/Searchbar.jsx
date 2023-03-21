import { Component } from 'react';
import { Button } from 'components/Button/Button';
import { Notify } from 'notiflix';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  onHandleChange = event => {
    event.preventDefault();
    this.setState({
      value: event.target.value,
    });
  };

  onHandleSubmit = event => {
    event.preventDefault();
    const value = this.state.value;
    if (value.trim() !== '') {
      this.props.onSubmit(this.state.value);
    } else {
      Notify.info('Please provide a query');
      return;
    }
  };
  render() {
    return (
      <header className={css.searchbar}>
        <h1>Pixabay Image Finder</h1>
        <form className={css.searchForm} onSubmit={this.onHandleSubmit}>
          <input
            className={css.searchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search for..."
            value={this.state.value}
            onChange={this.onHandleChange}
          />
          <Button className={css.searchFormButton} text="false" type="submit" />
        </form>
      </header>
    );
  }
}
