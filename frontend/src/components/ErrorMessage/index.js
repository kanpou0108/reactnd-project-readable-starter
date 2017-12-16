import React from 'react';
import T from 'prop-types';

import styles from './styles.css';

const ErrorMessage = (props) => {
  const { error, onRetry } = props;
  return (
    <div className={styles.errorMessage}>
      <p>{error}</p>
      {onRetry && <button onClick={onRetry}>Retry</button>}
    </div>
  );
};

ErrorMessage.propTypes = {
  error: T.string,
  onRetry: T.func,
};

export default ErrorMessage;
