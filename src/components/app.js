import React, {Component} from 'react'
import EditNote from './edit-note'
import NotesGrid from './notes-grid'

import './app.sass'

export default class App extends Component {

  handleEditNote(note) {
    console.log(note);
  }

  render() {
    return (
      <div className='app'>
        <h1 className='app-title'>Notes</h1>
        <EditNote onEditNote={this.handleEditNote}/>
        <NotesGrid />
      </div>
    );
  }
}
