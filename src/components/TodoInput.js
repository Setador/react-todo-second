import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3 inputContainer">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" className="form-control text-capitalize" placeholder="Add new task..." value={item} onChange={handleChange} />
          </div>
          <button type="submit" className={ editItem ? "btn btn-block btn-success mt-3" : "btn btn-block btn-primary mt-3" }>
            {editItem ? "Edit Task" : "Add Task"}
          </button>
        </form>
      </div>
    );
  }
}
