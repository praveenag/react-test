import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Todo extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textAlign: 'left',
      textDecoration: this.props.todo.completed? 'line-through': 'none',
      fontWeight: this.props.todo.completed? 'normal': 'bold'
    }
  }

  render() {
    const  { id, title } = this.props.todo;
    return (<div style={this.getStyle()}>
      <p>
      <input type="checkbox"
      onChange={this.props.markComplete.bind(this, id)} /> {' '} {title}
      <button onClick= {this.props.delTodo.bind(this, id)} style = {btnStyle}>x</button>
      </p>
      </div>);
  }
}


Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 8px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}
export default Todo;
