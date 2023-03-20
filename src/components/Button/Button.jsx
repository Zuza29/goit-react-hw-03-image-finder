import { Component } from 'react';
import propTypes from 'prop-types';

export class Button extends Component {
  render() {
    const { callback, text, type, className } = this.props;
    return (
      <>
        <button className={className} type={type} onClick={event => {
          callback(event);
        }}>
          {text === 'true' && 'Load more'}
        </button>
      </>
    );
  }
}

Button.propTypes = {
  callback: propTypes.func,
  text: propTypes.string,
  type: propTypes.string,
  className: propTypes.string,
};
