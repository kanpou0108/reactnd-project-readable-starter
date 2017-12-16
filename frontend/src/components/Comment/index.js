import { connect } from 'react-redux';

import * as fromComments from '../../redux/modules/comments';
import * as commentsSelector from '../../redux/selectors/comments';
import * as uiSelector from '../../redux/selectors/ui';
import * as fromModal from '../../redux/modules/modal';

import View from './View';

const mapStateToProps = (state, ownProps) => ({
  isCommentEditFormOpen: commentsSelector.getIsCommentEditFormOpen(state, ownProps.comment.id),
  confirmDeleteCommentModalOpen: uiSelector.getConfirmDeleteCommentModalOpen(state),
});

export default connect(
  mapStateToProps,
  { toggleCommentEditForm: fromComments.toggleCommentEditForm,
    updateComment: fromComments.updateComment,
    disableComment: fromComments.disableComment,
    openConfirmDeleteCommentModal: fromModal.openConfirmDeleteCommentModal,
    closeConfirmDeleteCommentModal: fromModal.closeConfirmDeleteCommentModal },
)(View);
