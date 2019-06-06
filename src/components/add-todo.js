import React, {Component} from 'react'

export class AddTodo extends Component {

  state = {
    title: ''
  }

  onSubmit= (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({title: ''});
  }

  onChange = (e) => this.setState({[e.target.name]: e.target.value});

  render(){
    return (
      <form style={{display: 'flex', marginTop: '30px'}}>
        <input type="text" name="title"
        style={{flex: '10', padding: '5px'}}
        placeholder="What needs doing?.."
        value={this.state.title}
        onChange={this.onChange}
        />
        <input type="submit" value="Add"
        className="btn" style={{flex: '1'}}
        onClick={this.onSubmit}/>
      </form>
    )
  }

}

export default AddTodo
