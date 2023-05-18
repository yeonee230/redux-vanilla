import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { del } from '../store';


// function ToDo({ text, onBtnClick, id }) {
//   //{id, text + onBtnClick}

export default function ToDo({ text, id }) {
  const dispatch = useDispatch();
  return (
    <li>
      <Link to={`/${id}`}>
        <span>{text}</span>
      </Link>
      {/* <button onClick={onBtnClick}>'🗑️'</button> */}
      <button onClick={()=> dispatch(del(id))}>'🗑️'</button>
    </li>
  );
}

// function mapDispatchToProps(dispatch, ownProps) {
//   return {
//     onBtnClick: () => dispatch(del(ownProps.id)),
//   };
// }

// export default connect(null, mapDispatchToProps)(ToDo);
