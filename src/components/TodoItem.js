import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between rowLine">
        <h6 className="rowWidth" title={title}>{title}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success" onClick={handleEdit}>
            <i title="Edit Task" className="fas fa-pen cursorPointer" />
          </span>
          <span className="mx-2 text-danger" onClick={handleDelete}>
            <i title="Delete Task" className="fas fa-trash cursorPointer" />
          </span>
        </div>
      </li>
    );
  }
}
