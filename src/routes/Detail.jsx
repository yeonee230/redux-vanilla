
import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

function Detail({todos}) {
    const todoId = useParams().id;
    const toDo = todos.find((todo) => todo.id === parseInt(todoId));

    return (
        <>
           <h1>{toDo?.text}</h1>
           <h5>{toDo?.id}</h5>
        </>
    );
}

function mapStateToProps(state) {
    return { todos: state };
    }
    
export default connect(mapStateToProps)(Detail);