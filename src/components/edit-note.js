import React, {Component} from 'react'

import './edit-note.sass'

export default class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
      color: '#fff'
    };
  }

  handleTitleChange(event) {
    console.log(event.target.value);
    this.setState({title: event.target.value});
  }

  handleTextChange(event) {

  }

  handleEditNote(event) {

  }

  render() {
    return (
      <div className='edit-note-form'>
        <input type="text" name="title" placeholder="Title" onChange={this.handleTitleChange.bind(this)} />
        <textarea name="text" rows="8" placeholder="Text of note" />
        <button type="button" name="button" onClick={this.handleEditNote.bind(this)} >Add note</button>
      </div>
    );
  }
}
