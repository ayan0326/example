import React, { Component } from 'react';
import cx from 'classnames';
import './index.css';

export default class Modal extends Component {
  componentDidMount() {
    window.document.body.style.height = '100vh';
    window.document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    window.document.body.style.height = 'inherit';
    window.document.body.style.overflow = 'inherit';
  }

  prevent = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  render() {
    const {
      title, children, onClose, className, visible = true, destroyOnClose = true,
    } = this.props;
    if (destroyOnClose && !visible) return null;

    return (
      <div className={cx('modal-wrap', className, { 'modal-hide': !visible })}>
        <div className="modal-cnt">
          <div className="modal-header">
            {title}
            <span className="modal-alias-close" onClick={onClose}>
              ×
            </span>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    );
  }
}
