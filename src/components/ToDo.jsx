import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store';

function ToDo({ text, onBtnClick, id }) {
  //{id, text + onBtnClick}
  return (
    <li>
      <Link to={`/${id}`}>
        <span>{text}</span>
      </Link>
      <button onClick={onBtnClick}>'🗑️'</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(actionCreators.deleteTodo(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
