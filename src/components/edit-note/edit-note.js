import React, {Component} from 'react'

import './edit-note.sass'

export default class EditNote extends Component {
  render() {
    return (
      <div id='edit-note'>
        <input placeholder='Title' />
        <textarea placeholder="Text" />
        <button>Add note</button>
      </div>
    );
  }
}
