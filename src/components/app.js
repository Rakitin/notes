import React, {Component} from 'react'
import EditNote from './edit-note/edit-note'

import './app.sass'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 id='app-head'>Notes</h1>
        <EditNote/>
      </div>
    );
  }
}
