import React from 'react';
import T from 'prop-types';
import ReactModal from 'react-modal';
import { FaClose } from 'react-icons/lib/fa';

import styles from './styles.css';

const customStyles = {
  content: {
    borderRadius: '8px',
    bottom: 'auto',
    left: '50%',
    padding: '2rem',
    position: 'fixed',
    right: 'auto',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    minWidth: '20rem',
    width: '80%',
    maxWidth: '40rem',
    boxShadow: '0.5px 0.5px 0.5px 0.6px rgba(0, 0, 0, .2)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    maxHeight: 'calc(100vh - 50px)',
    overflowY: 'auto',
  },
};

const Modal = props => (
  <ReactModal
    isOpen={props.isOpen}
    onRequestClose={props.closeModal}
    contentLabel={props.contentLabel}
    style={customStyles}
  >
    {!props.hideCloseButton && (<span
      role="button"
      tabIndex="0"
      className={styles.modalCloseButton}
      onClick={props.closeModal}
    >
      <FaClose />
    </span>)}
    {props.children}
  </ReactModal>
);

Modal.propTypes = {
  children: T.element,
  isOpen: T.bool.isRequired,
  closeModal: T.func,
  contentLabel: T.string.isRequired,
  hideCloseButton: T.bool,
};

export default Modal;
