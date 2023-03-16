import { Component } from 'react';
import { Button } from 'components/Button';

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
    this.props.onSubmit(this.state.value);
  };
  render() {
    return (
      <header className="searchbar">
        <form className="form">
          <Button
            callback={this.onHandleSubmit}
            className="button"
            text="false"
            type="submit"
          />

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search for images and photos"
            value={this.state.value}
            onChange={this.onHandleChange}
          />
        </form>
      </header>
    );
  }
}
