import React, { Component } from 'react';
import T from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { v4 } from 'uuid';

import styles from './styles.css';

/* eslint-disable react/prop-types */
const renderInputField = (props) => {
  const { input, label, type, id, placeholder, meta } = props;
  const { touched, error } = meta;
  const className = `${touched && error && 'hasError'}`;
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <div>
        <input {...input} id={id} type={type} placeholder={placeholder} className={className} />
        {touched && (error && <span className={styles.validationError}>{error}</span>) }
      </div>
    </div>
  );
};

const renderTextAreaField = (props) => {
  const { input, label, id, placeholder, meta } = props;
  const { touched, error } = meta;
  const className = `${touched && error && 'hasError'}`;
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <div>
        <textarea {...input} rows="4" placeholder={placeholder} className={className} />
        {touched && (error && <span className={styles.validationError}>{error}</span>) }
      </div>
    </div>
  );
};
/* eslint-enable react/prop-types */

const required = value => (value ? undefined : 'This field is required');
const maxLength = max => value =>
  (value && value.length > max ? `Must be ${max} characters or less` : undefined);
const maxLength140 = maxLength(140);
const maxLength500 = maxLength(500);

class CommentForm extends Component {
  onSubmitNewComment = (values) => {
    const newCommentData = {
      id: v4(),
      parentId: this.props.postId,
      timestamp: Date.now(),
      ...values,
    };
    this.props.onSaveComment(newCommentData, this.props.postId);
    this.props.onToggleCommentAdd();
  }

  onSubmitEditComment = (values) => {
    const updatedCommentData = {
      ...values,
      isCommentEditFormOpen: false,
    };
    this.props.onUpdateComment(updatedCommentData, this.props.postId);
  }
  render() {
    const { handleSubmit, pristine,
      submitting, onToggleCommentAdd,
      onToggleCommentEdit, commentId } = this.props;
    return (
      <div className={styles.commentFormWrapper}>
        <form className={styles.commentForm} onSubmit={handleSubmit(commentId ? this.onSubmitEditComment : this.onSubmitNewComment)}>
          <Field
            id="rdCommentAuthor"
            name="author"
            type="text"
            component={renderInputField}
            label="Author"
            placeholder="Enter the comment author"
            validate={[required, maxLength140]}
          />
          <Field
            id="rdCommentBody"
            name="body"
            component={renderTextAreaField}
            label="Body"
            placeholder="Write some comment here"
            validate={[required, maxLength500]}
          />
          <div>
            <button type="submit" disabled={pristine || submitting}>
            Submit
            </button>
            <button type="button" disabled={submitting} onClick={commentId ? onToggleCommentEdit : onToggleCommentAdd}>
            Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

CommentForm.propTypes = {
  handleSubmit: T.func.isRequired,
  pristine: T.bool.isRequired,
  submitting: T.bool.isRequired,
  onSaveComment: T.func,
  onUpdateComment: T.func,
  onToggleCommentAdd: T.func,
  onToggleCommentEdit: T.func,
  postId: T.string,
  commentId: T.string,
};

export default reduxForm({
  form: 'commentForm',
})(CommentForm);
