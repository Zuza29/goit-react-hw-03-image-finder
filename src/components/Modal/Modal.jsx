import { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleClose);
  }

  handleClose = event => {
    if (event.code === 'Escape') {
      return this.props.onClose();
    }
  };

  render() {
    const { image } = this.props;
    return (
      <div className={css.overlay} onClick={this.props.onClose}>
        <div className={css.modal}>
          <img src={image} alt="Result" />
        </div>
      </div>
    );
  }
}
