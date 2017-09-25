import React, {Component} from 'react'

import './edit-note.sass'

export default class EditNote extends Component {
  render() {
    return (
      <div className='edit-note-form'>
        <input type="text" name="title" placeholder="Title" />
        <textarea name="text" rows="8" placeholder="Text of note" />
        <button type="button" name="button">Add note</button>
      </div>
    );
  }
}
